import { ChevronRightIcon as Icon } from '@heroicons/react/24/solid';
import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const icon = cva('inline w-6 h-6 mx-2 -mt-1', { variants: {} });

type IProps = VariantProps<typeof icon>

export const ChevronRightIcon = ({}: IProps) => {
    return <Icon className={icon()}/>;
};