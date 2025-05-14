import React from 'react'
import { Team } from '../../types'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import PersonIcon from '@mui/icons-material/Person'
import { InputLabel, Box, Typography } from '@mui/material'
import { detailsInputLabel } from '@/styles/styles'

interface Props {
  team: Team
  label: string
}

const DetailsTeam = ({ team, label }: Props) => {
  const displayTeamLeaders =
    team.teamLeaders && team.teamLeaders.length > 0
      ? team.teamLeaders.map((leader) => (
          <ListItem
            key={leader.id}
            sx={{ flexBasis: '30%', textAlign: 'left' }}
          >
            <ListItemIcon>
              <PersonIcon color="primary" />
            </ListItemIcon>
            <ListItemText
              primary={`${leader.givenName} ${leader.surname}`}
              secondary="Team Leader"
            />
          </ListItem>
        ))
      : null

  const displayTeamMembers =
    team.teamMembers && team.teamMembers.length > 0
      ? team.teamMembers.map((member) => (
          <ListItem
            key={member.id}
            sx={{ flexBasis: '30%', textAlign: 'left' }}
          >
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={`${member.givenName} ${member.surname}`} />
          </ListItem>
        ))
      : null

  const displayNA = !displayTeamLeaders && !displayTeamMembers

  return (
    <Box>
      <InputLabel
        sx={{
          ...detailsInputLabel,
          fontSize: { md: 17, sm: 13, xs: 12 },
          pt: 0,
        }}
      >
        {label}
      </InputLabel>

      {displayNA ? (
        <Typography
          sx={{
            whiteSpace: 'pre-line',
            wordBreak: 'break-word',
            maxWidth: '100%',
            textDecoration: 'underline',
            textDecorationColor: '#d8d8d9;',
            textDecorationThickness: '0.75px',
            textUnderlineOffset: '4px',
          }}
        >
          NA
        </Typography>
      ) : (
        <>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {displayTeamLeaders}
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2 }}>
            {displayTeamMembers}
          </Box>
        </>
      )}
    </Box>
  )
}

export default DetailsTeam
