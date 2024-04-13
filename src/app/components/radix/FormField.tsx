'use client'
import * as RadixForm from '@radix-ui/react-form';
import {FC, ReactNode} from "react";

interface IProps {
  children: ReactNode
  name: string
}

const FormField: FC<IProps> = ({name, children}) => {
  return (
    <RadixForm.Field name={name} className={"flex items-center gap-3"}>
      <>
        {children}
      </>
    </RadixForm.Field>
  )
}

export default FormField