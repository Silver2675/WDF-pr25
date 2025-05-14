import 'next-auth/jwt'

declare module 'next-auth/jwt' {
  export interface JWT {
    access_token?: string
    refresh_token?: string
    expires_at?: number
  }
}
