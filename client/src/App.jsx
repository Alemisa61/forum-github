import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./components/AuthContext/AuthContext"; // Import AuthProvider
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import HomePage from "./Pages/Home/Home";
import SignUpPage from "./Pages/AuthPage/AuthPage";
import Layout from "./components/Layout/Layout";
import Question from "./Pages/Question/Question";
import Answer from "./Pages/Answer/Answer";

const App = () => (
  <AuthProvider>
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/home" element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
            } />
          <Route path="/" element={<SignUpPage />} />
          <Route
            path="/question/:question_id"
            element={
              <ProtectedRoute>
                <Answer />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ask"
            element={
              <ProtectedRoute>
                <Question />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
    </Router>
  </AuthProvider>
);

export default App;
