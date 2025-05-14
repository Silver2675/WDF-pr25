import { TeamLeader } from './types'

export const getOptions = (teamLeaders: TeamLeader[]) =>
  teamLeaders.map((teamLeader) => ({
    label: `${teamLeader?.givenName} ${teamLeader?.surname}`,
    value: teamLeader.id,
  }))
