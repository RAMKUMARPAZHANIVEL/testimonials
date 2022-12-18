import './App.css';
import LeftSection from './components/leftSection';
import MiddleSection from './components/middleSection';
import RightSection from './components/rightSection';
import { list1, list2 } from './studentsList';
import { useState } from 'react';
import background from './utils/pexels-jakub-novacek-924824.jpg';
function App() {
  const [index,setIndex] = useState(0);
  const wholeList = [...list1,...list2];

  return (
   <main style={{backgroundImage:{background}}}>
     <div className="header" >
     <h1> <span className="green">Thousands</span> of lives changed</h1>
      <p>hear it from the ones who has been in the journey already</p>
     </div>
     <div className="main-container">
      <LeftSection list={list1} index={index}/>
      <MiddleSection list={wholeList} i={index} setIndex={setIndex}/>
      <RightSection list={list2} index={index} />
    </div>
   </main>
  );
}

export default App;
