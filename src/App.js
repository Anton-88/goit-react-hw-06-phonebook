import "./App.css";
import { useEffect, useMemo, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import { Filter } from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import { LSManager } from "./hooks/localStorageManagement";
import styles from "./App.css";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("contacts")) ?? [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ]
    );
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    if (contacts.map((contact) => contact.name).includes(newContact.name)) {
      alert(`${newContact.name} is in your contacts list already`);
    } else {
      setContacts((prev) => [...prev, newContact]);
    }
  };

  const filterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredItems = useMemo(() => {
    const tempContacts = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(tempContacts)
    );
  }, [filter, contacts]);

  const deleteItem = (itemId) => {
    setContacts((prev) => prev.filter((item) => item.id !== itemId));
  };

  return (
    <>
      <h1>PhoneBook</h1>
      <ContactForm addContact={addContact} contacts={contacts} />
      <h2>Contacts</h2>
      <div>
        <Filter value={filter} onFilterChange={filterChange} />
        <ContactList
          filteredContacts={filteredItems}
          onListChange={deleteItem}
        />
      </div>
    </>
  );
}
