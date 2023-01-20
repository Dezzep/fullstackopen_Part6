import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { noteAddedNotification, removeNotification } from '../reducers/notificationReducer';

const NewAnecdote = (props) => {
  const dispatch = useDispatch();

  const addAnecdote = (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    e.target.anecdote.value = '';

    dispatch(createAnecdote(content));
    dispatch(noteAddedNotification(content));
    
    setTimeout(() => {
    dispatch(removeNotification());
    }, 5000);
  };
  return (
    <div>
      <h2>Create New</h2>
      <form onSubmit={addAnecdote}>
        <input name="anecdote" />
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default NewAnecdote;
