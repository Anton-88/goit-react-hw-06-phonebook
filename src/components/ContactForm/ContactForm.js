import styles from "./ContactForm.module.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/phonebook/actions";
import { getContacts } from "../../redux/phonebook/selectors";

function ContactForm() {
  const contactNameID = uuidv4();
  const contactNumberID = uuidv4();

  const contacts = useSelector(getContacts);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();
  const onAddContact = (contact) => dispatch(addContact(contact));

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    if (contacts.map((contact) => contact.name).includes(contact.name)) {
      alert(`${contact.name} is in your contacts list already`);
    } else {
      onAddContact(contact);
    }
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setNumber("");
  };

  return (
    <>
      <h1>PhoneBook</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.contact_form_container}>
          <div className={styles.contact_form_item}>
            <label
              className={styles.contact_form_label}
              htmlFor={contactNameID}
            >
              Contact name:
            </label>
            <input
              id={contactNameID}
              type="text"
              name="name"
              placeholder="Enter contact name ..."
              onChange={handleChange}
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </div>
          <div className={styles.contact_form_item}>
            <label
              className={styles.contact_form_label}
              htmlFor={contactNumberID}
            >
              Contact number:
            </label>
            <input
              id={contactNumberID}
              type="tel"
              name="number"
              placeholder="Enter contact number ..."
              onChange={handleChange}
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </div>
          <button
            type="submit"
            className={styles.contact_add_btn}
            disabled={!name || number.length < 5}
          >
            Add contact
          </button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;

//using vanilla redux
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onAddContact: (contact) => dispatch(addContact(contact)),
//   };
// };

// export default connect(null, mapDispatchToProps)(ContactForm);
