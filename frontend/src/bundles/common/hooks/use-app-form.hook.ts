import { joiResolver } from '@hookform/resolvers/joi';
import {
    type Control,
    type DefaultValues,
    type FieldErrors,
    type FieldValues,
    type UseFormClearErrors,
    type UseFormGetValues,
    type UseFormHandleSubmit,
    type UseFormReset,
    type UseFormSetError,
    type UseFormSetValue,
    type UseFormWatch,
    type ValidationMode,
} from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { type Schema as ValidationSchema } from 'joi';

type Parameters<T extends FieldValues = FieldValues> = {
    defaultValues: DefaultValues<T>;
    validationSchema?: ValidationSchema;
    mode?: keyof ValidationMode;
};

type ReturnValue<T extends FieldValues = FieldValues> = {
    control: Control<T, null>;
    errors: FieldErrors<T>;
    getValues: UseFormGetValues<T>;
    handleSubmit: UseFormHandleSubmit<T>;
    watch: UseFormWatch<T>;
    setValue: UseFormSetValue<T>;
    setError: UseFormSetError<T>;
    reset: UseFormReset<T>;
    clearErrors: UseFormClearErrors<T>;
};

const useAppForm = <T extends FieldValues = FieldValues>({
    validationSchema,
    defaultValues,
    mode,
}: Parameters<T>): ReturnValue<T> => {
    const {
        control,
        getValues,
        handleSubmit,
        watch,
        setValue,
        setError,
        reset,
        formState: { errors },
        clearErrors,
    } = useForm<T>({
        mode,
        defaultValues,
        resolver: validationSchema ? joiResolver(validationSchema) : undefined,
    });

    return {
        getValues,
        control,
        errors,
        handleSubmit,
        watch,
        setValue,
        setError,
        reset,
        clearErrors,
    };
};

export { useAppForm };
