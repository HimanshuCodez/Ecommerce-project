import React from "react";
import AuthLayout from "./components/auth/layout";
import { Route } from "react-router-dom";
import login from "./pages/auth/login";
import { register } from "module";
const App = () => {
  return (
    <>
      <div>
        <h2>header</h2>
        <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="/login" element={<login />} />
            <Route path="/register" element={<register />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
