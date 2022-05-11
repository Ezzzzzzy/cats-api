import Cat from "../models/catsModel.js";

export const CatSeeder = async () => {

    let cats = await Cat.findAndCountAll();
    if (cats.count === 0)
        await Cat.bulkCreate([
            {
                "id": 1,
                "name": "Abyssinian",
                "breedGroup": "Egypt",
                "weight": "3 - 5"
            },
            {
                "id": 2,
                "name": "Aegean",
                "breedGroup": "Greece",
                "weight": "3 - 5"
            },
            {
                "id": 3,
                "name": "American Bobtail",
                "breedGroup": "United States",
                "weight": "3 - 7"
            },
            {
                "id": 4,
                "name": "American Curl",
                "breedGroup": "United States",
                "weight": "2 - 5"
            },
            {
                "id": 5,
                "name": "American Shorthair",
                "breedGroup": "United States",
                "weight": "4 - 7"
            },
            {
                "id": 6,
                "name": "American Wirehair",
                "breedGroup": "United States",
                "weight": "4 - 7"
            },
            {
                "id": 7,
                "name": "Arabian Mau",
                "breedGroup": "United Arab Emirates",
                "weight": "4 - 7"
            },
            {
                "id": 8,
                "name": "Australian Mist",
                "breedGroup": "Australia",
                "weight": "3 - 7"
            },
            {
                "id": 9,
                "name": "Balinese",
                "breedGroup": "United States",
                "weight": "2 - 5"
            },
            {
                "id": 10,
                "name": "Bambino",
                "breedGroup": "United States",
                "weight": "2 - 4"
            },
            {
                "id": 11,
                "name": "Bengal",
                "breedGroup": "United States",
                "weight": "3 - 7"
            },
            {
                "id": 12,
                "name": "Birman",
                "breedGroup": "France",
                "weight": "3 - 7"
            },
            {
                "id": 13,
                "name": "Bombay",
                "breedGroup": "United States",
                "weight": "3 - 5"
            },
            {
                "id": 14,
                "name": "British Longhair",
                "breedGroup": "United Kingdom",
                "weight": "4 - 8"
            },
            {
                "id": 15,
                "name": "British Shorthair",
                "breedGroup": "United Kingdom",
                "weight": "5 - 9"
            },
            {
                "id": 16,
                "name": "Burmese",
                "breedGroup": "Burma",
                "weight": "3 - 5"
            },
            {
                "id": 17,
                "name": "Burmilla",
                "breedGroup": "United Kingdom",
                "weight": "3 - 6"
            },
            {
                "id": 18,
                "name": "California Spangled",
                "breedGroup": "United States",
                "weight": "5 - 7"
            },
            {
                "id": 19,
                "name": "Chantilly-Tiffany",
                "breedGroup": "United States",
                "weight": "3 - 5"
            },
            {
                "id": 20,
                "name": "Chartreux",
                "breedGroup": "France",
                "weight": "3 - 7"
            },
            {
                "id": 21,
                "name": "Chausie",
                "breedGroup": "Egypt",
                "weight": "3 - 7"
            },
            {
                "id": 22,
                "name": "Cheetoh",
                "breedGroup": "United States",
                "weight": "4 - 7"
            },
            {
                "id": 23,
                "name": "Colorpoint Shorthair",
                "breedGroup": "United States",
                "weight": "2 - 5"
            },
            {
                "id": 24,
                "name": "Cornish Rex",
                "breedGroup": "United Kingdom",
                "weight": "2 - 4"
            },
            {
                "id": 25,
                "name": "Cymric",
                "breedGroup": "Canada",
                "weight": "4 - 6"
            },
            {
                "id": 26,
                "name": "Cyprus",
                "breedGroup": "Cyprus",
                "weight": "4 - 7"
            },
            {
                "id": 27,
                "name": "Devon Rex",
                "breedGroup": "United Kingdom",
                "weight": "2 - 5"
            },
            {
                "id": 28,
                "name": "Donskoy",
                "breedGroup": "Russia",
                "weight": "5 - 6"
            },
            {
                "id": 29,
                "name": "Dragon Li",
                "breedGroup": "China",
                "weight": "4 - 6"
            },
            {
                "id": 30,
                "name": "Egyptian Mau",
                "breedGroup": "Egypt",
                "weight": "3 - 6"
            },
            {
                "id": 31,
                "name": "European Burmese",
                "breedGroup": "Burma",
                "weight": "3 - 6"
            },
            {
                "id": 32,
                "name": "Exotic Shorthair",
                "breedGroup": "United States",
                "weight": "3 - 6"
            },
            {
                "id": 33,
                "name": "Havana Brown",
                "breedGroup": "United Kingdom",
                "weight": "3 - 5"
            },
            {
                "id": 34,
                "name": "Himalayan",
                "breedGroup": "United States",
                "weight": "3 - 6"
            },
            {
                "id": 35,
                "name": "Japanese Bobtail",
                "breedGroup": "Japan",
                "weight": "2 - 5"
            },
            {
                "id": 36,
                "name": "Javanese",
                "breedGroup": "United States",
                "weight": "2 - 5"
            },
            {
                "id": 37,
                "name": "Khao Manee",
                "breedGroup": "Thailand",
                "weight": "4 - 6"
            },
            {
                "id": 38,
                "name": "Korat",
                "breedGroup": "Thailand",
                "weight": "3 - 5"
            },
            {
                "id": 39,
                "name": "Kurilian",
                "breedGroup": "Russia",
                "weight": "4 - 7"
            },
            {
                "id": 40,
                "name": "LaPerm",
                "breedGroup": "Thailand",
                "weight": "3 - 5"
            },
            {
                "id": 41,
                "name": "Maine Coon",
                "breedGroup": "United States",
                "weight": "5 - 8"
            },
            {
                "id": 42,
                "name": "Malayan",
                "breedGroup": "United Kingdom",
                "weight": "3 - 6"
            },
            {
                "id": 43,
                "name": "Manx",
                "breedGroup": "Isle of Man",
                "weight": "3 - 6"
            },
            {
                "id": 44,
                "name": "Munchkin",
                "breedGroup": "United States",
                "weight": "2 - 4"
            },
            {
                "id": 45,
                "name": "Nebelung",
                "breedGroup": "United States",
                "weight": "3 - 5"
            },
            {
                "id": 46,
                "name": "Norwegian Forest Cat",
                "breedGroup": "Norway",
                "weight": "4 - 7"
            },
            {
                "id": 47,
                "name": "Ocicat",
                "breedGroup": "United States",
                "weight": "3 - 7"
            },
            {
                "id": 48,
                "name": "Oriental",
                "breedGroup": "United States",
                "weight": "2 - 5"
            },
            {
                "id": 49,
                "name": "Persian",
                "breedGroup": "Iran (Persia)",
                "weight": "4 - 6"
            },
            {
                "id": 50,
                "name": "Pixie-bob",
                "breedGroup": "United States",
                "weight": "4 - 8"
            },
            {
                "id": 51,
                "name": "Ragamuffin",
                "breedGroup": "United States",
                "weight": "4 - 9"
            },
            {
                "id": 52,
                "name": "Ragdoll",
                "breedGroup": "United States",
                "weight": "5 - 9"
            },
            {
                "id": 53,
                "name": "Russian Blue",
                "breedGroup": "Russia",
                "weight": "2 - 5"
            },
            {
                "id": 54,
                "name": "Savannah",
                "breedGroup": "United States",
                "weight": "4 - 11"
            },
            {
                "id": 55,
                "name": "Scottish Fold",
                "breedGroup": "United Kingdom",
                "weight": "2 - 5"
            },
            {
                "id": 56,
                "name": "Selkirk Rex",
                "breedGroup": "United States",
                "weight": "3 - 7"
            },
            {
                "id": 57,
                "name": "Siamese",
                "breedGroup": "Thailand",
                "weight": "4 - 7"
            },
            {
                "id": 58,
                "name": "Siberian",
                "breedGroup": "Russia",
                "weight": "4 - 7"
            },
            {
                "id": 59,
                "name": "Singapura",
                "breedGroup": "Singapore",
                "weight": "2 - 4"
            },
            {
                "id": 60,
                "name": "Snowshoe",
                "breedGroup": "United States",
                "weight": "3 - 5"
            },
            {
                "id": 61,
                "name": "Somali",
                "breedGroup": "Somalia",
                "weight": "3 - 5"
            },
            {
                "id": 62,
                "name": "Sphynx",
                "breedGroup": "Canada",
                "weight": "3 - 5"
            },
            {
                "id": 63,
                "name": "Tonkinese",
                "breedGroup": "Canada",
                "weight": "3 - 5"
            },
            {
                "id": 64,
                "name": "Toyger",
                "breedGroup": "United States",
                "weight": "3 - 7"
            },
            {
                "id": 65,
                "name": "Turkish Angora",
                "breedGroup": "Turkey",
                "weight": "2 - 5"
            },
            {
                "id": 66,
                "name": "Turkish Van",
                "breedGroup": "Turkey",
                "weight": "3 - 9"
            },
            {
                "id": 67,
                "name": "York Chocolate",
                "breedGroup": "United States",
                "weight": "5 - 8"
            }
        ])

    return;
}