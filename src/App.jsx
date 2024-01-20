import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "resetCount":
      return { ...state, count: 0 };
    default:
      throw new Error("Unknown action");
  }
}

function App() {
  const initial = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, initial);
  const { count, step } = state;

  function incrementCount() {
    dispatch({ type: "inc" });
  }
  function decrementCount() {
    dispatch({ type: "dec" });
  }
  function defineCountValue(e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  }
  function defineStepValue(e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  }
  function resetCountValue() {
    dispatch({ type: "resetCount" });
  }

  return (
    <>
      <div className="flex flex-col w-screen h-screen bg-gray-950">
        <div className="flex w-full justify-center mt-10 mb-2">
          <input type="range" onChange={defineStepValue} max={10} min={1} />
          <span className="text-white ml-2">{Number(step)}</span>
        </div>
        <div className="flex w-full justify-center">
          <button
            className="bg-gray-800 px-2 text-white rounded-sm"
            onClick={decrementCount}
          >
            -
          </button>
          <input type="text" value={count} onChange={defineCountValue} />
          <button
            className="bg-gray-800 px-2 text-white rounded-sm"
            onClick={incrementCount}
          >
            +
          </button>
        </div>
        <div className="flex justify-center mt-2 rounded-sm">
          <button
            className="bg-gray-800 px-2 text-white rounded-sm"
            onClick={resetCountValue}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
