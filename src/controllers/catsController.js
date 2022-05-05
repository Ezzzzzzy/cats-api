import Cat from '../models/catsModel.js'
import paginate from '../helper/paginate.js';

export const show = async (req, res) => {
    let { page, pageSize, sort, search } = req.query

    let query = {
        where: search ? { where: { name: search } } : {},
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
        })
    }
}

