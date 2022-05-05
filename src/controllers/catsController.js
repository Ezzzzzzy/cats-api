import Cat from '../models/catsModel.js'


export const show = async (req, res) => {

    let cat = await Cat.findAll();

    res.send({
        "body": cat
    })
}
