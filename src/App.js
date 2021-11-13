import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

export default function App() {
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
}
