import { Button as MUIButton } from '@mui/material';

import { type ColorProperty } from '~/bundles/common/enums/color-property.enum';
import { type ValueOf } from '~/bundles/common/types/value-of.type';

type Properties = {
    children?: React.ReactNode;
    id?: string;
    component?: string;
    label?: string;
    variant?: 'text' | 'outlined' | 'contained';
    type?: 'submit' | 'button';
    isDisabled?: boolean;
    className?: string;
    endIcon?: React.ReactNode;
    startIcon?: React.ReactNode;
    color?: ValueOf<typeof ColorProperty>;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disableRipple?: boolean;
};

const Button: React.FC<Properties> = ({
    id,
    variant = 'contained',
    label,
    type = 'button',
    isDisabled = false,
    className = '',
    endIcon = null,
    startIcon = null,
    color,
    onClick,
    children,
    disableRipple,
}) => (
    <MUIButton
        disableRipple={disableRipple}
        id={id}
        type={type}
        variant={variant}
        disabled={isDisabled}
        className={className}
        endIcon={endIcon}
        startIcon={startIcon}
        color={color}
        onClick={onClick}
    >
        {label}
        {children}
    </MUIButton>
);

export { type Properties as ButtonProperties };
export { Button };
