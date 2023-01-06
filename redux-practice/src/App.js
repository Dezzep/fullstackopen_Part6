import { createNote, toggleImportanceOf } from './reducers/noteReducer';
import { useSelector, useDispatch } from 'react-redux';
import NewNote from './components/NewNote';
import Notes from './components/Note';
import VisibilityFilter from './components/VisibilityFilter';

const App = () => {
  let filter = 'ALL';
  const filterSelected = (value) => {};

  const dispatch = useDispatch();
  const notes = useSelector((state) => state);

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
    // <div>
    //   <div>{store.getState()}</div>
    //   <button onClick={(e) => store.dispatch({ type: 'INCREMENT' })}>
    //     plus
    //   </button>
    //   <button onClick={(e) => store.dispatch({ type: 'DECREMENT' })}>
    //     minus
    //   </button>
    //   <button onClick={(e) => store.dispatch({ type: 'ZERO' })}>zero</button>
    // </div>
  );
};
export default App;
