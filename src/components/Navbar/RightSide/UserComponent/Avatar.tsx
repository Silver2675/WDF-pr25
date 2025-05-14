import React from 'react'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Initials } from './Initials'
import { Avatar, IconButton, Menu, Typography, MenuItem } from '@mui/material'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'
import { yellow } from '@mui/material/colors'
import { actionMenuItem } from '@/styles/buttonsStyles'
import { routes } from '@/constants/routes'

export const UserAvatar = () => {
  const router = useRouter()
  const actionMenuButtons = [
    { title: 'About', action: () => router.push(routes.about) },
    { title: 'Sign Out', action: () => signOut() },
  ]
  return (
    <PopupState variant="popover">
      {(popupState) => (
        <>
          <IconButton {...bindTrigger(popupState)} disableRipple>
            <Avatar
              sx={[
                {
                  bgcolor: yellow[600],
                  height: { md: 50, sm: 40 },
                  width: { md: 50, sm: 40 },
                },
              ]}
            >
              <Initials />
            </Avatar>
          </IconButton>
          <Menu
            {...bindMenu(popupState)}
            onClick={popupState.close}
            elevation={1}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            disableScrollLock={true}
          >
            {actionMenuButtons.map((item) => (
              <MenuItem key={item.title} onClick={item.action}>
                <Typography sx={actionMenuItem}>{item.title}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
    </PopupState>
  )
}
