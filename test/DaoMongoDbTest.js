let DAOMongoDB = require ("../src/integration/DAOMongoDB");
let assert = require('assert'); 
const { checkPrime } = require("crypto");

let daoMongoDB = new DAOMongoDB();

describe('DAOMongoDB', function () {
    describe('#getAllEmployees', function () {
        it('should return more than 0 documents', async function () { 
            let documents = await daoMongoDB.getAllEmployees();
            assert.equal(documents.length > 0, true);
        });
    });
});

