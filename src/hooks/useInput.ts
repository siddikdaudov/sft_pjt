import { useState, ChangeEvent } from 'react';
import { useValidation } from './useValidation';

export type TValue = string | number;
export type TRules = {
  isEmpty?: boolean;
  isEmail?: boolean;
  isPhone?: boolean;
  minLength?: number;
  ref?: TValue;
  isRequired?: boolean;
};

export const useInput = (initValue: TValue, rules: TRules) => {
  const [value, setValue] = useState(initValue);
  const [type, setType] = useState('password');
  const valid = useValidation(value, rules);
  const isCheckbox = initValue === 'checked' || initValue === 'unchecked';

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (isCheckbox) {
      e.target.checked ? setValue('checked') : setValue('unchecked');
      return;
    }
    setValue(e.target.value);
  };

  const handleShowPassword = () => {
    setType((current) => (current === 'text' ? 'password' : 'text'));
  };

  return {
    value,
    onChange,
    errors: [
      valid.empty,
      valid.email,
      valid.phone,
      valid.minLength,
      valid.comparePassword,
      valid.accept,
    ],
    onValidate: valid.handleValidate,
    type,
    handleShowPassword,
    valid: valid.valid,
    setValue,
  };
};
