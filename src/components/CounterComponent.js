// src/components/CounterComponent.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/counterSlice';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CounterComponent = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md="auto">
          <h1>Redux Toolkit Counter</h1>
          <p>Count: {count}</p>
          <Button variant="success" onClick={() => dispatch(increment())}>
            Increment
          </Button>
          <Button variant="danger" onClick={() => dispatch(decrement())}>
            Decrement
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CounterComponent;
