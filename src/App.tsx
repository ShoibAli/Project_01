import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Container } from "@mui/material";
import Counter from "./components/Counter";
import UserForm from "./components/UserForm";
import RichTextEditor from "./components/RichTextEditor";

const App: React.FC = () => {
  return (
    <div className="topContainer">
      <BrowserRouter>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" component={Link} to="/counter">
              Counter
            </Button>
            <Button color="inherit" component={Link} to="/user-form">
              User Form
            </Button>
            <Button color="inherit" component={Link} to="/editor">
              Rich Text Editor
            </Button>
          </Toolbar>
        </AppBar>
        <Container sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/user-form" element={<UserForm />} />
            <Route path="/editor" element={<RichTextEditor />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
};

export default App;
