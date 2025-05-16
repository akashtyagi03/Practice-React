import Child3 from "./Child3";

function Child2({ message }) {
  return (
    <div>
      <h3>Child2</h3>
      <Child3 message={message} />
    </div>
  );
}

export default Child2;
