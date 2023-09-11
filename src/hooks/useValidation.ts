import { useState } from 'react';
import { PHONE_LENGTH } from '../constants';
import { TValue, TRules } from './useInput';

export const useValidation = (value: TValue, rules: TRules) => {
  const [empty, setEmpty] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [minLength, setMinLength] = useState('');
  const [comparePassword, setComparePassword] = useState('');
  const [accept, setAccept] = useState('');

  const [valid, setValid] = useState(false);

  const handleValidate = () => {
    for (const rule in rules) {
      switch (rule) {
        case 'isEmpty':
          value
            ? (setEmpty(''), setValid(true))
            : (setEmpty('Поле не может быть пустым'), setValid(false));
          break;
        case 'isEmail':
          const regex =
            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
          regex.test(String(value).toLocaleLowerCase())
            ? (setEmail(''), setValid(true))
            : (setEmail('Некорректная почта'), setValid(false));
          break;
        case 'isPhone':
          String(value).replace(/\D/g, '').length < PHONE_LENGTH
            ? (setPhone('Некорректный номер'), setValid(false))
            : (setPhone(''), setValid(true));
          break;
        case 'minLength':
          String(value).length <= rules[rule]!
            ? (setMinLength(`Количество символов должно превышать ${rules[rule]}`), setValid(false))
            : (setMinLength(''), setValid(true));
          break;
        case 'ref':
          String(value) === rules[rule]
            ? (setComparePassword(''), setValid(true))
            : (setComparePassword('Пароли не совпадают'), setValid(false));
          break;
        case 'isRequired':
          value === 'unchecked'
            ? (setAccept('Нужно согласиться с условиями'), setValid(false))
            : (setAccept(''), setValid(true));
          break;
      }
    }
  };

  return {
    empty,
    email,
    phone,
    minLength,
    comparePassword,
    accept,
    handleValidate,
    valid,
  };
};
