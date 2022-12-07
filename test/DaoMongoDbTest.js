let DAOMongoDB = require ("../src/integration/DAOMongoDB");
let assert = require('assert'); 


let daoMongoDB = new DAOMongoDB();
let documents = null;
/*
init = async () =>{
    console.log("init...");
    documents =  await daoMongoDB.getAllEmployees();
    console.log("init end...")
};
init();
*/

    describe('DAOMongoDB', function () {
        describe('#getAllEmployees', function () {
            it('should return more than 0 documents', function () {
                    daoMongoDB.getAllEmployees().then( function(documents) {       
                    console.log("test mongo", documents);
                    assert.equal(documents.length>0, true);
                });
            });
        });
    });
