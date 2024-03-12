import logo from './logo.svg';
import './App.css';
import DataTable from './DataTable';

function App() {

  const sampleData = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 28 },
    { id: 4, name: 'Alice', age: 22 },
  ];

  const pdata = "Data from Parent";
  return (
    <>
    <DataTable data = {sampleData} />
    </>
  );
}

export default App;
