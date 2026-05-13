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
      profiles: {
        Row: {
          id: string
          full_name: string | null
          avatar_url: string | null
          role: 'member' | 'verified_member' | 'moderator' | 'admin' | 'super_admin'
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          full_name?: string | null
          avatar_url?: string | null
          role?: 'member' | 'verified_member' | 'moderator' | 'admin' | 'super_admin'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          full_name?: string | null
          avatar_url?: string | null
          role?: 'member' | 'verified_member' | 'moderator' | 'admin' | 'super_admin'
          created_at?: string
          updated_at?: string
        }
      }
      organizations: {
        Row: {
          id: string
          owner_id: string
          name: string
          slug: string
          logo_url: string | null
          country: string
          city: string | null
          description: string
          website_url: string | null
          team_size: string | null
          contact_email: string
          collaboration_ready: boolean
          maturity_level: 'idea' | 'startup' | 'sme' | 'enterprise' | 'research_lab' | 'university' | 'government'
          verification_status: 'pending' | 'basic' | 'verified' | 'institutional' | 'partner'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          owner_id: string
          name: string
          slug: string
          logo_url?: string | null
          country: string
          city?: string | null
          description: string
          website_url?: string | null
          team_size?: string | null
          contact_email: string
          collaboration_ready?: boolean
          maturity_level: 'idea' | 'startup' | 'sme' | 'enterprise' | 'research_lab' | 'university' | 'government'
          verification_status?: 'pending' | 'basic' | 'verified' | 'institutional' | 'partner'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          owner_id?: string
          name?: string
          slug?: string
          logo_url?: string | null
          country?: string
          city?: string | null
          description?: string
          website_url?: string | null
          team_size?: string | null
          contact_email?: string
          collaboration_ready?: boolean
          maturity_level?: 'idea' | 'startup' | 'sme' | 'enterprise' | 'research_lab' | 'university' | 'government'
          verification_status?: 'pending' | 'basic' | 'verified' | 'institutional' | 'partner'
          created_at?: string
          updated_at?: string
        }
      }
      ai_capabilities: {
        Row: {
          id: string
          name: string
          description: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          created_at?: string
        }
      }
      sectors: {
        Row: {
          id: string
          name: string
          description: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          created_at?: string
        }
      }
      collaborations: {
        Row: {
          id: string
          sender_org_id: string
          receiver_org_id: string
          status: 'pending' | 'accepted' | 'rejected' | 'completed'
          intent_type: string
          message: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          sender_org_id: string
          receiver_org_id: string
          status?: 'pending' | 'accepted' | 'rejected' | 'completed'
          intent_type: string
          message?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          sender_org_id?: string
          receiver_org_id?: string
          status?: 'pending' | 'accepted' | 'rejected' | 'completed'
          intent_type?: string
          message?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
