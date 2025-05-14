'use client'
import React from 'react'
import { ButtonGroup, Button, SxProps, Theme } from '@mui/material'
import {
  activeButton as defaultActiveButton,
  inactiveButton as defaultInactiveButton,
} from '@/styles/buttonsStyles'

type ButtonOption<ValueType> = {
  label: string
  value: ValueType
}

type GenericButtonGroupProps<ValueType extends string> = {
  currentValue: ValueType
  options: ButtonOption<ValueType>[]
  onValueChange: (value: ValueType) => void
  sx?: SxProps<Theme>
  activeButtonStyle?: SxProps<Theme>
  inactiveButtonStyle?: SxProps<Theme>
}

const GenericButtonGroup = <ValueType extends string>({
  currentValue,
  options,
  onValueChange,
  sx,
  activeButtonStyle,
  inactiveButtonStyle,
}: GenericButtonGroupProps<ValueType>) => {
  return (
    <ButtonGroup variant="contained" aria-label="table switcher" sx={sx}>
      {options.map((option) => (
        <Button
          key={option.value}
          sx={
            currentValue === option.value
              ? activeButtonStyle || defaultActiveButton
              : inactiveButtonStyle || defaultInactiveButton
          }
          onClick={() => onValueChange(option.value)}
        >
          {option.label}
        </Button>
      ))}
    </ButtonGroup>
  )
}

export default GenericButtonGroup
