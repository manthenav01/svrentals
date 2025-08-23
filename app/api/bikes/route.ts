import { createServerSupabaseClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    const supabase = await createServerSupabaseClient()
    const { searchParams } = new URL(request.url)
    
    const type = searchParams.get('type')
    const available = searchParams.get('available')
    const location = searchParams.get('location')
    
    let query = supabase.from('bikes').select('*')
    
    if (type) {
      query = query.eq('type', type)
    }
    
    if (available !== null) {
      query = query.eq('available', available === 'true')
    }
    
    if (location) {
      query = query.ilike('location', `%${location}%`)
    }
    
    const { data, error } = await query.order('created_at', { ascending: false })
    
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
    
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}