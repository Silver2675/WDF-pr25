import React, { useContext } from 'react'
import Image from 'next/image'
import { Typography, Box, Card, IconButton } from '@mui/material'
import { iconStyle, logoCard, pageTitle, watchDogBox } from '@/styles/navStyles'
import { useRouter } from 'next/navigation'
import { routes } from '@/constants/routes'
import { useCheckUnauthorized } from '@/utils/useCheckUnauthorized'
import { UserContext } from '@/context/UserContext'

export const Watchdog = () => {
  const router = useRouter()
  const userData = useCheckUnauthorized()
  const { groups } = useContext(UserContext)

  const handleLogoClick = () => {
    if (
      (userData.authorized && groups?.includes('Manager')) ||
      groups?.includes('Reporters')
    ) {
      router.push(routes.projects)
    } else if (userData.authorized && groups?.includes('FeedbackViewer')) {
      router.push(routes.feedbacks)
    } else {
      router.push(routes.unauthorized)
    }
  }

  return (
    <Box sx={watchDogBox}>
      <Card elevation={0} sx={iconStyle}>
        <IconButton onClick={handleLogoClick} disableRipple>
          <Image
            src="/dogLogo.png"
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
            height={80}
            width={80}
            alt="Watchdog"
          />
        </IconButton>
      </Card>
      <Card elevation={0} sx={logoCard}>
        <Card
          elevation={0}
          sx={{ ...iconStyle, pt: 2.5 }}
          onClick={handleLogoClick}
        >
          <Image
            src="/jitTeam.png"
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
            height={45}
            width={92}
            alt="Jit Team logo"
          />
        </Card>
        <Typography sx={pageTitle} onClick={handleLogoClick}>
          Watchdog
        </Typography>
      </Card>
    </Box>
  )
}
