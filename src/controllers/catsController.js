import Cat from '../models/catsModel.js'
import paginate from '../helper/paginate.js';

export const show = async (req, res) => {
    let { page, pageSize, sort } = req.query

    let query = {}
    if (sort != null) {
        sort = sort.split(',')
        query.order = [sort]
    }


    try {
        let cat = await Cat.findAndCountAll(
            paginate(
                query,
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

