import styled from "@emotion/styled";
import { Form, Field, ErrorMessage } from "formik";
export const ContactForm = styled(Form)`
border: 2px solid tomato;
box-shadow: 0px 0px 5px 4px rgba(217,58,58,0.75);
max-width:500px;
padding: 30px 20px;
text-align: center;
`
export const InputField = styled(Field)`
    &:not(:last-child){
    margin-bottom:10px;
   }
    width: 300px; 
    padding: 10px; 
    box-shadow: inset 0 1px 5px rgba(0,0,0,0.2); 
    border: 1px solid #ccc; 
    color: black; 
    font-size:16px;
    padding-left: 30px; 
   `
   export const Label = styled.label`
    width: 100px; 
    text-align: right; 
    float: left; 
    margin-right: 10px; 
    line-height: 30px; 
    color: hsl(210deg 8% 20%);
    font-weight:900;
   `

export const Error = styled(ErrorMessage)`
   margin-bottom:30px;
   color: tomato;
   font-size:16px;
   text-align: center; 
   `
export const BtnSubmitForm = styled.button`
display: inline-flex;
justify-content: center;
align-items: center;
margin-top:30px;
min-width: 160px;
height: 44px;
color: hsl(210deg 8% 20%);
background-color: tomato;
border: 0;
border-radius: 22px;
font-family: inherit;
font-weight: 700;
font-size: inherit;
line-height: 1.31;

`