import React from "react";
import { AuthContextProvider } from "./context/AuthContext";
import {MyRouts} from "./routers/routes";

function App() {
  return (
    <AuthContextProvider>
      <div>
        <MyRouts />
      </div>
    </AuthContextProvider>
  );
}

export default App;
