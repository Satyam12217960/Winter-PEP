import Child from "./child"; // Import Child

function Parent() {
  let Author_name = "Author"; // Define name
  return <Child name={Author_name} />; // Pass name as prop
}

export default Parent;
