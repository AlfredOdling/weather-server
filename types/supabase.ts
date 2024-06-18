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
      assignments: {
        Row: {
          active: boolean | null
          companyId: number | null
          created_at: string
          description: string | null
          descriptionHtml: string | null
          exactMatch: boolean | null
          existingAssignment: string | null
          extractedAdInfo: Json | null
          generatedAd: Json | null
          hourlyRate: number | null
          id: number
          keywords: string | null
          language: string[] | null
          length: number | null
          linkToJobAd: string | null
          location: string[] | null
          mustHaveSkills: Json | null
          niceToHaveSkills: Json | null
          profileId: string
          role: string[] | null
          roles: Json | null
          scope: number | null
          seniority: number | null
          startDate: string | null
          status: string | null
          title: string | null
        }
        Insert: {
          active?: boolean | null
          companyId?: number | null
          created_at?: string
          description?: string | null
          descriptionHtml?: string | null
          exactMatch?: boolean | null
          existingAssignment?: string | null
          extractedAdInfo?: Json | null
          generatedAd?: Json | null
          hourlyRate?: number | null
          id?: number
          keywords?: string | null
          language?: string[] | null
          length?: number | null
          linkToJobAd?: string | null
          location?: string[] | null
          mustHaveSkills?: Json | null
          niceToHaveSkills?: Json | null
          profileId: string
          role?: string[] | null
          roles?: Json | null
          scope?: number | null
          seniority?: number | null
          startDate?: string | null
          status?: string | null
          title?: string | null
        }
        Update: {
          active?: boolean | null
          companyId?: number | null
          created_at?: string
          description?: string | null
          descriptionHtml?: string | null
          exactMatch?: boolean | null
          existingAssignment?: string | null
          extractedAdInfo?: Json | null
          generatedAd?: Json | null
          hourlyRate?: number | null
          id?: number
          keywords?: string | null
          language?: string[] | null
          length?: number | null
          linkToJobAd?: string | null
          location?: string[] | null
          mustHaveSkills?: Json | null
          niceToHaveSkills?: Json | null
          profileId?: string
          role?: string[] | null
          roles?: Json | null
          scope?: number | null
          seniority?: number | null
          startDate?: string | null
          status?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "assignments_profileId_fkey"
            columns: ["profileId"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_assignments_companyId_fkey"
            columns: ["companyId"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      candidates: {
        Row: {
          assignmentId: number | null
          created_at: string
          id: number
          notes: string | null
          profileId: string | null
          status: string | null
        }
        Insert: {
          assignmentId?: number | null
          created_at?: string
          id?: number
          notes?: string | null
          profileId?: string | null
          status?: string | null
        }
        Update: {
          assignmentId?: number | null
          created_at?: string
          id?: number
          notes?: string | null
          profileId?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_candidates_assignmentId_fkey"
            columns: ["assignmentId"]
            isOneToOne: false
            referencedRelation: "assignments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_candidates_profileId_fkey"
            columns: ["profileId"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      companies: {
        Row: {
          avatar_url: string | null
          buyer: boolean | null
          company_name: string
          created_at: string
          id: number
          linkedInUrl: string | null
          location: string | null
          org_number: string | null
          supplier: boolean | null
          vatNumber: string | null
        }
        Insert: {
          avatar_url?: string | null
          buyer?: boolean | null
          company_name: string
          created_at?: string
          id?: number
          linkedInUrl?: string | null
          location?: string | null
          org_number?: string | null
          supplier?: boolean | null
          vatNumber?: string | null
        }
        Update: {
          avatar_url?: string | null
          buyer?: boolean | null
          company_name?: string
          created_at?: string
          id?: number
          linkedInUrl?: string | null
          location?: string | null
          org_number?: string | null
          supplier?: boolean | null
          vatNumber?: string | null
        }
        Relationships: []
      }
      contracts: {
        Row: {
          created_at: string
          fileUrl: string | null
          id: number
          name: string | null
          projectId: number | null
        }
        Insert: {
          created_at?: string
          fileUrl?: string | null
          id?: number
          name?: string | null
          projectId?: number | null
        }
        Update: {
          created_at?: string
          fileUrl?: string | null
          id?: number
          name?: string | null
          projectId?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_contracts_projectId_fkey"
            columns: ["projectId"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      matches: {
        Row: {
          assignmentId: number
          created_at: string
          id: number
          matchPercentageMustHave: number | null
          matchPercentageNiceToHave: number | null
          missingTags: Json | null
          overLappingMustHaveSkills: Json | null
          overLappingNiceToHaveSkills: Json | null
          profileObject: Json | null
          request: Json | null
          timezone: number | null
        }
        Insert: {
          assignmentId: number
          created_at?: string
          id?: number
          matchPercentageMustHave?: number | null
          matchPercentageNiceToHave?: number | null
          missingTags?: Json | null
          overLappingMustHaveSkills?: Json | null
          overLappingNiceToHaveSkills?: Json | null
          profileObject?: Json | null
          request?: Json | null
          timezone?: number | null
        }
        Update: {
          assignmentId?: number
          created_at?: string
          id?: number
          matchPercentageMustHave?: number | null
          matchPercentageNiceToHave?: number | null
          missingTags?: Json | null
          overLappingMustHaveSkills?: Json | null
          overLappingNiceToHaveSkills?: Json | null
          profileObject?: Json | null
          request?: Json | null
          timezone?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_matches_duplicate_assignmentId_fkey"
            columns: ["assignmentId"]
            isOneToOne: false
            referencedRelation: "assignments"
            referencedColumns: ["id"]
          },
        ]
      }
      permissions: {
        Row: {
          created_at: string
          id: number
          permissionName: string | null
          roleId: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          permissionName?: string | null
          roleId?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          permissionName?: string | null
          roleId?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_permissions_roleId_fkey"
            columns: ["roleId"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          assignments: number | null
          avaliability: string | null
          avatar_url: string | null
          currentCompanyId: number | null
          description: string | null
          drivenBy: string | null
          email: string | null
          fileResumeUrl: string | null
          first_name: string | null
          googleDocsUrl: string | null
          hasNewPosition: boolean | null
          hourlyRate: number | null
          id: string
          last_name: string | null
          linkedInProfile: Json | null
          linkedInSyncedAt: string | null
          linkedInUrl: string | null
          location: string | null
          oneDriveUrl: string | null
          openForWork: boolean | null
          personality: string | null
          phone_number: string | null
          resumeSource: string | null
          roles: string | null
          scope: number | null
          syncStatus: string | null
          timezone: number | null
          title: string | null
          trackLinkedInProfile: boolean | null
          updated_at: string | null
          useLinkedInDescription: boolean | null
        }
        Insert: {
          assignments?: number | null
          avaliability?: string | null
          avatar_url?: string | null
          currentCompanyId?: number | null
          description?: string | null
          drivenBy?: string | null
          email?: string | null
          fileResumeUrl?: string | null
          first_name?: string | null
          googleDocsUrl?: string | null
          hasNewPosition?: boolean | null
          hourlyRate?: number | null
          id: string
          last_name?: string | null
          linkedInProfile?: Json | null
          linkedInSyncedAt?: string | null
          linkedInUrl?: string | null
          location?: string | null
          oneDriveUrl?: string | null
          openForWork?: boolean | null
          personality?: string | null
          phone_number?: string | null
          resumeSource?: string | null
          roles?: string | null
          scope?: number | null
          syncStatus?: string | null
          timezone?: number | null
          title?: string | null
          trackLinkedInProfile?: boolean | null
          updated_at?: string | null
          useLinkedInDescription?: boolean | null
        }
        Update: {
          assignments?: number | null
          avaliability?: string | null
          avatar_url?: string | null
          currentCompanyId?: number | null
          description?: string | null
          drivenBy?: string | null
          email?: string | null
          fileResumeUrl?: string | null
          first_name?: string | null
          googleDocsUrl?: string | null
          hasNewPosition?: boolean | null
          hourlyRate?: number | null
          id?: string
          last_name?: string | null
          linkedInProfile?: Json | null
          linkedInSyncedAt?: string | null
          linkedInUrl?: string | null
          location?: string | null
          oneDriveUrl?: string | null
          openForWork?: boolean | null
          personality?: string | null
          phone_number?: string | null
          resumeSource?: string | null
          roles?: string | null
          scope?: number | null
          syncStatus?: string | null
          timezone?: number | null
          title?: string | null
          trackLinkedInProfile?: boolean | null
          updated_at?: string | null
          useLinkedInDescription?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_assignments_fkey"
            columns: ["assignments"]
            isOneToOne: false
            referencedRelation: "assignments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_profiles_currentCompanyId_fkey"
            columns: ["currentCompanyId"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles_companies_roles: {
        Row: {
          companyId: number | null
          created_at: string
          id: number
          profileId: string | null
          roleId: number | null
        }
        Insert: {
          companyId?: number | null
          created_at?: string
          id?: number
          profileId?: string | null
          roleId?: number | null
        }
        Update: {
          companyId?: number | null
          created_at?: string
          id?: number
          profileId?: string | null
          roleId?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_profiles_companies_roles_companyId_fkey"
            columns: ["companyId"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_profiles_companies_roles_profileId_fkey"
            columns: ["profileId"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_profiles_roles_roleId_fkey"
            columns: ["roleId"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          assignmentId: number | null
          companyId: number | null
          consultantId: number | null
          created_at: string
          id: number
          info: string | null
          name: string | null
          status: string | null
        }
        Insert: {
          assignmentId?: number | null
          companyId?: number | null
          consultantId?: number | null
          created_at?: string
          id?: number
          info?: string | null
          name?: string | null
          status?: string | null
        }
        Update: {
          assignmentId?: number | null
          companyId?: number | null
          consultantId?: number | null
          created_at?: string
          id?: number
          info?: string | null
          name?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_projects_assignmentId_fkey"
            columns: ["assignmentId"]
            isOneToOne: false
            referencedRelation: "assignments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_projects_companyId_fkey"
            columns: ["companyId"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_projects_consultantId_fkey"
            columns: ["consultantId"]
            isOneToOne: false
            referencedRelation: "candidates"
            referencedColumns: ["id"]
          },
        ]
      }
      requests: {
        Row: {
          assignmentId: number | null
          created_at: string
          id: number
          profileId: string | null
          status: string | null
        }
        Insert: {
          assignmentId?: number | null
          created_at?: string
          id?: number
          profileId?: string | null
          status?: string | null
        }
        Update: {
          assignmentId?: number | null
          created_at?: string
          id?: number
          profileId?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_requests_assignmentId_fkey"
            columns: ["assignmentId"]
            isOneToOne: false
            referencedRelation: "assignments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_requests_profileId_fkey"
            columns: ["profileId"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      resumes: {
        Row: {
          created_at: string
          drivenBy: string | null
          education: string[] | null
          email: string | null
          firstName: string | null
          id: string
          industries: string[] | null
          language: string[] | null
          lastName: string | null
          location: string[] | null
          personality: string | null
          phone: string | null
          profileDescription: string | null
          profileId: string | null
          resumeJson: Json | null
          resumePdfUrl: string | null
          resumeSyncedAt: string | null
          roles: string | null
          summarizedResume: Json | null
          title: string | null
          traitsAndQualities: string[] | null
          yearsOfExperience: number | null
        }
        Insert: {
          created_at?: string
          drivenBy?: string | null
          education?: string[] | null
          email?: string | null
          firstName?: string | null
          id?: string
          industries?: string[] | null
          language?: string[] | null
          lastName?: string | null
          location?: string[] | null
          personality?: string | null
          phone?: string | null
          profileDescription?: string | null
          profileId?: string | null
          resumeJson?: Json | null
          resumePdfUrl?: string | null
          resumeSyncedAt?: string | null
          roles?: string | null
          summarizedResume?: Json | null
          title?: string | null
          traitsAndQualities?: string[] | null
          yearsOfExperience?: number | null
        }
        Update: {
          created_at?: string
          drivenBy?: string | null
          education?: string[] | null
          email?: string | null
          firstName?: string | null
          id?: string
          industries?: string[] | null
          language?: string[] | null
          lastName?: string | null
          location?: string[] | null
          personality?: string | null
          phone?: string | null
          profileDescription?: string | null
          profileId?: string | null
          resumeJson?: Json | null
          resumePdfUrl?: string | null
          resumeSyncedAt?: string | null
          roles?: string | null
          summarizedResume?: Json | null
          title?: string | null
          traitsAndQualities?: string[] | null
          yearsOfExperience?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "resumes_profileId_fkey"
            columns: ["profileId"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      roles: {
        Row: {
          created_at: string
          id: number
          roleName: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          roleName?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          roleName?: string | null
        }
        Relationships: []
      }
      tags: {
        Row: {
          created_at: string
          id: string
          key: string | null
          profileId: string | null
          value: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          key?: string | null
          profileId?: string | null
          value?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          key?: string | null
          profileId?: string | null
          value?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_tags_profileId_fkey"
            columns: ["profileId"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
