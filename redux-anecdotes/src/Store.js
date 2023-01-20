import { configureStore } from '@reduxjs/toolkit';
import notifcationReducer, {
  noteAddedNotification,
  votedNotification,
  removeNotification,
} from './reducers/notificationReducer';
import anecdoteReducer, {
  createAnecdote,
  voteFor,
} from './reducers/anecdoteReducer';
import filterReducer, { filterAnecdotes } from './reducers/filterReducer';

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    notification: notifcationReducer,
    filter: filterReducer,
  },
});

export default store;
