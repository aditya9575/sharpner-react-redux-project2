import classes from './Counter.module.css';
// useSelector hook allows to automatically select a part of our state managed by the store
import { useSelector,useDispatch } from 'react-redux';

const Counter = () => {

const dispatch = useDispatch();

  // we now pass in a function to our useSelector which will be executed by react-redux , which ultimately determines which 
  // piece of data we wan to extract from our store and useSelector is used to get data out of the store 
 const counter = useSelector((state) => state.counter);

 const incrementHandler = () => {
  dispatch({ type: "increment"});
};

const decrementHandler = () => {
  dispatch({ type: "decrement"});
};

const incrementHandlerByFive = () => {
  dispatch({ type: "IncrementBy5"});
};

const decrementHandlerByFive = () => {
  dispatch({ type: "DecremenentBy5"});
};

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandlerByFive}>Increment By 5</button>
        <button onClick={decrementHandlerByFive}>Decrement By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
