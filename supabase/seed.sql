-- Seed data for bikes
INSERT INTO public.bikes (name, type, brand, model, year, description, features, image_url, price_per_hour, price_per_day, price_per_week, available, location, gear_count, frame_size, wheel_size, rating, total_reviews, total_rentals)
VALUES
('Honda Activa 6G BS6', 'scooter', 'Honda', 'Activa 6G BS6', 2024, 'Reliable and fuel-efficient scooter for city rides',
 ARRAY['110cc engine', 'CBS braking system', 'LED headlamp', 'Digital meter', 'Tubeless tires'],
 'https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=800',
 300, 1800, 9000, true, 'Kukatpally, Hyderabad', 0, 'Standard', '12"', 4.7, 30, 200),

('Yamaha Fascino 125', 'scooter', 'Yamaha', 'Fascino 125', 2024, 'Comfortable city bike perfect for daily commutes',
 ARRAY['Comfortable saddle', 'Rear carrier', 'LED lights', 'Chain guard', 'Mudguards'], 
 'https://images.unsplash.com/photo-1545198530-9bbf2334b6c5?w=800', 
 150, 800, 4500, true, 'Madhapur, Hyderabad', 0, 'Standard', '12"', 4.3, 45, 320),