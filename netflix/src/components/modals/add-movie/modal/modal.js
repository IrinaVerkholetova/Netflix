import React from 'react';
import { createPortal } from 'react-dom';

import styles from './modal.module.css';

export const CustomModal = ({ title, visible, onCancel, onReset, onSubmit, children }) => {
  if (!visible) return null;

  const modal = (
    <div id={styles.modal}>
      <div className={styles.content}>
        <button key="close" className={styles.close} onClick={onCancel}>
          X
        </button>
        <h1 className={styles.title_modal}>{title}</h1>
        <form>
          {children}
          <section className={styles.buttons}>
            <button key="back" type="reset" onClick={onReset} className={styles.resetButton}>
              RESET
            </button>
            <button key="submit" type="submit" onClick={onSubmit} className={styles.submitButton}>
              SUBMIT
            </button>
          </section>
        </form>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
};
