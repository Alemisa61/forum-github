// App.js
import Loader from "./components/Loader/Loader";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import HomePage from "./Pages/Home/Home";
import LoginPage from "./Pages/SignIn/SignIn";
import QuestionPage from "./Pages/Question/Question";

const App = () => (
  <AuthProvider>
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <ProtectedRoute path="/question" component={QuestionPage} />
        <ProtectedRoute exact path="/" component={HomePage} />
      </Switch>
    </Router>
  </AuthProvider>
);

export default App;
