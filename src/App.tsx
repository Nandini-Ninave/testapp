import './App.css';
import { Dropdown } from './components/atoms/dropdown';

function App() {
  const sampleOptions = [
  { label: 'Option 1', value: 'opt1' },
  { label: 'Option 2', value: 'opt2' },
  { label: 'Option 3', value: 'opt3' },
];
  return (
    
    <div><Dropdown options={sampleOptions} placeholder='select..'/></div>
  );
}

export default App;
