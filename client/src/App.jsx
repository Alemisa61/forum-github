// App.js
import Loader from "./components/Loader/Loader";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import HomePage from "./Pages/Home/Home";
import AnswerPage from "./Pages/Answer/Answer";
import LoginPage from "./Pages/SignIn/SignIn";
import SignUpPage from "./Pages/SighUp/SignUp";
import QuestionPage from "./Pages/Question/Question";
import Layout from "./components/Layout/Layout";

const App = () => (
  <AuthProvider>
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route exact path="/" element={<HomePage />} />
          <Route
            path="/questions"
            element={
              <ProtectedRoute>
                <QuestionPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/answer"
            element={
              <ProtectedRoute>
                <AnswerPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
    </Router>
  </AuthProvider>
);

export default App;
