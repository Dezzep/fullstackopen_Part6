import { createSlice } from '@reduxjs/toolkit';
import anecdoteService from '../services/anecdotes';

const getId = () => (100000 * Math.random()).toFixed(0);

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    voteUpdate(state, action) {
      const anecdoteToIncrement = action.payload;

      return state.map((anecdote) =>
        anecdote.id !== anecdoteToIncrement.id ? anecdote : anecdoteToIncrement
      );
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { setAnecdotes, appendAnecdote, voteUpdate } =
  anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};
export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch(appendAnecdote(newAnecdote));
  };
};

export const voteFor = (anecdoteToIncrement) => {
  return async (dispatch) => {
    let votes = anecdoteToIncrement.votes;
    const votedForAnecdote = { ...anecdoteToIncrement, votes: votes + 1 };
    const update = await anecdoteService.voteFor(votedForAnecdote);
    dispatch(voteUpdate(update));
  };
};

export default anecdoteSlice.reducer;
