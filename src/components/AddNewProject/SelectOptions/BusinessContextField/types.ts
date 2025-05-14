import { Control, FieldErrors, FieldValues, Path } from "react-hook-form"


export interface BusinessContextFieldProps<T extends FieldValues> {
    control: Control<T>
    errors: FieldErrors<T>
    name: Path<T>
}