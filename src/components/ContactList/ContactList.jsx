import Contact from "../Contact/Contact";

import style from "./ContactList.module.css";

function ContactList({ profiles, onDelete }) {
  return (
    <ul>
      {profiles.map((profile) => (
        <li className={style.li} key={profile.id}>
          <Contact
            name={profile.name}
            number={profile.number}
            id={profile.id}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
