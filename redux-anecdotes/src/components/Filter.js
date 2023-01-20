import { useDispatch, useSelector } from 'react-redux';
import { filterAnecdotes } from '../reducers/filterReducer';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const handleChange = (e) => {
    dispatch(filterAnecdotes(e.target.value));
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input value={filter.filter} onChange={handleChange} />
    </div>
  );
};

export default Filter;
