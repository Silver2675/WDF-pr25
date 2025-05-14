import { Frequency } from './types'

export const getOptions = (frequencies: Frequency[]) =>
  frequencies.map((frequency) => ({
    label: frequency.value,
    value: frequency.value,
  }))
