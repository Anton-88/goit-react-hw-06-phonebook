import React from "react";
import { PropTypes } from "prop-types";
import styles from "./Filter.module.css";
import { connect, useSelector, useDispatch } from "react-redux";
import { filterValue } from "../../redux/phonebook/actions";
import { getContacts, getFilterValue } from "../../redux/phonebook/selectors";

function Filter(/*{ onFilterChange }*/) {
  const filter = useSelector(getFilterValue);
  const totalContacts = useSelector(getContacts);
  // console.log(`actions`, actions)
  const dispatch = useDispatch();
  const onFilterChange = (e) => dispatch(filterValue(e.target.value));

  return (
    <>
      <h2 className={styles.header}>Contacts</h2>
      {totalContacts.length > 0 ? (
        <h4 className={styles.contacts_amount}>
          (there are {totalContacts.length} contacts in your phonebook)
        </h4>
      ) : (
        <h4 className={styles.contacts_amount_zero}>
          (there are no contacts in your phonebook, please add some)
        </h4>
      )}
      <div className={styles.filter_container}>
        <h2>Find contact by name</h2>
        <input type="text" value={filter} onChange={onFilterChange} />
      </div>
    </>
  );
}

export default Filter;

//using vanilla redux
// const mapStateToProps = (state) => {
//   return {
//     value: state.filter,
//   }
// };

// const mapDispatchToProps = (dispatch) => {

//   return {
//     onFilterChange: e => dispatch(filterValue(e.target.value))
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Filter)

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
