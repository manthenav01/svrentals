import { createServerSupabaseClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

// In-memory cache for bikes data
let bikesCache: any = null
let cacheTimestamp: number = 0
const CACHE_DURATION = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

// For server restart detection, we'll use a simple approach
// The cache will be cleared when the server restarts (variables reset)

async function fetchBikesFromDatabase() {
  const supabase = await createServerSupabaseClient()
  const { data, error } = await supabase
    .from('bikes')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) {
    throw new Error(error.message)
  }
  
  return data
}

function filterBikes(bikes: any[], type?: string | null, available?: string | null, location?: string | null) {
  let filteredBikes = [...bikes]
  
  if (type) {
    filteredBikes = filteredBikes.filter(bike => bike.type === type)
  }
  
  if (available !== null) {
    const isAvailable = available === 'true'
    filteredBikes = filteredBikes.filter(bike => bike.available === isAvailable)
  }
  
  if (location) {
    filteredBikes = filteredBikes.filter(bike => 
      bike.location.toLowerCase().includes(location.toLowerCase())
    )
  }
  
  return filteredBikes
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    
    const type = searchParams.get('type')
    const available = searchParams.get('available')
    const location = searchParams.get('location')
    
    // Check if we need to fetch from database
    const now = Date.now()
    const needsFetch = !bikesCache || (now - cacheTimestamp > CACHE_DURATION)
    
    if (needsFetch) {
      console.log('Fetching bikes from database...')
      bikesCache = await fetchBikesFromDatabase()
      cacheTimestamp = now
    } else {
      console.log('Using cached bikes data...')
    }
    
    // Filter the cached data based on query parameters
    const filteredData = filterBikes(bikesCache, type, available, location)
    
    return NextResponse.json(filteredData)
  } catch (error: any) {
    console.error('Error in bikes API:', error)
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}

// Optional: Add a way to manually clear cache (useful for development)
export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    if (body.action === 'clear-cache') {
      bikesCache = null
      cacheTimestamp = 0
      console.log('Bikes cache cleared manually')
      return NextResponse.json({ message: 'Cache cleared successfully' })
    }
    
    return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}