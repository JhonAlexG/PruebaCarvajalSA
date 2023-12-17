import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ContactContext } from "../context/contactContext";
import "../Styles/contactCard.css";

function ContactCard({ contact }) {
    const { DeleteContact, getContactById } = useContext(ContactContext);
    const navigate = useNavigate();
    console.log(contact);

    return (
        <div className="contact" key={contact.id}>
            {contact && (
                <div className="contactItemContainer" key={contact.id}>
                    <h5 className="contactItem" id="fullName">
                        {contact.firstName} {contact.lastName}
                    </h5>
                    <h6 className="contactItem" id="phone">
                        {contact.phone}
                    </h6>
                    <h6 className="contactItem" id="cellphone">
                        {contact.cellphone}
                    </h6>
                    <h6 className="contactItem" id="address">
                        {contact.address}
                    </h6>
                    <p className="contactItem" id="eMail">
                        {contact.email}
                    </p>
                    <div className="buttons" id="buttons">
                        <button
                            className="edit"
                            onClick={() => navigate(`/edit/${contact.id}`)}
                        >
                            Edit
                        </button>
                        <button
                            className="danger"
                            onClick={() => DeleteContact(contact.id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ContactCard;
