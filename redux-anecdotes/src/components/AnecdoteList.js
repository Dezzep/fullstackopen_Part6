import { useDispatch, useSelector } from 'react-redux';
import { voteFor } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';
import Filter from './Filter';

const AnecdotesList = () => {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();
  const vote = (id) => {
    const votedForAnecdote = state.anecdotes.find((a) => a.id === id);
    dispatch(voteFor(votedForAnecdote));
    dispatch(setNotification(`you voted: ${votedForAnecdote.content}`, 5));
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
