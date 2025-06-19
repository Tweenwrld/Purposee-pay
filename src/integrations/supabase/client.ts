export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      audit_logs: {
        Row: {
          action: string
          created_at: string
          id: string
          ip_address: unknown | null
          metadata: Json | null
          resource_id: string | null
          resource_type: string
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          action: string
          created_at?: string
          id?: string
          ip_address?: unknown | null
          metadata?: Json | null
          resource_id?: string | null
          resource_type: string
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          action?: string
          created_at?: string
          id?: string
          ip_address?: unknown | null
          metadata?: Json | null
          resource_id?: string | null
          resource_type?: string
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      contacts: {
        Row: {
          contact_email: string | null
          contact_name: string
          contact_phone: string | null
          contact_wallet_address: string | null
          created_at: string | null
          id: string
          user_id: string
        }
        Insert: {
          contact_email?: string | null
          contact_name: string
          contact_phone?: string | null
          contact_wallet_address?: string | null
          created_at?: string | null
          id?: string
          user_id: string
        }
        Update: {
          contact_email?: string | null
          contact_name?: string
          contact_phone?: string | null
          contact_wallet_address?: string | null
          created_at?: string | null
          id?: string
          user_id?: string
        }
        Relationships: []
      }
      dashboard_metrics: {
        Row: {
          created_at: string
          date: string
          id: string
          metric_data: Json
          metric_type: string
          period: string
        }
        Insert: {
          created_at?: string
          date: string
          id?: string
          metric_data: Json
          metric_type: string
          period: string
        }
        Update: {
          created_at?: string
          date?: string
          id?: string
          metric_data?: Json
          metric_type?: string
          period?: string
        }
        Relationships: []
      }
      mpesa_transactions: {
        Row: {
          account_reference: string | null
          amount: number
          checkout_request_id: string | null
          created_at: string
          customer_message: string | null
          id: string
          merchant_request_id: string | null
          phone_number: string
          response_code: string | null
          response_description: string | null
          status: string | null
          transaction_desc: string | null
          transaction_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          account_reference?: string | null
          amount: number
          checkout_request_id?: string | null
          created_at?: string
          customer_message?: string | null
          id?: string
          merchant_request_id?: string | null
          phone_number: string
          response_code?: string | null
          response_description?: string | null
          status?: string | null
          transaction_desc?: string | null
          transaction_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          account_reference?: string | null
          amount?: number
          checkout_request_id?: string | null
          created_at?: string
          customer_message?: string | null
          id?: string
          merchant_request_id?: string | null
          phone_number?: string
          response_code?: string | null
          response_description?: string | null
          status?: string | null
          transaction_desc?: string | null
          transaction_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          address: string | null
          avatar_url: string | null
          bio: string | null
          created_at: string | null
          email: string | null
          full_name: string | null
          handle: string | null
          id: string
          language: string | null
          mpesa_number: string | null
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          handle?: string | null
          id: string
          language?: string | null
          mpesa_number?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          handle?: string | null
          id?: string
          language?: string | null
          mpesa_number?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      rate_limits: {
        Row: {
          created_at: string
          endpoint: string
          id: string
          request_count: number | null
          user_id: string | null
          window_start: string
        }
        Insert: {
          created_at?: string
          endpoint: string
          id?: string
          request_count?: number | null
          user_id?: string | null
          window_start?: string
        }
        Update: {
          created_at?: string
          endpoint?: string
          id?: string
          request_count?: number | null
          user_id?: string | null
          window_start?: string
        }
        Relationships: []
      }
      remittances: {
        Row: {
          amount: number
          beneficiary_id: string | null
          beneficiary_wallet_address: string | null
          claimed_at: string | null
          created_at: string | null
          currency: string | null
          escrow_address: string | null
          id: string
          purpose: string
          sender_id: string
          signature_verification: Json | null
          status: string | null
          sui_object_id: string | null
          sui_transaction_hash: string | null
          updated_at: string | null
          validated_at: string | null
          validation_code: string | null
          validator_id: string | null
        }
        Insert: {
          amount: number
          beneficiary_id?: string | null
          beneficiary_wallet_address?: string | null
          claimed_at?: string | null
          created_at?: string | null
          currency?: string | null
          escrow_address?: string | null
          id?: string
          purpose: string
          sender_id: string
          signature_verification?: Json | null
          status?: string | null
          sui_object_id?: string | null
          sui_transaction_hash?: string | null
          updated_at?: string | null
          validated_at?: string | null
          validation_code?: string | null
          validator_id?: string | null
        }
        Update: {
          amount?: number
          beneficiary_id?: string | null
          beneficiary_wallet_address?: string | null
          claimed_at?: string | null
          created_at?: string | null
          currency?: string | null
          escrow_address?: string | null
          id?: string
          purpose?: string
          sender_id?: string
          signature_verification?: Json | null
          status?: string | null
          sui_object_id?: string | null
          sui_transaction_hash?: string | null
          updated_at?: string | null
          validated_at?: string | null
          validation_code?: string | null
          validator_id?: string | null
        }
        Relationships: []
      }
      transactions: {
        Row: {
          amount: number
          created_at: string | null
          currency: string | null
          id: string
          notes: string | null
          purpose: string | null
          receiver_wallet_id: string | null
          sender_wallet_id: string | null
          status: string | null
          transaction_type: string
          updated_at: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          currency?: string | null
          id?: string
          notes?: string | null
          purpose?: string | null
          receiver_wallet_id?: string | null
          sender_wallet_id?: string | null
          status?: string | null
          transaction_type: string
          updated_at?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          currency?: string | null
          id?: string
          notes?: string | null
          purpose?: string | null
          receiver_wallet_id?: string | null
          sender_wallet_id?: string | null
          status?: string | null
          transaction_type?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "transactions_receiver_wallet_id_fkey"
            columns: ["receiver_wallet_id"]
            isOneToOne: false
            referencedRelation: "wallets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_sender_wallet_id_fkey"
            columns: ["sender_wallet_id"]
            isOneToOne: false
            referencedRelation: "wallets"
            referencedColumns: ["id"]
          },
        ]
      }
      user_2fa: {
        Row: {
          backup_codes: string[] | null
          created_at: string
          id: string
          is_enabled: boolean | null
          last_used_at: string | null
          secret: string
          user_id: string
        }
        Insert: {
          backup_codes?: string[] | null
          created_at?: string
          id?: string
          is_enabled?: boolean | null
          last_used_at?: string | null
          secret: string
          user_id: string
        }
        Update: {
          backup_codes?: string[] | null
          created_at?: string
          id?: string
          is_enabled?: boolean | null
          last_used_at?: string | null
          secret?: string
          user_id?: string
        }
        Relationships: []
      }
      wallets: {
        Row: {
          balance: number | null
          created_at: string | null
          currency: string | null
          id: string
          is_primary: boolean | null
          public_key: string | null
          status: string | null
          sui_address: string | null
          updated_at: string | null
          user_id: string
          wallet_address: string
          wallet_type: string | null
        }
        Insert: {
          balance?: number | null
          created_at?: string | null
          currency?: string | null
          id?: string
          is_primary?: boolean | null
          public_key?: string | null
          status?: string | null
          sui_address?: string | null
          updated_at?: string | null
          user_id: string
          wallet_address: string
          wallet_type?: string | null
        }
        Update: {
          balance?: number | null
          created_at?: string | null
          currency?: string | null
          id?: string
          is_primary?: boolean | null
          public_key?: string | null
          status?: string | null
          sui_address?: string | null
          updated_at?: string | null
          user_id?: string
          wallet_address?: string
          wallet_type?: string | null
        }
        Relationships: []
      }
      zklogin_sessions: {
        Row: {
          aud: string
          created_at: string
          ephemeral_public_key: string
          expires_at: string
          id: string
          jwt_randomness: string
          max_epoch: number
          provider: string
          signature: string | null
          sub: string
          user_id: string | null
        }
        Insert: {
          aud: string
          created_at?: string
          ephemeral_public_key: string
          expires_at: string
          id?: string
          jwt_randomness: string
          max_epoch: number
          provider: string
          signature?: string | null
          sub: string
          user_id?: string | null
        }
        Update: {
          aud?: string
          created_at?: string
          ephemeral_public_key?: string
          expires_at?: string
          id?: string
          jwt_randomness?: string
          max_epoch?: number
          provider?: string
          signature?: string | null
          sub?: string
          user_id?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      check_rate_limit: {
        Args: {
          p_user_id: string
          p_endpoint: string
          p_limit?: number
          p_window_minutes?: number
        }
        Returns: boolean
      }
      log_audit_event: {
        Args: {
          p_user_id: string
          p_action: string
          p_resource_type: string
          p_resource_id?: string
          p_ip_address?: unknown
          p_user_agent?: string
          p_metadata?: Json
        }
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
