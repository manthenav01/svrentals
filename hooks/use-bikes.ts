"use client"

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Database } from '@/types/database'

type Bike = Database['public']['Tables']['bikes']['Row']

export function useBikes(filters?: {
  type?: string
  available?: boolean
  location?: string
}) {
  const [bikes, setBikes] = useState<Bike[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchBikes() {
      try {
        const supabase = createClient()
        let query = supabase.from('bikes').select('*')

        if (filters?.type) {
          query = query.eq('type', filters.type)
        }

        if (filters?.available !== undefined) {
          query = query.eq('available', filters.available)
        }

        if (filters?.location) {
          query = query.ilike('location', `%${filters.location}%`)
        }

        const { data, error } = await query.order('created_at', { ascending: false })

        if (error) throw error

        setBikes(data || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchBikes()
  }, [filters?.type, filters?.available, filters?.location])

  return { bikes, loading, error }
}