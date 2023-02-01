import { useNotificationDispatch } from '../reducers/notificationReducer';

const Button = ({ type, label, handleVote, anecdote }) => {
  const dispatch = useNotificationDispatch();

  return (
    <button
      onClick={() => {
        handleVote(anecdote);
        dispatch({ type, data: anecdote });
        setTimeout(() => {
          dispatch({ type: 'RESET' });
        }, 5000);
      }}
    >
      {label}
    </button>
  );
};

export default Button;
