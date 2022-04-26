import PropTypes from 'prop-types';
import { ContactList, TextNotFind } from './Contacts.styled'
import { ContactItem } from '../ContactItem/ContactItem';
export const Contacts = ({ contacts, onDeleteContact }) => {
    return (
        <div>
            {contacts.length > 0 ?
                (<ContactList>
                {contacts.map(({ id, name, number }) => 
                    <ContactItem
                        key={id}
                        name={name}
                        number={number}
                        onDelete={() => { onDeleteContact(id) }} />
                    )}</ContactList>) : (<TextNotFind>There is no contacts</TextNotFind >)}
        </div>
    )
}
Contacts.propTypes = {
    onDeleteContact: PropTypes.func,
    contacts:PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),),
}