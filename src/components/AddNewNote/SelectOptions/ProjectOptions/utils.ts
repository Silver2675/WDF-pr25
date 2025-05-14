export interface ProjectOptionItem {
  title: string
  id: number
}

export const getProjectOptions = (items: ProjectOptionItem[]) =>
  items.map((item) => ({
    label: item.title,
    value: item.id,
  }))
