import { useState} from "react";
import { nanoid } from 'nanoid'
import { Forma } from "../Form/Form";
import { Contacts } from '../Contacts/Contacts'
import { Filter } from "../Filter/Filter";
import { Container, Title, SecondTitle } from "./App.styled";
import { useLocalStorage } from "hooks/useLocalStorage";

export const App = () => {
  const [contacts, setContacts] = useLocalStorage("contacts", [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ])
  const [filter, setFilter] = useState('');

  const  addContacts = (value) => {
    const isIncludesName = contacts.find(
      contact => contact.name.toLowerCase() === value.name.toLowerCase()
    );
    if (isIncludesName) {
      return alert(`${value.name} is already is contacts`);
    }
    setContacts( prevState => [...prevState,
            {id: nanoid(),
            name: value.name ,
            number: value.number}]);
  }
  const  deleteContact = (contactId) => {
    setContacts(prevState => (prevState.filter(contact => contact.id !==contactId)))
  }

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };
  return (
    <Container>
        <Title>Phonebook</Title>
        <Forma onSubmit={addContacts} />
        <SecondTitle>Contacts</SecondTitle>
        <Filter value={filter} handleChange={(e)=>setFilter(e.currentTarget.value)}/>
        <Contacts contacts={getVisibleContacts()} onDeleteContact={deleteContact}/>
    </Container>
  ) 
}

// export class App extends Component {
//   state = {
//   contacts: [
//     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//     ],
//     filter:'',
//   } 
//   componentDidMount() {
//     const savedContacts = localStorage.getItem("contacts");
//     const parsedContacts = JSON.parse(savedContacts);
//     if (parsedContacts) {
//       this.setState({contacts:parsedContacts})
//     }
//   }
//   componentDidUpdate(_, prevState) {
//     const { contacts } = this.state;
//     if (prevState.contacts !== contacts) {
//       localStorage.setItem('contacts', JSON.stringify(contacts))
//     }
//   }
//   addContacts = (value) => {
//     const contacsList = this.state.contacts;
//     const isIncludesName = contacsList.find(
//       contact => contact.name.toLowerCase() === value.name.toLowerCase()
//     );

//     if (isIncludesName) {
//       return alert(`${value.name} is already is contacts`);
//     }
//     this.setState( prevState => ({
//       contacts: [...prevState.contacts,
//             {id: nanoid(),
//             name: value.name ,
//             number: value.number,
//         }]
//     }));
//   }
//   deleteContact = (contactId) => {
//     this.setState(prevState => ({
//     contacts: prevState.contacts.filter(contact => contact.id !==contactId)
//   }))
//   }

//   handleFilterChange = (e) => {
//         this.setState({ filter: e.currentTarget.value })
//   }

//   getVisibleContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     );
//   };

//   render() { 
//     const { filter } = this.state;
//     const visibleContacts = this.getVisibleContacts();
//     return (
//       <Container>
//         <Title>Phonebook</Title>
//         <Forma onSubmit={this.addContacts} />
//         <SecondTitle>Contacts</SecondTitle>
//         <Filter value={filter} handleChange={this.handleFilterChange}/>
//         <Contacts contacts={visibleContacts} onDeleteContact={ this.deleteContact}/>
//       </Container>
      
//     ) 
//   }
  
// };