
import { useState } from 'react';
import { listData } from './utils/helpers';

import './css/App.css';

import Header from "./components/Header";
import List from './components/List';



const App = () => {
const [data, setData] = useState(listData)


  return (
    <div className="App">
        <Header />
        <List todos={data}/>
    </div>
  );
}

export default App;
