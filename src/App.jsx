import { useEffect, useState } from "react";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

import profilesInfo from "../src/data/profiles.json";

import "./App.css";

function App() {
  const [profiles, setProfiles] = useState(() => {
    const savedProfiles = localStorage.getItem("profiles");
    return savedProfiles ? JSON.parse(savedProfiles) : profilesInfo;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("profiles", JSON.stringify(profiles));
  }, [profiles]);

  const addProfile = (newProfile) => {
    setProfiles((prevProfiles) => {
      return [...prevProfiles, newProfile];
    });
  };

  const deleteProfile = (profileId) => {
    setProfiles((prevProfiles) => {
      return prevProfiles.filter((profile) => profile.id !== profileId);
    });
  };

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addProfile} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList profiles={filteredProfiles} onDelete={deleteProfile} />
    </div>
  );
}

export default App;
