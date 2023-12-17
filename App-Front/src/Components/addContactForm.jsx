import { useState, useContext } from "react";
import { ContactContext } from "../context/contactContext";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../Styles/contactForm.css";

function ContactForm() {
    const { CreateContact, UpdateContact, getContactById } =
        useContext(ContactContext);
    const { id } = useParams();
    const contact = getContactById(id);
    const navigate = useNavigate();

    console.log(id);
    console.log(contact);

    const [firstName, setFirstName] = useState(
        contact ? contact.firstName : ""
    );
    const [lastName, setLastName] = useState(contact ? contact.lastName : "");
    const [phone, setPhone] = useState(contact ? contact.phone : "");
    const [cellphone, setCellphone] = useState(
        contact ? contact.cellphone : ""
    );
    const [address, setAddress] = useState(contact ? contact.address : "");
    const [email, setEmail] = useState(contact ? contact.email : "");

    const handleSumbit = async (e) => {
        e.preventDefault();
        if (contact) {
            const response = await UpdateContact(id, {
                firstName,
                lastName,
                phone,
                cellphone,
                address,
                email,
            });
            if (response) {
                navigate("/");
            }
        } else {
            CreateContact({
                firstName,
                lastName,
                phone,
                cellphone,
                address,
                email,
            });
        }

        setFirstName("");
        setLastName("");
        setPhone("");
        setCellphone("");
        setAddress("");
        setEmail("");
    };

    return (
        <div className="contactFormPage">
            <div className="contactFormContainer">
                <h1 className="title">
                    {contact ? "Edit Contact" : "Add Contact"}
                </h1>
                <form onSubmit={handleSumbit} className="formBase">
                    <div className="formContainer">
                        <input
                            type="text"
                            className="contactForm"
                            placeholder="Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            className="contactForm"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                        <input
                            type="number"
                            min={100000}
                            max={999999}
                            className="contactForm"
                            placeholder="Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                        <input
                            type="number"
                            min={1000000000}
                            max={9999999999}
                            className="contactForm"
                            placeholder="Cellphone"
                            value={cellphone}
                            onChange={(e) => setCellphone(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            className="contactForm"
                            placeholder="Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            className="contactForm"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="buttons">
                        <button className="save" type="submit">
                            Save
                        </button>
                        <button
                            className="danger"
                            onClick={() => navigate("/")}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
