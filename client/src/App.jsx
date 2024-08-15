import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./components/AuthContext/AuthContext"; // Import AuthProvider
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import HomePage from "./Pages/Home/Home";
import SignUpPage from "./Pages/AuthPage/AuthPage";
import Layout from "./components/Layout/Layout";
import Questions from "./Pages/Questions/Question";
import AnswerPage from "./Pages/AnswerPage/AnswerPage";
import EditQuestion from "./Pages/EditQuestion/EditQuestion";

const App = () => (
  <AuthProvider>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          <Route
            exact
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/question/:question_id"
            element={
              <ProtectedRoute>
                <AnswerPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/question/edit/:question_id"
            element={
              <ProtectedRoute>
                <EditQuestion />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ask"
            element={
              <ProtectedRoute>
                <Questions />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
    </Router>
  </AuthProvider>
);

export default App;
