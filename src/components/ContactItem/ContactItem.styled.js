import styled from "@emotion/styled";
export const Item = styled.li`
&:not(:last-child){
    margin-bottom:10px;
}
font-size:18px;
font-weight:400;
list-style: square;
list-style-position: inside;
`

export const Name = styled.span`
text-transform: capitalize;
`
export const Delete = styled.button`
display: inline-flex;
justify-content: center;
align-items: center;
margin-left:10px;
min-width: 60px;
height: 24px;
color: hsl(210deg 8% 20%);
background-color: tomato;
border: 0;
border-radius: 12px;
font-family: inherit;
`