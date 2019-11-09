import React, {useState} from 'react';
import styles from './Counter.module.scss';

const updateCounter = (amount, currentCount, updateCount) => () => updateCount(currentCount + amount);

const Button = (props) => {
  const {amount, currentCount, updateCount} = props;
  const operation = amount > 0 ? 'Add' : 'Remove';

  return (
    <button
      className={styles.counter}
      type="button"
      onClick={updateCounter(amount, currentCount, updateCount)}
    >{operation} {amount}
    </button>
  )
};

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Example of Counter done by Hooks</h3>
      <div>Current Count: {count}</div>
      <Button amount={10} currentCount={count} updateCount={setCount}/>
      <Button amount={-10} currentCount={count} updateCount={setCount}/>
      <Button amount={5} currentCount={count} updateCount={setCount}/>
      <Button amount={-5} currentCount={count} updateCount={setCount}/>
    </div>
  );
};
