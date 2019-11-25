import React from 'react';
import styles from "../Counter/Counter.module.scss";

const Button = ({amount, count, updateCounter}) => {
  const operation = amount > 0 ? 'Add' : 'Remove';

  return (
    <button
      className={styles.btn}
      onClick={updateCounter(amount, count)}
      type="button">{operation} {amount}
    </button>)
};

export default class CounterAsClass extends React.Component {
  state = {
    count: 0
  };

  updateCounter = (amount, count) => () => {
    const currentCount = amount + count;

    this.setState({
      count: currentCount
    });
  };

  render() {
    const {count} = this.state;

    return (
      <div>
        <p>React Counter using Class and State()</p>
        <div>Current Count: {count}</div>
        <Button amount={10} count={count} updateCounter={this.updateCounter}/>
        <Button amount={-10} count={count} updateCounter={this.updateCounter}/>
        <Button amount={5} count={count} updateCounter={this.updateCounter}/>
        <Button amount={-5} count={count} updateCounter={this.updateCounter}/>
      </div>
    )
  }
};
