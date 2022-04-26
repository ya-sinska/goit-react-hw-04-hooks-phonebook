import { Formik} from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import {ContactForm, InputField, Label, Error, BtnSubmitForm } from './Form.styled'
const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const schema = yup.object().shape({
  name: yup.string().matches(nameRegExp, 'Name is not valid').required(),
  number: yup.string().matches(phoneRegExp, 'Phone number is not valid').max(12).required(),
})
const initialValues = {
    name: '',
    number: '+38',
};
export const Forma = ({onSubmit}) => {
    const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };
    return (
        <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}>
            <ContactForm autoComplete='off'>
                <Label htmlFor='name'> Name </Label>             
                <InputField
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Surname Name"
                    />
                <Error name="name" component="div"/>
                
                <Label  htmlFor='number'> Number </Label >              
                <InputField
                    id="number"
                    type="tel"
                    name="number"
                    />
                <Error name="number" component="div"/>
                
                <BtnSubmitForm type="submit">Add contact</BtnSubmitForm>
            </ContactForm >
      </Formik>
    )
}

Forma.propTypes = {
    onSubmit: PropTypes.func,
}