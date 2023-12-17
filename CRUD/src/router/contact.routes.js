import { Router } from "express";
import {
    getContact,
    getContacts,
    createContact,
    updateContact,
    deleteContact,
} from "../controllers/contactController.js";

const router = Router();

router.get("/contacts", getContacts);

router.get("/contacts/:id", getContact);

router.post("/contacts", createContact);

router.put("/contacts/:id", updateContact);

router.delete("/contacts/:id", deleteContact);

export default router;
