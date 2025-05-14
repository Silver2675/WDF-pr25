import { Reporter } from './types'

export const getOptions = (reporters: Reporter[]) =>
  reporters.map((reporter) => ({
    label: `${reporter?.givenName} ${reporter?.surname}`,
    value: reporter.id,
  }))
