import { Contact } from "../model/contact.js";

export const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            body: contacts,
        });
    } catch (error) {
        res.status(404).json({
            message: "Contact not found",
        });
    }
};

export const getContact = async (req, res) => {
    try {
        const id = req.params.id;
        const contacts = await Contact.findOne({
            where: {
                id: id,
            },
        });
        res.status(200).json({
            ok: true,
            status: 200,
            body: contacts,
        });
    } catch (error) {
        res.status(404).json({
            message: "Contact not found",
        });
    }
};

export const createContact = async (req, res) => {
    try {
        const dataContacts = req.body;
        await Contact.sync();
        const createContact = await Contact.create({
            firstName: dataContacts.firstName,
            lastName: dataContacts.lastName,
            email: dataContacts.email,
            phone: dataContacts.phone,
            cellphone: dataContacts.cellphone,
            address: dataContacts.address,
        });
        res.status(201).json({
            ok: true,
            status: 201,
            body: createContact,
        });
    } catch (error) {
        res.status(404).json({
            message: "Contact not found",
        });
    }
};

export const updateContact = async (req, res) => {
    try {
        const id = req.params.id;
        const dataContacts = req.body;
        const updateContact = await Contact.update(
            {
                firstName: dataContacts.firstName,
                lastName: dataContacts.lastName,
                email: dataContacts.email,
                phone: dataContacts.phone,
                cellphone: dataContacts.cellphone,
                address: dataContacts.address,
            },
            {
                where: {
                    id: id,
                },
            }
        );
        res.status(200).json({
            ok: true,
            status: 200,
            body: updateContact,
        });
    } catch (error) {
        res.status(404).json({
            message: "Contact not found",
        });
    }
};

export const deleteContact = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteContact = await Contact.destroy({
            where: {
                id: id,
            },
        });
        res.status(204).json({
            message: "Contact deleted successfully",
        });
    } catch (error) {
        res.status(404).json({
            message: "Contact not found",
        });
        console.log(error);
    }
};
