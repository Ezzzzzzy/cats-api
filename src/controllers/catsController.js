import Cat from '../models/catsModel.js'
import paginate from '../helper/paginate.js';
import { Op } from 'sequelize';
import Validator from 'validatorjs';

export const show = async (req, res) => {
    let { page, pageSize, sort, search } = req.query

    let query = {
        where: search ? { where: { name: { [Op.like]: `%${search}%` } } } : {},
        order: sort ? { order: [sort.split(',')] } : {}
    }

    try {
        let cat = await Cat.findAndCountAll(
            paginate(
                {
                    ...query.where,
                    ...query.order
                },
                { page, pageSize }
            )
        );

        res.send({
            "body": cat
        })
    } catch (error) {
        res.send({
            body: error
        }, 500)
    }
}

export const getCat = async (req, res) => {
    let { catId } = req.params
    try {
        let cat = await Cat.findOne({ where: { id: catId } })
        res.send({
            cat
        })
    } catch (error) {
        res.send({
            body: error
        }, 500)
    }
}

export const createCat = async (req, res) => {
    let { name, weight, breedGroup } = req.body

    let validators = {
        "name": 'required',
        'weight': 'required',
        'breedGroup': 'required'
    }

    let validation = new Validator(req.body, validators);
    if (validation.fails()) {
        return res.send(validation.errors, 422)
    }

    try {
        await Cat.create({ name: name, weight: weight, breedGroup: breedGroup })
        res.send({
            body: "Success"
        })

    } catch (error) {
        res.send({
            body: error
        }, 500)
    }
}

export const deleteCat = async (req, res) => {
    let { catId } = req.params
    try {
        await Cat.destroy({ where: { id: catId } })

        res.send({
            body: "Success"
        }, 500)

    } catch (error) {
        res.send({
            body: error
        }, 500)
    }
}

