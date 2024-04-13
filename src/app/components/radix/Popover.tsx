import React, {FC, ReactNode} from 'react';
import * as Popover from '@radix-ui/react-popover';
import {Cross2Icon} from '@radix-ui/react-icons';
import './Popover.css';

interface IProps {
  triggerChild: ReactNode;
  contentChild: ReactNode;
}

const PokemonPopover: FC<IProps> = ({triggerChild, contentChild}) => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <button className="" aria-label="Update dimensions">
        {triggerChild}
      </button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="PopoverContent" sideOffset={5}>
        <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
          <>
            Hello
            {contentChild}
          </>
        </div>
        <Popover.Close className="PopoverClose" aria-label="Close">
          <Cross2Icon/>
        </Popover.Close>
        <Popover.Arrow className="PopoverArrow"/>
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default PokemonPopover;