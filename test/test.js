
const axios = require('axios');
const expect = require('chai').expect;

describe('Add a new pet', function () {
    it('Should add a new pet to the store', async function () {
        const petData = {
            id: 12345,
            name: 'Fluffy',
            photoUrls: ['https://www.example.com/fluffy.jpg'],
            status: 'available'
        };

        const response = await axios.post('https://petstore.swagger.io/v2/pet', petData);

        expect(response.status).to.equal(200);
        console.log(response.status)
        expect(response.data.name).to.equal('Fluffy');

        expect(response.data.status).to.equal('available');

    });
});
