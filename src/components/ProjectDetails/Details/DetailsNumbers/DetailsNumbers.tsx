import { FieldValues } from 'react-hook-form'
import ControlledNumberInput from '@/components/ControlledInput/NumberInput'
import { DetailsNumbersProps } from './types'
import { readOnlyStatus } from '../../utils'

const DetailsNumbers = <T extends FieldValues>({
  projectReport,
  index,
  reportId,
  control,
  errors,
  readOnlyElement,
  titleName,
  titleId,
}: DetailsNumbersProps<T>) => {
  return (
    <ControlledNumberInput
      key={`fragment-fields-${titleName}-${reportId}-${index}`}
      control={control}
      name={titleId}
      id={reportId}
      label={titleName}
      errors={errors}
      value={!projectReport ? '' : projectReport[titleId]}
      readOnly={readOnlyStatus(readOnlyElement)}
    />
  )
}

export default DetailsNumbers
