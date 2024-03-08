import ListGroup from './components/ListGroup';
import './App.css';
import { BsFillCalendarFill } from 'react-icons/bs';
import Like from './components/Like';

function App() {
  const items = ['New York', 'Los Angeles', 'San Francisco', 'Miami'];

  return (
    <div>
      <BsFillCalendarFill color="red" size="40" />
      <Like onClick={() => console.log('clicked')} />
      <ListGroup heading="Miami" items={items} onSelectItem={() => {}} />
    </div>
  );
}

export default App;
