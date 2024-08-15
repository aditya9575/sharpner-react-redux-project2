import classes from './Counter.module.css';
// useSelector hook allows to automatically select a part of our state managed by the store
import { useSelector,useDispatch } from 'react-redux';

import { counterActions } from '../store/counter';

const Counter = () => {

const dispatch = useDispatch();

  // we now pass in a function to our useSelector which will be executed by react-redux , which ultimately determines which 
  // piece of data we wan to extract from our store and useSelector is used to get data out of the store 
 const counter = useSelector((state) => state.counter.counter);
 const show =  useSelector(state => state.counter.showCounter);

 const incrementHandler = () => {
  // dispatch({ type: "increment"});

  // redux toolkit dispatch methods 
  dispatch(counterActions.increment());
};

const decrementHandler = () => {
  // dispatch({ type: "decrement"});

  dispatch(counterActions.decrement());
};

// here we are adding a payload while dispatching our actions so that we don't need to hardcode everything in our store 
const increaseHandler = () => {
  dispatch(counterActions.increase(5));
};

const decreaseHandler = () => {
  dispatch(counterActions.decrease(5));
};

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter()); 
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increment By 5</button>
        <button onClick={decreaseHandler}>Decrement By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
