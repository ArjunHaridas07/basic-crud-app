import './App.css';
import ContactList from './Components/ContactList';
import ContactForm from './Components/ContactForm';
function App() {
  return (
    <div className="App">
      <h1 className='text-center' >Contact App</h1>
      <ContactForm />
      <ContactList />
      
    </div>
  );
}

export default App;
