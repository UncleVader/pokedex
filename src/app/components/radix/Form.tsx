'use client'

import * as RadixForm from '@radix-ui/react-form';
import {FC, ReactNode} from "react";

interface IProps {
  children: ReactNode
}

const Form: FC<IProps> = ({children}) => {
  return (
    <RadixForm.Root className="FormRoot">
      {children}
    </RadixForm.Root>
  )
}

export default Form