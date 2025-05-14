export const frequencies = [1, 2, 3, 4, 8, 12].map((value) => ({
  value: value * 7,
  label: value === 1 ? `${value} week` : `${value} weeks`,
}))
