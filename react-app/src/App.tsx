import ListGroup from './components/ListGroup';
import './App.css';

function App() {
  const items = ['New York', 'Los Angeles', 'San Francisco', 'Miami'];

  return (
    <div>
      <ListGroup heading="Miami" items={items} onSelectItem={() => {}} />
    </div>
  );
}

export default App;
