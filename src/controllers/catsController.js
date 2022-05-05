import Cat from '../models/catsModel.js'
import paginate from '../helper/paginate.js';

export const show = async (req, res) => {
    let { page, pageSize } = req.query

    try {
        let cat = await Cat.findAndCountAll(
            paginate(
                {},
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
