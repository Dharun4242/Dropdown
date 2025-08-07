import React from "react";
import Navbar from "./components/Navbar";

const user = {
  name: "Dharun",
  email: "dharun@example.com",
};

const App = () => {
  return (
    <div>
      <Navbar user={user} />
    </div>
  );
};

export default App;
