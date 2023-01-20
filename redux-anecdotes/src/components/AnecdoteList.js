import { useDispatch, useSelector } from 'react-redux';
import { voteFor } from '../reducers/anecdoteReducer';
import {
  votedNotification,
  removeNotification,
} from '../reducers/notificationReducer';
import Filter from './Filter';

const AnecdotesList = () => {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();
  const vote = (id) => {
    dispatch(voteFor(id));
    dispatch(votedNotification(state.anecdotes.find((a) => a.id === id)));
    setTimeout(() => {
      dispatch(removeNotification());
    }, 5000);
  };
  // what is the type of state.filter.value

  const sortedAnecdotes = [...state.anecdotes];
  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      
      {sortedAnecdotes
        .filter((anecdote) => anecdote.content.includes(state.filter.filter))
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        ))}
    </div>
  );
};
export default AnecdotesList;
