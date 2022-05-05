import Cat from "../models/catsModel.js";

export const CatSeeder = async () => {

    let cats = await Cat.findAndCountAll();
    if (cats.count === 0)
        await Cat.bulkCreate([
            {
                id: 1,
                name: "Cat1",
                weight: "100KG"
            },
            {
                id: 2,
                name: "Cat2",
                weight: "102KG"
            },
            {
                id: 3,
                name: "Cat3",
                weight: "103KG"
            }
        ])

    return;
}