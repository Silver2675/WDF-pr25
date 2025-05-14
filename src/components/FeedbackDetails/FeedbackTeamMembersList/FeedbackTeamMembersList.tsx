import React, { useEffect, useState } from 'react'
import {
  Box,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Typography,
} from '@mui/material'
import { useRouter } from 'next/navigation'
import { fetchFeedbackTeamMembers } from '../api'
import {
  employeeInfoStyle,
  rowStyle,
  FeedbackTeamMembersListLoadingAnimationBox,
  FeedbackTeamMembersListContent,
} from '@/styles/tableStyles'
import { routes } from '@/constants/routes'
import { grey } from '@mui/material/colors'
import { FeedbackTeamMember } from '../types'
import AddNewTeamMembers from '@/components/AddNewTeamMembers'

interface FeedbackTeamMembersListProps {
  feedbackId: number
  hideAddInterviewee?: boolean
}
const FeedbackTeamMembersList = ({
  feedbackId,
  hideAddInterviewee,
}: FeedbackTeamMembersListProps) => {
  const [teamMembers, setTeamMembers] = useState<FeedbackTeamMember[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  const loadTeamMembers = async () => {
    setIsLoading(true)
    const team = await fetchFeedbackTeamMembers(feedbackId)
    setTeamMembers(team)
    setIsLoading(false)
  }

  useEffect(() => {
    loadTeamMembers()
  }, [feedbackId])

  return isLoading ? (
    <Box sx={FeedbackTeamMembersListLoadingAnimationBox}>
      <CircularProgress size={64} />
    </Box>
  ) : (
    <>
      <TableContainer component={Paper} sx={FeedbackTeamMembersListContent}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 0.5,
            paddingBottom: 0.5,
            paddingRight: 0.5,
          }}
        >
          <Typography
            sx={{
              fontSize: 18,
              fontWeight: 1000,
              paddingLeft: 2.5,
              paddingTop: 0.5,
              paddingBottom: 0.5,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            Team Members
          </Typography>
          {!hideAddInterviewee && (
            <AddNewTeamMembers
              feedbackId={feedbackId}
              fetchData={loadTeamMembers}
            />
          )}
        </Box>
        <Table sx={{ borderTop: 0.5, borderColor: 'gray' }}>
          <TableBody>
            {teamMembers.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={2}
                  sx={{
                    paddingLeft: 3,
                    paddingTop: 1.5,
                    textAlign: 'left',
                    color: 'gray',
                    fontSize: { md: 11, lg: 12, xl: 14 },
                    borderBottom: 0,
                  }}
                >
                  No team members to display
                </TableCell>
              </TableRow>
            ) : (
              teamMembers.map((member, index) => (
                <TableRow
                  key={index}
                  hover
                  onClick={() =>
                    member.feedbackId !== feedbackId &&
                    member.feedbackId !== null
                      ? router.push(routes.feedback(`${member.feedbackId}`))
                      : null
                  }
                  sx={{
                    ...rowStyle,
                    backgroundColor:
                      member.feedbackId == feedbackId ||
                      member.feedbackId === null
                        ? grey[200]
                        : 'inherit',
                  }}
                >
                  <TableCell
                    sx={{
                      ...employeeInfoStyle,
                      paddingLeft: 3,
                      color:
                        member.feedbackId == feedbackId ||
                        member.feedbackId === null
                          ? grey[400]
                          : 'gray',
                    }}
                  >
                    {member.position ? member.position : '-'}
                  </TableCell>
                  <TableCell
                    sx={{
                      ...employeeInfoStyle,
                      color:
                        member.feedbackId == feedbackId ||
                        member.feedbackId === null
                          ? grey[400]
                          : 'inherit',
                    }}
                  >
                    {member.name}&nbsp;{member.surname}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default FeedbackTeamMembersList
