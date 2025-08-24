-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create bikes table
CREATE TABLE IF NOT EXISTS public.bikes (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
    name TEXT NOT NULL,
    type TEXT CHECK (type IN ('scooter', 'road', 'hybrid', 'electric', 'bike')) NOT NULL,
    brand TEXT NOT NULL,
    model TEXT NOT NULL,
    year INTEGER NOT NULL,
    description TEXT,
    features TEXT[] DEFAULT '{}',
    image_url TEXT,
    images TEXT[] DEFAULT '{}',
    price_per_hour DECIMAL(10, 2) NOT NULL,
    price_per_day DECIMAL(10, 2) NOT NULL,
    price_per_week DECIMAL(10, 2) NOT NULL,
    available BOOLEAN DEFAULT true,
    location TEXT NOT NULL,
    gear_count INTEGER,
    frame_size TEXT,
    wheel_size TEXT,
    max_rider_weight INTEGER,
    rating DECIMAL(3, 2),
    total_reviews INTEGER DEFAULT 0,
    total_rentals INTEGER DEFAULT 0
);


-- Create users table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS public.users (
    id UUID REFERENCES auth.users(id) PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT,
    phone TEXT,
    avatar_url TEXT,
    address TEXT,
    city TEXT,
    state TEXT,
    postal_code TEXT,
    driving_license TEXT,
    id_proof TEXT,
    verified BOOLEAN DEFAULT false
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS public.bookings (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
    user_id UUID REFERENCES public.users(id),
    customer_name TEXT NOT NULL,
    customer_email TEXT NOT NULL,
    customer_phone TEXT NOT NULL,
    vehicle_type TEXT CHECK (vehicle_type IN ('bike', 'car')) NOT NULL,
    vehicle_id UUID NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    pickup_time TIME NOT NULL,
    return_time TIME NOT NULL,
    rental_type TEXT CHECK (rental_type IN ('hourly', 'daily', 'weekly', 'monthly')) NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    status TEXT CHECK (status IN ('pending', 'confirmed', 'active', 'completed', 'cancelled')) DEFAULT 'pending',
    payment_status TEXT CHECK (payment_status IN ('pending', 'paid', 'refunded')) DEFAULT 'pending',
    payment_method TEXT,
    notes TEXT
);

-- Create reviews table
CREATE TABLE IF NOT EXISTS public.reviews (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
    user_id UUID REFERENCES public.users(id),
    booking_id UUID REFERENCES public.bookings(id),
    vehicle_type TEXT CHECK (vehicle_type IN ('bike', 'car')) NOT NULL,
    vehicle_id UUID NOT NULL,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5) NOT NULL,
    title TEXT,
    comment TEXT,
    reviewer_name TEXT NOT NULL,
    verified_rental BOOLEAN DEFAULT false
);

-- Create indexes for better performance
CREATE INDEX idx_bikes_available ON public.bikes(available);
CREATE INDEX idx_bikes_type ON public.bikes(type);
CREATE INDEX idx_bikes_location ON public.bikes(location);
CREATE INDEX idx_cars_available ON public.cars(available);
CREATE INDEX idx_cars_type ON public.cars(type);
CREATE INDEX idx_cars_location ON public.cars(location);
CREATE INDEX idx_bookings_user_id ON public.bookings(user_id);
CREATE INDEX idx_bookings_vehicle_id ON public.bookings(vehicle_id);
CREATE INDEX idx_bookings_status ON public.bookings(status);
CREATE INDEX idx_reviews_vehicle_id ON public.reviews(vehicle_id);

-- Row Level Security (RLS) Policies
ALTER TABLE public.bikes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cars ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Bikes policies (public read, authenticated write)
CREATE POLICY "Bikes are viewable by everyone" ON public.bikes
    FOR SELECT USING (true);

CREATE POLICY "Bikes can be inserted by authenticated users" ON public.bikes
    FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Bikes can be updated by authenticated users" ON public.bikes
    FOR UPDATE USING (auth.uid() IS NOT NULL);

-- Cars policies (public read, authenticated write)
CREATE POLICY "Cars are viewable by everyone" ON public.cars
    FOR SELECT USING (true);

CREATE POLICY "Cars can be inserted by authenticated users" ON public.cars
    FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Cars can be updated by authenticated users" ON public.cars
    FOR UPDATE USING (auth.uid() IS NOT NULL);

-- Users policies
CREATE POLICY "Users can view their own profile" ON public.users
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.users
    FOR UPDATE USING (auth.uid() = id);

-- Bookings policies
CREATE POLICY "Users can view their own bookings" ON public.bookings
    FOR SELECT USING (auth.uid() = user_id OR auth.uid() IS NOT NULL);

CREATE POLICY "Anyone can create bookings" ON public.bookings
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can update their own bookings" ON public.bookings
    FOR UPDATE USING (auth.uid() = user_id);

-- Reviews policies
CREATE POLICY "Reviews are viewable by everyone" ON public.reviews
    FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create reviews" ON public.reviews
    FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Users can update their own reviews" ON public.reviews
    FOR UPDATE USING (auth.uid() = user_id);