const faker = require("faker")
faker.seed(123)

const categories = ["Watersports", "Soccer", "Chess"]
const productCount = 503

module.exports = () => ({
    categories: categories,
    products: [...Array(productCount).keys()].map(i => {
        let category = faker.helpers.randomize(categories)
        return {
            id: i,
            name: faker.commerce.productName(),
            category: category,
            description: `${category}: ${faker.lorem.sentence(3)}`,
            price: Number(faker.commerce.price()),
        }
    }),
    orders: [],
})