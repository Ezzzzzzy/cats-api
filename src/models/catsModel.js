import { Sequelize, DataTypes, Model } from 'sequelize';
import { db } from '../utils/db.js'

class Cat extends Model { }

Cat.init({
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
    }
}, {
    sequelize: db,
    modelName: 'Cat'
});

export default Cat

