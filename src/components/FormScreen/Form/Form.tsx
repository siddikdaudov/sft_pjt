import { MouseEvent, useEffect, useState } from 'react';
import styles from './form.module.css';
import { Input } from '../Input/Input';
import { useInput } from '../../../hooks/useInput';
import { phoneMask } from '../../../constants/masks';
import eyeSVG from '../../../assets/eye.svg';
import closeEyeSVG from '../../../assets/closeEye.svg';

export const Form = (): JSX.Element => {
  const name = useInput('', { isEmpty: true, minLength: 2 });
  const email = useInput('', { isEmpty: true, isEmail: true });
  const phone = useInput('', { isEmpty: true, isPhone: true });
  const password = useInput('', { isEmpty: true, minLength: 6 });
  const comparePassword = useInput('', { ref: password.value });
  const accept = useInput('unchecked', { isRequired: true });

  const [onClickSubmit, setClickSubmit] = useState(1);

  const onSubmit = (e: MouseEvent) => {
    e.preventDefault();
    setClickSubmit((current) => (current += 1));
    if (handleValidate()) {
      alert('Вы успешно зарегистрировались');
    }
  };

  const handleValidate = (): boolean => {
    name.onValidate();
    email.onValidate();
    phone.onValidate();
    password.onValidate();
    comparePassword.onValidate();
    accept.onValidate();

    const isValid =
      name.valid &&
      email.valid &&
      phone.valid &&
      password.valid &&
      comparePassword.valid &&
      accept.valid;

    return isValid ? true : false;
  };

  useEffect(() => {
    if (onClickSubmit > 1) {
      name.onValidate();
      email.onValidate();
      phone.onValidate();
      password.onValidate();
      comparePassword.onValidate();
      accept.onValidate();
    }
  }, [name.value, email.value, phone.value, password.value, comparePassword.value, accept.value]);

  return (
    <form className={styles.form}>
      <Input
        label='Имя'
        value={name.value}
        onChange={name.onChange}
        errors={name.errors}
        type='text'
        mask={false}
      />
      <Input
        label='Почта'
        value={email.value}
        onChange={email.onChange}
        errors={email.errors}
        type='email'
        mask={false}
      />
      <Input
        label='Телефон'
        value={phone.value}
        onChange={phone.onChange}
        errors={phone.errors}
        type='tel'
        mask={phoneMask}
      />
      <Input
        label='Пароль'
        value={password.value}
        onChange={password.onChange}
        errors={password.errors}
        type={password.type}
        mask={false}
        icon={password.type === 'text' ? eyeSVG : closeEyeSVG}
        onClick={password.handleShowPassword}
      />
      <Input
        label='Повторите пароль'
        value={comparePassword.value}
        onChange={comparePassword.onChange}
        errors={comparePassword.errors}
        type={comparePassword.type}
        mask={false}
        icon={comparePassword.type === 'text' ? eyeSVG : closeEyeSVG}
        onClick={comparePassword.handleShowPassword}
      />
      <Input
        label='Согласен с условиями'
        value={accept.value}
        onChange={accept.onChange}
        errors={accept.errors}
        type='checkbox'
        mask={false}
      />
      <button onClick={onSubmit}>Зарегистрироваться</button>
    </form>
  );
};
