import React from "react";
import ComponentA from "./components/ComponentA";

function App() {

  const newContact = {
    name: 'German',
    surname: 'Settino',
    email: 'german.settino@gmail.com',
    connected: false,
  };

  return (
    <div className="App">
      <ComponentA contact={newContact} />
    </div>
  );
}

export default App;
