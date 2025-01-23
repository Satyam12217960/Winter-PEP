import React from "react";
function App() {
  const handleClick = (event) => {
      alert("Button Clicked!");
      console.log(event);
      console.log(event.target);
      console.log(event.type);
  };

  return <button onClick={handleClick}>Click Me</button>;
}
export default App;