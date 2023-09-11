import { FC, InputHTMLAttributes } from 'react';
import MaskedInput, { Mask } from 'react-text-mask';
import styles from './input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errors: string[];
  mask: Mask;
  icon?: string;
  onClick?: () => void;
}

export const Input: FC<InputProps> = ({
  label,
  value,
  onChange,
  errors,
  type,
  mask,
  icon,
  onClick,
}): JSX.Element => {
  return (
    <label className={styles.wrapper}>
      {label && <p>{label}</p>}
      {errors.map((error, index) =>
        error.length > 1 ? (
          <p key={index} className={styles.error}>
            {error}
          </p>
        ) : null
      )}
      <MaskedInput
        value={value}
        onChange={onChange}
        type={type}
        placeholder='Введите...'
        mask={mask}
      />
      {icon && <img src={icon} alt='Eye Icon' onClick={onClick} />}
    </label>
  );
};
