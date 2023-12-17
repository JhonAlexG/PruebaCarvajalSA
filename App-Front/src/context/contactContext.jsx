import { createContext, useEffect, useState } from "react";
import axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;

export const ContactContext = createContext();

export function ContactProvider({ children }) {
    const [contact, setContact] = useState([]);
    const [contactAux, setContactAux] = useState([]);

    const url = VITE_API_URL+"/api/contacts";
    const getContacts = async () => {
        const response = await axios.get(url);
        setContact(response.data.body);
        setContactAux(response.data.body);
        console.log(response.data);
    };

    useEffect(() => {
        getContacts();
    }, []);

    async function CreateContact(newContact) {

        console.log(newContact);
        await axios
            .post(url, newContact)
            .then((data) => {
                setContact([...contact, data.data.body]);
                setContactAux([...contactAux, data.data.body]);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    async function UpdateContact(id, updatedContact) {
        return await axios
            .put(`${url}/${id}`, updatedContact)
            .then((data) => {
                setContact(
                    contact.map((contact) =>
                        contact.id == id ? data.data.body : contact
                    )
                );
                setContactAux(
                    contactAux.map((contact) =>
                        contact.id == id ? data.data.body : contact
                    )
                );
                console.log(data.data.body);
                return true;
            })
            .catch((error) => {
                console.log(error);
                return false;
            });
    }

    async function DeleteContact(id) {
        axios
            .delete(`${url}/${id}`)
            .then((data) => {
                setContact(contact.filter((contact) => contact.id !== id));
            })
            .catch((error) => console.log(error));
    }

    function getContactById(id) {
        console.log(contact);
        return contact.find((contact) => contact.id == id);
    }

    return (
        <ContactContext.Provider
            value={{
                contact,
                CreateContact,
                UpdateContact,
                DeleteContact,
                getContactById,
            }}
        >
            {children}
        </ContactContext.Provider>
    );
}
