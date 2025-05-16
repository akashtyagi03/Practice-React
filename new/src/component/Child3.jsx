import { useContext } from "react";
import { Usercontext } from "../App";

function Child3({ message }) {
  const user = useContext(Usercontext);
    return (
      <div>
        <h4>Child3</h4>
        <p>{user}</p>
      </div>
    );
  }
  
  export default Child3;
  