import { createSlice } from '@reduxjs/toolkit';

const getId = () => (100000 * Math.random()).toFixed(0);

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      // const anecdote = action.payload;

      // state.push({
      //   content: anecdote,
      //   id: getId(),
      //   votes: 0,
      // });
      state.push(action.payload);
    },
    voteFor(state, action) {
      const id = action.payload;
      const anecdoteToIncrement = state.find((n) => n.id === id);
      let votes = anecdoteToIncrement.votes;
      const changedAnecdote = {
        ...anecdoteToIncrement,
        votes: votes + 1,
      };
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : changedAnecdote
      );
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { setAnecdotes, createAnecdote, voteFor } = anecdoteSlice.actions;

export default anecdoteSlice.reducer;
