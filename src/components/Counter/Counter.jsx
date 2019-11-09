import React from 'react';
import styles from './Counter.module.scss';

const updateCounter = () => () => {
  console.log('click')
};

const Button = (props) => {
  const {amount} = props;
  return (
    <button
      className={styles.counter}
      type="button"
      onClick={updateCounter(amount)}
    >Add {amount}
    </button>
  )
};

export const Counter = () => {

  return (
    <div>
      <Button
        amount={10}
      />
    </div>
  );
};
