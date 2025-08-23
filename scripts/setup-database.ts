import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import { readFileSync } from 'fs'
import { join } from 'path'

// Load environment variables
dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials in .env.local')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function setupDatabase() {
  console.log('🚀 Starting database setup...')
  
  try {
    // Read the SQL schema file
    const schemaPath = join(process.cwd(), 'supabase', 'schema.sql')
    const schemaSQL = readFileSync(schemaPath, 'utf8')
    
    // Split the SQL into individual statements
    const statements = schemaSQL
      .split(';')
      .map(s => s.trim())
      .filter(s => s.length > 0 && !s.startsWith('--'))
    
    console.log(`📝 Found ${statements.length} SQL statements to execute`)
    
    // Note: Due to RLS and permissions, some statements need to be run via Supabase Dashboard
    console.log('\n⚠️  Important: Due to security restrictions, you need to run the following in Supabase SQL Editor:')
    console.log('1. Go to your Supabase Dashboard')
    console.log('2. Navigate to SQL Editor')
    console.log('3. Create a new query')
    console.log('4. Copy and paste the contents of supabase/schema.sql')
    console.log('5. Click "Run" to create all tables and policies\n')
    
    // We can check if tables exist
    const { data: tables, error: tablesError } = await supabase
      .from('bikes')
      .select('id')
      .limit(1)
    
    if (tablesError && tablesError.code === '42P01') {
      console.log('❌ Tables not found. Please run the schema.sql in Supabase Dashboard first.')
      console.log('\n📋 Quick Setup Steps:')
      console.log('1. Open: https://supabase.com/dashboard/project/crdbiajuhiezzzvznytl/sql/new')
      console.log('2. Copy the contents of supabase/schema.sql')
      console.log('3. Paste and click "Run"')
      console.log('4. Then copy and run supabase/seed.sql for sample data')
    } else if (!tablesError) {
      console.log('✅ Tables already exist!')
      
      // Check if there's data
      const { data: bikes, error: bikesError } = await supabase
        .from('bikes')
        .select('*')
        .limit(1)
      
      if (bikes && bikes.length === 0) {
        console.log('\n📦 No data found. Would you like to add sample data?')
        console.log('Run the seed.sql file in Supabase Dashboard to add sample bikes and cars.')
      } else {
        console.log('✅ Sample data already exists!')
      }
    }
    
  } catch (error) {
    console.error('❌ Error setting up database:', error)
  }
}

setupDatabase()