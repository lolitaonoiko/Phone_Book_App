import style from "./SearchBox.module.css";

function SearchBox({ value, onFilter }) {
  return (
    <div className={style.box}>
      <p className={style.text}>Find contacts by name</p>

      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        placeholder="Name.."
      ></input>
    </div>
  );
}

export default SearchBox;
