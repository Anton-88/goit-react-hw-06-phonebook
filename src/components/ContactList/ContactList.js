import { PropTypes } from "prop-types";
import styles from "./ContactList.module.css";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { removeContact } from "../../redux/phonebook/actions";

function ContactList({ filteredContacts, onListChange, onRemoveContact }) {
  function removeBoth(id) {
    onListChange(id);
    onRemoveContact(id);
  }
  return (
    <ul className={styles.contact_list}>
      {filteredContacts.map(({ name, number, id }) => (
        <li className={styles.contact_list_item} key={uuidv4()}>
          <p>
            {name}: {number}
          </p>
          <button
            className={styles.contact_list_button}
            type="button"
            onClick={() => removeBoth(id)}
          >
            Delete number
          </button>
        </li>
      ))}
    </ul>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveContact: (contact) => dispatch(removeContact(contact)),
  };
};

export default connect(null, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  state: PropTypes.arrayOf(PropTypes.any).isRequired,
  onListChange: PropTypes.func.isRequired,
};
