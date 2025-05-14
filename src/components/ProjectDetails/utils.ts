export const readOnlyStatus = (readOnlyElement: string | null) => {
  switch (readOnlyElement) {
    case 'EDITING_INFORMATION':
      return true
    case 'ADD_REPORT':
      return false
    case 'EDITING_REPORT':
      return false
    default:
      return true
  }
}
