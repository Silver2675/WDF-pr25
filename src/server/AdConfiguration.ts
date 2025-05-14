import { PHASE_PRODUCTION_BUILD } from 'next/dist/shared/lib/constants'

const clientId = process.env.AZURE_AD_CLIENT_ID ?? ''
const clientSecret = process.env.AZURE_AD_CLIENT_SECRET ?? ''
const tenantId = process.env.AZURE_AD_TENANT_ID ?? ''
const apiScope = process.env.AZURE_AD_SCOPE ?? ''

if (
  process.env.NEXT_PHASE !== PHASE_PRODUCTION_BUILD &&
  (clientId === '' || clientSecret === '' || tenantId === '' || apiScope === '')
) {
  throw new Error('Missing Azure AD configuration environment variables')
}

export { clientId, clientSecret, tenantId, apiScope }
