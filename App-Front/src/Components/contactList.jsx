import { useContext } from "react";
import { ContactContext } from "../context/contactContext";
import { Link, useNavigate } from "react-router-dom";
import ContactCard from "./contactCard";
import "../Styles/contactList.css";

function ContactList() {
    const { contact } = useContext(ContactContext);
    const navigate = useNavigate();

    if (contact.length === 0) {
        return (
            <div className="contactList">
                <h1>No hay contactos</h1>
                <div className="buttonSpace">
                    <button
                        className="edit"
                        onClick={() => {
                            navigate("/add");
                        }}
                    >
                        Agregar Contacto
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="contactList">
            {contact.map((contact) => (
                <ContactCard contact={contact} key={contact.id} />
            ))}
            <div className="buttonSpace">
                <button
                    className="edit"
                    onClick={() => {
                        navigate("/add");
                    }}
                >
                    Agregar Contacto
                </button>
            </div>
        </div>
    );
}

export default ContactList;
