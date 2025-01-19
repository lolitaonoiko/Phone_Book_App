import { useDispatch, useSelector } from 'react-redux';
import style from './SearchBox.module.css';
import { changeFilter, filtersValue } from '../../redux/filtersSlice';

function SearchBox() {
  const dispatch = useDispatch();

  const filterValue = useSelector(filtersValue);
  return (
    <div className={style.box}>
      <p className={style.text}>Find contacts by name</p>

      <input
        type="text"
        value={filterValue}
        onChange={e => dispatch(changeFilter(e.target.value))}
        placeholder="Name.."
      ></input>
    </div>
  );
}

export default SearchBox;
