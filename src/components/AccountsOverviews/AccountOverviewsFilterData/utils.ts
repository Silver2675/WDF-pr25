export interface OptionItem {
    name: string
    id: number
  }
  
  export const getOptions = (items: OptionItem[]) =>
    items.map((item) => ({
      label: item?.name,
      value: item?.name,
    }))