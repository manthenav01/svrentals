# Supabase Setup Guide for SV Rentals

## Prerequisites
- A Supabase account (create one at https://supabase.com)
- Node.js and npm installed

## Step 1: Create a Supabase Project

1. Go to https://supabase.com and sign in
2. Click "New Project"
3. Fill in the project details:
   - Project name: `sv-rentals`
   - Database Password: (choose a strong password)
   - Region: Choose the closest to your location
4. Click "Create Project" and wait for setup to complete

## Step 2: Get Your Project Credentials

1. Once your project is created, go to Settings → API
2. Copy the following values:
   - `Project URL` (looks like: https://xxxxx.supabase.co)
   - `anon public` key (under Project API keys)
   - `service_role` key (keep this secret!)

## Step 3: Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   ```

## Step 4: Set Up Database Tables

1. Go to your Supabase Dashboard
2. Click on "SQL Editor" in the left sidebar
3. Click "New Query"
4. Copy and paste the contents of `supabase/schema.sql`
5. Click "Run" to create all tables and policies

## Step 5: Add Sample Data (Optional)

1. In the SQL Editor, create a new query
2. Copy and paste the contents of `supabase/seed.sql`
3. Click "Run" to add sample bikes and cars

## Step 6: Enable Authentication (Optional)

1. Go to Authentication → Settings
2. Enable Email/Password authentication
3. Configure email templates if needed
4. Set up OAuth providers (Google, GitHub, etc.) if desired

## Step 7: Test the Connection

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:
   - http://localhost:3000/bikes - Should show bikes from database
   - http://localhost:3000/cars - Should show cars from database

## Database Schema Overview

### Tables Created:
- **bikes**: Stores all bike rental inventory
- **cars**: Stores all car rental inventory
- **users**: User profiles (extends Supabase auth)
- **bookings**: Rental bookings and reservations
- **reviews**: Customer reviews and ratings

### Row Level Security (RLS):
- Public can view bikes and cars
- Only authenticated users can modify inventory
- Users can only view/edit their own bookings and profile

## Troubleshooting

### Connection Issues
- Verify your environment variables are correct
- Check if your Supabase project is active
- Ensure RLS policies are properly configured

### No Data Showing
- Run the seed.sql script to add sample data
- Check browser console for errors
- Verify API routes are working: `/api/bikes`, `/api/cars`

### Authentication Errors
- Ensure anon key is correct in `.env.local`
- Check if RLS policies match your authentication setup

## Next Steps

1. Customize the database schema in `types/database.ts` as needed
2. Add more API endpoints in `/app/api/`
3. Implement user authentication flows
4. Set up real-time subscriptions for live updates
5. Configure storage buckets for vehicle images

## Useful Supabase Features

- **Real-time subscriptions**: Get live updates when data changes
- **Storage**: Store vehicle images and documents
- **Edge Functions**: Run server-side code
- **Vector embeddings**: Add AI-powered search

## Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Next.js + Supabase Guide](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)