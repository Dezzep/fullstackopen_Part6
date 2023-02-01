import AnecdoteForm from './components/AnecdoteForm';
import Notification from './components/Notification';
import { getAnecdotes, addVote } from './requests';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useNotificationDispatch } from './reducers/notificationReducer';

const App = () => {
  const queryClient = useQueryClient();
  const dispatch = useNotificationDispatch();

  const updateAnecdoteMutation = useMutation(addVote, {
    onSuccess: () => {
      queryClient.invalidateQueries('anecdotes');
    },
  });

  const handleVote = (anecdote) => {
    updateAnecdoteMutation.mutate({ ...anecdote, votes: anecdote.votes + 1 });
  };

  const result = useQuery('anecdotes', getAnecdotes, {
    refetchOnWindowFocus: false,
  });
  if (result.isLoading) {
    return <div>Loading...</div>;
  }

  console.log(result);
  const anecdotes = result.data;

  if (result.isError) {
    return (
      <div>anecdote service not available due to problems with the server</div>
    );
  }
  const voted = (anecdote) => {
    dispatch({ type: 'VOTE', data: anecdote });
    handleVote(anecdote);
    setTimeout(() => {
      dispatch({ type: 'RESET' });
    }, 5000);
  };

  return (
    <div>
      <h3>Anecdote app</h3>

      <Notification />
      <AnecdoteForm />

      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button
                onClick={() => {
                  voted(anecdote);

                  // handleVote(anecdote);
                }}
              >
                vote
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default App;
