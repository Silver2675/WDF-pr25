import { TeamMember } from './types';

export const getOptions = (teamMembers: TeamMember[]) =>
  teamMembers.map((teamMember) => ({
    label: `${teamMember?.givenName} ${teamMember?.surname}`,
    value: teamMember.id,
  }));
