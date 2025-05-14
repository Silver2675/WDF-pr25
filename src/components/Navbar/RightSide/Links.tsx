import { useEffect, useState, useContext } from 'react'
import Link from 'next/link'
import { Box, Tabs, Tab } from '@mui/material'
import { getLinksForUser } from '@/constants/links'
import { UserContext } from '@/context/UserContext'
import { usePathname } from 'next/navigation'
import { tabStyle, tabsBox } from '@/styles/navStyles'

function a11yProps(index: number) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  }
}

export const Links = () => {
  const { groups } = useContext(UserContext)
  const currentRoute = usePathname()

  const userLinks = getLinksForUser(groups || [])

  const [selectedTabId, setSelectedTabId] = useState(
    userLinks.find((link) => link.url === currentRoute)?.id
  )

  useEffect(() => {
    setSelectedTabId(userLinks.find((link) => link.url === currentRoute)?.id)
  }, [currentRoute, userLinks])

  return (
    <Box sx={tabsBox}>
      <Tabs
        value={selectedTabId}
        onChange={() => null}
        TabIndicatorProps={{ sx: { height: 6 } }}
        sx={{ height: { md: '80px', sm: '100px' } }}
      >
        {userLinks.map(({ id, title, url }, index) => (
          <Tab
            key={id}
            value={id}
            label={title}
            component={Link}
            href={url}
            disableRipple
            disableFocusRipple
            {...a11yProps(index)}
            sx={tabStyle}
          />
        ))}
      </Tabs>
    </Box>
  )
}
