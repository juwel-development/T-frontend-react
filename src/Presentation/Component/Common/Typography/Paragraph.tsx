import React, { PropsWithChildren } from 'react';

export const Paragraph = ({ children }: PropsWithChildren) => {
    return <p className="py-1">{children}</p>;
};