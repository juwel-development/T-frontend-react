import React, { FunctionComponent, PropsWithChildren, ReactNode, useCallback, useEffect } from 'react';
import { Subject } from 'rxjs';
import { ChevronDownIcon } from './Icon/ChevronDownIcon';
import { ChevronRightIcon } from './Icon/ChevronRightIcon';

interface IProps extends PropsWithChildren {
    title: ReactNode;
}

interface IItemProps extends PropsWithChildren {
    onClick$?: Subject<void>;
}

interface IComponent extends FunctionComponent<IProps> {
    Item: FunctionComponent<IItemProps>;
}

export const Menu: IComponent = ({ title, children }: IProps) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleOpen = useCallback((event?: React.SyntheticEvent) => {
        event?.stopPropagation();

        setIsOpen((isOpen) => !isOpen);
    }, []);

    useEffect(() => {
        const eventListener = ()=> {
            isOpen && handleOpen()
        }
        window.addEventListener('click', eventListener);

        return () => {
            window.removeEventListener('click', eventListener);
        };
    },[isOpen]);

    return (
        <div className="inline relative">
            <button className="rounded shadow border-border-color border py-1 px-3 transition-colors" onClick={handleOpen}>
                {title}
                {isOpen ? <ChevronDownIcon/> : <ChevronRightIcon/>}
            </button>
            {isOpen &&
                <ul
                    className="absolute top-8 right-0 py-2 min-w-full bg-primary-contrast border border-border-color rounded shadow text-font-color"
                    onClick={handleOpen}
                >
                    {children}
                </ul>
            }
        </div>
    );
};

Menu.Item = ({ children, onClick$ }: IItemProps) => {
    const handleClick = useCallback(() => {
        onClick$ && onClick$.next();
    }, []);

    return <li className="p-2 whitespace-nowrap border cursor-pointer hover:bg-body-dark" onClick={handleClick}>{children}</li>;
};

