import React ,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List'
import AddToList from './components/AddToList';


export interface Props{
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<Props["people"]>([
    {
      name: "Durga",
      url: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80",
      age: 24,
      note: "Very excited to work",
    },
  ]);

  return (
    <div className="App">
     <h1>People Invited to my Party</h1>
     <List people={people}/>
     <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
