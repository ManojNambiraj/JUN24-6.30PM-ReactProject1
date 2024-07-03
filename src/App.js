import { useState } from "react";
import "./App.css";
import Button from "./Button"

function App() {

  const [state, setState] = useState(0);

  // const foo = (data) => {
  //   alert(data)
  // }

  const handleLike = () => {
    setState(state + 1)
  }

  return (
    <div className="App">
      {/* <Button name={"All"} foo={foo} />
      <Button name={"Every"} foo={foo} />
      <Button name={"Sportz"} foo={foo} />
      <Button name={"Sportz"} foo={foo}  />
      <Button name={"Music"} foo={foo}  />
      <Button name={"Books"} foo={foo}  /> */}

        <h1>{state}</h1>
      <button onClick={handleLike}>👍 Like</button>
      
      
    </div>
  );
}

export default App;
