import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const good = useSelector((state) => state.good);
  const neutral = useSelector((state) => state.neutral);
  const bad = useSelector((state) => state.bad);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => dispatch({ type: "GOOD" })}>good</button>
      <button onClick={() => dispatch({ type: "NEUTRAL" })}>neutral</button>
      <button onClick={() => dispatch({ type: "BAD" })}>bad</button>
      <button onClick={() => dispatch({ type: "ZERO" })}>reset stats</button>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
    </div>
  );
};

export default App;
