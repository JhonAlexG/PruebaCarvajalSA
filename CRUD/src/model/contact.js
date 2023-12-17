import { Sequelize, Model, DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

class Contact extends Model {}

Contact.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: { type: DataTypes.STRING, allowNull: false },
        lastName: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false },
        phone: { type: DataTypes.STRING, allowNull: false },
        cellphone: { type: DataTypes.STRING, allowNull: false },
        address: { type: DataTypes.STRING, allowNull: false },
    },
    {
        sequelize,
        modelName: "Contact",
    }
);

export { Contact };
