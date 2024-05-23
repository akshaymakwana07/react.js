import { increment, decrement } from "./redux/actions";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
  return (
   <>
  <center>
  <h1>Counter App</h1>
   <h1>Count : {count}</h1>
   <button onClick={()=>{dispatch(increment())}}>+</button>
   <button onClick={()=>{dispatch(decrement())}}>-</button>
  </center>
   </>
  );
}

export default App;
