import { Item, Name, Delete } from './ContactItem.styled'
import PropTypes from 'prop-types';
export const ContactItem = ({ name, number, onDelete }) => {
    return (
        <Item>
                <Name>{name}:</Name>
                <>{number}</>
                <Delete onClick={onDelete}>Delete</Delete>
            </Item>
    )
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete:PropTypes.func.isRequired,
}