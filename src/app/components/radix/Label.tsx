'use client'

import * as RadixLabel from '@radix-ui/react-label';
import {FC} from "react";

interface IProps {
  htmlFor: string;
  children: React.ReactNode
}

const Label:FC<IProps> = ({htmlFor, children}) => {
  return(
    <RadixLabel.Root className="text-4 font-semibold leading-[35px]" htmlFor={htmlFor}>
      {children}
    </RadixLabel.Root>
  )
}

export default Label