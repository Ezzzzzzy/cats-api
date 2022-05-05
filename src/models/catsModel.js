import { Sequelize, DataTypes, Model } from 'sequelize';
import { db } from '../utils/db.js'

class Cat extends Model { }

Cat.init({
    // Model attributes are defined here
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    weight: {
        type: DataTypes.STRING
        // allowNull defaults to true
    }
}, {
    // Other model options go here
    sequelize: db, // We need to pass the connection instance
    modelName: 'Cat' // We need to choose the model name
});

export default Cat

