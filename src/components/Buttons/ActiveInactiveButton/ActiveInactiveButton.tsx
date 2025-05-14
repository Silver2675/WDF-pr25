import { MenuItem, Select, InputLabel, FormControl } from '@mui/material'

interface Props {
  value: string
  onChange: (isActive: string) => void
}

const ProjectStatusDropdown = ({ value, onChange }: Props) => {
  return (
    <FormControl>
      <InputLabel id="" />
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        labelId=""
        inputProps={{
          MenuProps: { disableScrollLock: true },
        }}
      >
        <MenuItem value="active">Active</MenuItem>
        <MenuItem value="inactive">Inactive</MenuItem>
      </Select>
    </FormControl>
  )
}

export default ProjectStatusDropdown
