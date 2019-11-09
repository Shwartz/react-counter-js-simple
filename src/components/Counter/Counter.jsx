import React from 'react';

const updateCounter = () => () => {
  console.log('click')
};

const Button = (props) => {
  const {amount} = props;
  return (
    <button
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
