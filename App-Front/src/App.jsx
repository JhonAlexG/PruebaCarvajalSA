import { useState } from "react";

import AddContactForm from "./Components/addContactForm";
import ContactList from "./Components/contactList";

import {
    createBrowserRouter,
    BrowserRouter,
    Link,
    Route,
    Routes,
} from "react-router-dom";

function App() {
    const [count, setCount] = useState(0);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ContactList />} />
                <Route path="/add" element={<AddContactForm />} />
                <Route path="/edit/:id" element={<AddContactForm />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
