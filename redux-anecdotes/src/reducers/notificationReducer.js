// create a reducer that basically sees
//(oh someone voted, perfect the notification should include this info)
// or oh an anecdote was added? it should enact with this notification.

import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: { value: '' },
  reducers: {
    displayNotification(state, action) {
      const message = action.payload;
      state.value = message;
    },

    removeNotification(state) {
      state.value = '';
    },
  },
});

export const { displayNotification, votedNotification, removeNotification } =
  notificationSlice.actions;

export const setNotification = (message, timer) => {
  return (dispatch) => {
    const msTime = timer * 1000;
    setTimeout(() => {
      console.log('aaaaaa');
      dispatch(removeNotification());
    }, msTime);

    dispatch(displayNotification(message));
  };
};
export default notificationSlice.reducer;
