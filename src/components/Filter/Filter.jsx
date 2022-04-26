import PropTypes from 'prop-types';
import { Label, InputField } from './Filter.styled'
export const Filter = ({handleChange, value})=>{
 return (
<>
    <Label htmlFor="filter">Find contacts by name </Label>
    <InputField id="filter" type="text" name="filter" value={value} onChange={handleChange}/>
</>    
)}

Filter.propTypes = {
    handleChange: PropTypes.func,
    value:PropTypes.string,
}