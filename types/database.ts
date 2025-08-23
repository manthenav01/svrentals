export interface Database {
  public: {
    Tables: {
      bikes: {
        Row: {
          id: string
          created_at: string
          name: string
          type: 'mountain' | 'road' | 'hybrid' | 'electric' | 'city' | 'scooter'
          brand: string
          model: string
          year: number
          description: string | null
          features: string[]
          image_url: string | null
          images: string[]
          price_per_hour: number
          price_per_day: number
          price_per_week: number
          available: boolean
          location: string
          gear_count: number | null
          frame_size: string | null
          wheel_size: string | null
          max_rider_weight: number | null
          rating: number | null
          total_reviews: number
          total_rentals: number
        }
        Insert: Omit<Database['public']['Tables']['bikes']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['bikes']['Insert']>
      }
      bookings: {
        Row: {
          id: string
          created_at: string
          user_id: string | null
          customer_name: string
          customer_email: string
          customer_phone: string
          vehicle_type: 'bike'
          vehicle_id: string
          start_date: string
          end_date: string
          pickup_time: string
          return_time: string
          rental_type: 'hourly' | 'daily' | 'weekly' | 'monthly'
          total_amount: number
          status: 'pending' | 'confirmed' | 'active' | 'completed' | 'cancelled'
          payment_status: 'pending' | 'paid' | 'refunded'
          payment_method: string | null
          notes: string | null
        }
        Insert: Omit<Database['public']['Tables']['bookings']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['bookings']['Insert']>
      }
      reviews: {
        Row: {
          id: string
          created_at: string
          user_id: string | null
          booking_id: string
          vehicle_type: 'bike'
          vehicle_id: string
          rating: number
          title: string | null
          comment: string | null
          reviewer_name: string
          verified_rental: boolean
        }
        Insert: Omit<Database['public']['Tables']['reviews']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['reviews']['Insert']>
      }
      users: {
        Row: {
          id: string
          created_at: string
          email: string
          full_name: string | null
          phone: string | null
          avatar_url: string | null
          address: string | null
          city: string | null
          state: string | null
          postal_code: string | null
          driving_license: string | null
          id_proof: string | null
          verified: boolean
        }
        Insert: Omit<Database['public']['Tables']['users']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['users']['Insert']>
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}