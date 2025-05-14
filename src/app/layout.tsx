'use client'
import AuthProvider from '@/providers/AuthProvider'
import QueryProvider from '@/providers/QueryProvider'
import '@/styles/globals.scss'
import ThemeCustomization from '@/themes'
import { Grid } from '@mui/material'
import MainLayout from '@/components/MainLayout/MainLayout'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { UserProvider } from '@/context/UserContext'
import localFont from 'next/font/local'

const moderatJit = localFont({
  src: [
    {
      path: '../../public/fonts/ModeratJIT-Thin.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ModeratJIT-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ModeratJIT-Regular.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/ModeratJIT-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Watchdog</title>
      </head>
      <body className={moderatJit.className}>
        <QueryProvider>
          <AuthProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <UserProvider>
                <ThemeCustomization>
                  <Grid>
                    <ToastContainer position="bottom-right" />
                    <MainLayout>{children}</MainLayout>
                  </Grid>
                </ThemeCustomization>
              </UserProvider>
            </LocalizationProvider>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
