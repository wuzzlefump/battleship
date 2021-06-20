
import './App.css';
import {Box} from './Components/Box/index'


function App() {
  
  const repeat =(value)=>{
    let numbers="1,2,3,4,5,6,7,8,9,10".split(",")
    return(<><p>{value}</p>
    {numbers.map((item)=>{
      return(<Box id={value + item}></Box>)
    })}</>)
    }
    let morenums="Battleship,1,2,3,4,5,6,7,8,9,10".split(",")
let abc="a,b,c,d,e,f,g,h,i,j".split(",")
  return (
    <div className="App">
          <h2>Your board</h2>
      <div className={"board"}>

      {morenums.map((item)=>{return(<p>{item}</p>)})}
      {abc.map((item)=>{return(repeat(item))})}
    </div>
      <h2>Opponents board</h2>
    <div className={"board"}>

      {morenums.map((item)=>{return(<p>{item}</p>)})}
      {abc.map((item)=>{return(repeat(item))})}
      </div>
    </div>
  ); 
}

export default App;
