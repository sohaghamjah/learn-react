import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

export default function State_Functional_Component() {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    setCount(count - 1);
  }

  return (
    <div>
        <h1>{count}</h1>
        <Button onClick={handleIncrement} className="me-2" variant="primary"> + </Button>
        <Button onClick={handleDecrement} variant="danger"  disabled={count === 0 ? true : false}> - </Button>
    </div>
  )
}
