import style from "./Contact.module.css";

function Contact({ name, number, id, onDelete }) {
  return (
    <>
      <ul>
        <li className={style.item}>
          <img
            className={style.img}
            src="https://www.svgrepo.com/show/115674/profile.svg"
          ></img>
          <p>{name}</p>
        </li>
        <li className={style.item}>
          <img
            className={style.img}
            src="https://www.svgrepo.com/show/152977/telephone.svg"
          ></img>
          <p>{number}</p>
        </li>
      </ul>
      <button
        className={style.button}
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </>
  );
}

export default Contact;
