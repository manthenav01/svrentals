-- Example of adding JSON/JSONB columns to your existing schema

-- Add JSON columns to bikes table for flexible data
ALTER TABLE public.bikes 
ADD COLUMN IF NOT EXISTS specifications JSONB,
ADD COLUMN IF NOT EXISTS metadata JSONB;

-- Add JSON columns to cars table
ALTER TABLE public.cars 
ADD COLUMN IF NOT EXISTS specifications JSONB,
ADD COLUMN IF NOT EXISTS metadata JSONB;

-- Example of how to use JSONB columns
-- You can store any structured data without modifying the schema

-- For bikes:
-- specifications: {"weight": "15kg", "material": "aluminum", "warranty": "2 years"}
-- metadata: {"tags": ["popular", "eco-friendly"], "last_service": "2024-01-15"}

-- For cars:
-- specifications: {"engine": "1.5L", "torque": "250Nm", "top_speed": "180kmph"}
-- metadata: {"insurance_valid_till": "2024-12-31", "pollution_cert": "2024-06-30"}

-- Create indexes on JSONB fields for better performance
CREATE INDEX IF NOT EXISTS idx_bikes_specifications ON public.bikes USING GIN (specifications);
CREATE INDEX IF NOT EXISTS idx_bikes_metadata ON public.bikes USING GIN (metadata);
CREATE INDEX IF NOT EXISTS idx_cars_specifications ON public.cars USING GIN (specifications);
CREATE INDEX IF NOT EXISTS idx_cars_metadata ON public.cars USING GIN (metadata);

-- Example queries with JSONB:
-- SELECT * FROM bikes WHERE specifications->>'weight' = '15kg';
-- SELECT * FROM cars WHERE metadata->'tags' ? 'luxury';
-- SELECT * FROM bikes WHERE specifications->'warranty' IS NOT NULL;