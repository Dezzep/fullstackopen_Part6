// create a reducer that basically sees
//(oh someone voted, perfect the notification should include this info)
// or oh an anecdote was added? it should enact with this notification.

import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: { value: '' },
  reducers: {
    noteAddedNotification(state, action) {
      const notification = action.payload;
      state.value = 'Just added: ' + notification + ' to the list';
    },
    votedNotification(state, action) {
      const vote = action.payload;
      console.log(vote);
      state.value = 'You voted for: ' + vote.content;
    },
    removeNotification(state) {
      state.value = '';
    },
  },
});

export const { noteAddedNotification, votedNotification, removeNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;
