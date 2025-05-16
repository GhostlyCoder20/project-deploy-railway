const service = require('../service/product')


async function getProducts() {
    let result;

    try {
        await service.getProducts().then(res => {
            result = res;
            
        });
    } catch (error) {
        console.log('Error: ', error.message);
        result = error;
    }

    return result;
}

module.exports = { getProducts }