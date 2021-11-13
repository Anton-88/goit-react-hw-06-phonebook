import { PropTypes } from "prop-types";
import { useMemo } from "react";
import styles from "./ContactList.module.css";
import { v4 as uuidv4 } from "uuid";
import { connect, useDispatch, useSelector } from "react-redux";
import { removeContact } from "../../redux/phonebook/actions";
import { getContacts, getFilterValue } from "../../redux/phonebook/selectors";

function ContactList() {
  const contacts = useSelector(getContacts);
  const filterVal = useSelector(getFilterValue);
  const dispatch = useDispatch();
  const onRemoveContact = (id) => dispatch(removeContact(id));

  // console.log(`contacts`, contacts)
  // console.log(`filter`, filterVal.toLowerCase())

  const filteredContacts = useMemo(() => {
    const tempContacts = filterVal.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(tempContacts)
    );
  }, [filterVal, contacts]);

  return (
    <ul className={styles.contact_list}>
      {filteredContacts &&
        filteredContacts.map(({ name, number, id }) => (
          <li className={styles.contact_list_item} key={uuidv4()}>
            <p>
              {name}: {number}
            </p>
            <button
              className={styles.contact_list_button}
              type="button"
              onClick={() => onRemoveContact(id)}
            >
              Delete number
            </button>
          </li>
        ))}
    </ul>
  );
}

export default ContactList;

//using vanilla redux
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onRemoveContact: (contact) => dispatch(removeContact(contact)),
//   };
// };

// export default connect(null, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  state: PropTypes.arrayOf(PropTypes.any).isRequired,
  onListChange: PropTypes.func.isRequired,
};
