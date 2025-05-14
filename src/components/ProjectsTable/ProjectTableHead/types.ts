export interface ProjectTableHeadProps {
  isOverviews?: boolean
  isActive: boolean
  orderBy: string
  onSort: (orderBy: string) => void
}
