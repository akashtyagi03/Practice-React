import Child2 from "../component/Child2";

function Child1({ message }) {
  return (
    <div>
      <h2>Child1</h2>
      <Child2 message={message}/>
    </div>
  );
}

export default Child1;
