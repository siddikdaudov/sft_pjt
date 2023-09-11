import { FC, PropsWithChildren } from 'react';
import styles from './modal.module.css';

type TProps = PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
}>;

export const Modal: FC<TProps> = ({ isOpen, onClose, children }): JSX.Element | null => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <button className={styles.close} onClick={onClose}>
        x
      </button>
      {children}
    </div>
  );
};
