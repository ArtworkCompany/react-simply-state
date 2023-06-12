import './App.css';

import { useSelector } from '../../../src';
import {
  RootState,
  useAppDispatch,
} from './store';

function App() {
  const count = useSelector((state: RootState) => state.count);
  const dispatch = useAppDispatch();

  const increment = () =>
    dispatch(state => {
      state.count += 1;
    });

  const decrement = () =>
    dispatch(state => {
      if (state.count > 0) {
        state.count -= 1;
      }
    });

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-100">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div>
          <div className="text-xl font-medium text-black mb-4">Counter</div>
          <p className="text-gray-500">
            Click '+' to increase and '-' to decrease the counter.
          </p>
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={decrement}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              -
            </button>
            <div id="counter" className="text-2xl">
              {count}
            </div>
            <button
              onClick={increment}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
