import { increment, decrement } from "./redux/actions";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
  return (
   <div className="main">
    <div className="child">
  <center>
  <h1>Counter App</h1>
   <h1>Count : {count}</h1>
   <button className="btn-1" onClick={()=>{dispatch(increment())}}><i class="bi bi-patch-plus"></i></button>
   <button className="btn-2" onClick={()=>{dispatch(decrement())}}><i class="bi bi-dash-circle"></i></button>
  </center>
  </div>
   </div>
  );
}

export default App;
