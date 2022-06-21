import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./components/posts";
import TestComponent from "./components/testComponent";
import Users from "./components/users";
import { UserProvider } from "./context/UserContext";
import UserList from "./components/userList";

function App() {
    return ( <
        >
        <
        BrowserRouter >
        <
        UserProvider >
        <
        Routes >
        <
        Route path = "/"
        element = { < TestComponent name = "nagin" / > }
        /> <
        Route path = "/post"
        element = { < Posts / > }
        /> { /* <Route path="/test" element={<TestComponent />} /> */ } <
        Route path = "/users"
        element = { < Users / > }
        /> <
        Route path = "/userlist"
        element = { < UserList / > }
        /> <
        /Routes> <
        /UserProvider> <
        /BrowserRouter> <
        />
    );
}

export default App;