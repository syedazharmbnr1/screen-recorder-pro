export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      recordings: {
        Row: {
          id: string
          created_at: string
          user_id: string
          title: string | null
          video_url: string | null
          duration: number | null
        }
        Insert: {
          id?: string
          created_at?: string
          user_id: string
          title?: string | null
          video_url?: string | null
          duration?: number | null
        }
        Update: {
          id?: string
          created_at?: string
          user_id?: string
          title?: string | null
          video_url?: string | null
          duration?: number | null
        }
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}