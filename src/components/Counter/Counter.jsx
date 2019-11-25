import React, {useState} from 'react';
import styles from './Counter.module.scss';

export const sum = (amount, currentCount) => amount + currentCount;
export const updateCounter = (amount, currentCount, updateCount) => () => updateCount(sum(currentCount, amount));

const Button = ({amount, currentCount, updateCount}) => {
  const operation = amount > 0 ? 'Add' : 'Remove';

  return (
    <button
      className={styles.btn}
      onClick={updateCounter(amount, currentCount, updateCount)}
      type="button">{operation} {amount}
    </button>
  )
};

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>React Counter using function and Hooks</p>
      <div>Current Count: {count}</div>
      <Button amount={10} currentCount={count} updateCount={setCount}/>
      <Button amount={-10} currentCount={count} updateCount={setCount}/>
      <Button amount={5} currentCount={count} updateCount={setCount}/>
      <Button amount={-5} currentCount={count} updateCount={setCount}/>
    </div>
  );
};
