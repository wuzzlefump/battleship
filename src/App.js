import "./App.css";
import { Box } from "./Components/Box/index";

function App() {
  const repeat = (value) => {
    let numbers = "1,2,3,4,5,6,7,8,9,10".split(",");
    return (
      <>
        <p>{value}</p>
        {numbers.map((item) => {
          return <Box id={value + item}></Box>;
        })}
      </>
    );
  };
  let morenums = "Battleship,1,2,3,4,5,6,7,8,9,10".split(",");
  let abc = "A,B,C,D,E,F,G,H,I,J".split(",");
  return (
    <>
      <div className="App">
        <h2>Your board</h2>
        <div className={"board"}>
          {morenums.map((item) => {
            return <p>{item}</p>;
          })}
          {abc.map((item) => {
            return repeat(item);
          })}
        </div>
        <h2>Opponents board</h2>
        <div className={"board"}>
          {morenums.map((item) => {
            return <p>{item}</p>;
          })}
          {abc.map((item) => {
            return repeat(item);
          })}
        </div>
        <h3>Rules</h3>
        <p>
          You have a fleet of five ships. They are: 1 Air craft Carrier of 5
          spaces, 1 battleship of 4 places, 2 destroyers of 3 spaces,and 1
          submarine of 2 spaces.
        </p>
      </div>
    </>
  );
}

export default App;
