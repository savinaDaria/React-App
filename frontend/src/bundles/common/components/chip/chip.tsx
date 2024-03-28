import { Close } from '@mui/icons-material';
import { Chip as MUIChip, ChipProps } from '@mui/material';

import { getValidClassNames } from '~/bundles/common/helpers/helpers.js';

import styles from './styles.module.scss';

type Properties = ChipProps & {
    label: string;
    onDelete?: () => void;
    className?: string;
};

const Chip: React.FC<Properties> = ({ label, onDelete, className = '', ...props }) => {
    const chipClassName = getValidClassNames(styles.chip, {
        [styles.deleteChip]: onDelete,
    });

    return (
        <MUIChip
            {...props}
            className={getValidClassNames(chipClassName, className)}
            label={label}
            onDelete={onDelete}
            deleteIcon={onDelete && <Close className={styles.icon} />}
        />
    );
};

export { Chip };
