import { configureStore } from '@reduxjs/toolkit';
import anecdoteReducer, {
  createAnecdote,
  voteFor,
} from './reducers/anecdoteReducer';

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
  },
});

export default store;
