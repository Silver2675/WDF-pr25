import { User } from '@/server/backend/types/user'
import { routes } from './routes'

interface NavLink {
  id: number
  title: string
  url: string
  requiredGroups: User['groups']
  displayForGroups?: User['groups']
}

const shouldDisplayLink = (
  link: NavLink,
  roles: User['groups'] | null
): boolean => {
  if (roles === null) return false
  if (!link.displayForGroups) return false
  return link.displayForGroups.some((role) => roles.includes(role))
}

const baseLinks: NavLink[] = [
  {
    id: 1,
    title: 'Accounts',
    url: routes.accounts,
    requiredGroups: ['Manager'],
    displayForGroups: ['Manager'],
  },
  {
    id: 2,
    title: 'Projects',
    url: routes.projects,
    requiredGroups: ['Manager', 'Reporters'],
    displayForGroups: ['Manager', 'Reporters'],
  },
  {
    id: 3,
    title: 'Employees',
    url: routes.employees,
    requiredGroups: ['FeedbackViewer', 'Manager', 'Reporters'],
    displayForGroups: ['FeedbackViewer', 'Manager', 'Reporters'],
  },
  {
    id: 4,
    title: 'Employee Feedback',
    url: routes.feedbacks,
    requiredGroups: ['FeedbackViewer', 'Manager', 'Reporters'],
    displayForGroups: ['FeedbackViewer', 'Manager', 'Reporters'],
  },
]

export const getLinksForUser = (roles: User['groups'] | null): NavLink[] => {
  if (roles === null) return []

  return baseLinks.reduce((links, link) => {
    if (shouldDisplayLink(link, roles)) {
      const updatedLink =
        link.url === routes.projects &&
        roles.includes('Reporters') &&
        !roles.includes('Manager')
          ? { ...link, title: 'My Projects' }
          : link

      links.push(updatedLink)
    }
    return links
  }, [] as NavLink[])
}
