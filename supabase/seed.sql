-- Seed data for bikes
INSERT INTO public.bikes (name, type, brand, model, year, description, features, image_url, price_per_hour, price_per_day, price_per_week, price_per_month, available, location, gear_count, frame_size, wheel_size, rating, total_reviews, total_rentals)
VALUES
('Honda Activa 5G', 'scooter', 'Honda', 'Activa 5G', 2023, 'Comfortable and reliable scooter perfect for daily commutes',
 ARRAY['109cc engine', 'Combi-brake system', 'LED position lamp', 'Analog-digital meter', 'Tubeless tires'], 
 '/active-5g.jpg', 
 0, 399, 1800, 6000, true, 'KPHB Colony', 0, 'Standard', '12"', 4.5, 45, 320),

('Honda Activa 6G BS6', 'scooter', 'Honda', 'Activa 6G BS6', 2024, 'Reliable and fuel-efficient scooter for city rides',
 ARRAY['110cc engine', 'CBS braking system', 'LED headlamp', 'Digital meter', 'Tubeless tires'],
 '/activa-6g.png',
 0, 500, 2100, 7000, true, 'KPHB Colony', 0, 'Standard', '12"', 4.7, 30, 200),

('Royal Enfield Classic 350', 'bike', 'Royal Enfield', 'Classic 350', 2023, 'Iconic cruiser with vintage styling',
 ARRAY['Retro design', 'Comfortable seating', 'Powerful engine', 'Classic round headlamp', 'Alloy wheels'],
 '/classic-350.jpg',
 0, 999, 5000, 15000, false, 'KPHB Colony', 5, 'Large', '18"', 4.8, 60, 300),

('Yamaha FZ V3', 'bike', 'Yamaha', 'FZ V3', 2024, 'Sporty and stylish street fighter with excellent performance',
 ARRAY['149cc engine', 'LED headlamp', 'Digital LCD instrument', 'Single-channel ABS', 'Fuel injection'],
 '/fz-v3.png',
 0, 700, 3500, 12000, false, 'KPHB Colony', 5, 'Standard', '17"', 4.6, 35, 250);