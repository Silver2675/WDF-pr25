'use client'

import { aboutCard, aboutDetails, mainLayout } from '@/styles/styles'
import { authors } from '@/constants/authors'
import { publicRuntimeConfig } from '../../../next.config'
import { apiUrls } from '@/constants/apiUrls'
import { Card, Typography, Box, CircularProgress } from '@mui/material'
import { useState, useCallback, useEffect } from 'react'
import { AppInformation } from './types'
import { request } from '@/server/backend/types/request'

const AboutPage = () => {
  const [appInformation, setAppInformation] = useState<AppInformation>()
  const [loading, setLoading] = useState<boolean>()

  const fetchAppInformation = useCallback(async () => {
    setLoading(true)
    const { ok, response } = await request<AppInformation>({
      url: apiUrls.appInfo,
      method: 'GET',
    })
    if (ok && response) {
      setAppInformation(response)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchAppInformation()
  }, [fetchAppInformation])

  return (
    <Card sx={aboutCard}>
      {!loading ? (
        <>
          <Box sx={aboutDetails}>
            <Typography variant="h6">
              <b>Deployment version</b>
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <Typography sx={{ fontSize: 14 }}>
                <b>Backend: </b>
                {appInformation?.version}
              </Typography>
              <Typography sx={{ fontSize: 14 }}>
                <b>Frontend: </b>
                {publicRuntimeConfig?.version}
              </Typography>
            </Box>
          </Box>
          <Box sx={aboutDetails}>
            <Typography variant="h4">Authors</Typography>
            {authors.map((author) => (
              <Typography key={author} variant="subtitle1">
                {author}
              </Typography>
            ))}
          </Box>
        </>
      ) : (
        <Box sx={mainLayout}>
          <CircularProgress size={64} />
        </Box>
      )}
    </Card>
  )
}

export default AboutPage
