const { test, expect } = require('@playwright/test');

var userId;

test("Get users", async({request}) => {

    const getResponse = await request.get('https://reqres.in/api/users?page=2');
    console.log(await getResponse.json());
    expect(getResponse.status()).toBe(200);

})

test("Create users", async({request}) => {
    const postResponse = await request.post('https://reqres.in/api/users', {
        data:{
            
                "name": "morpheus",
                "job": "leader"
            },
            headers:{
            "Accept":"application/json"
            }
    });
    console.log(await postResponse.json());
    expect(postResponse.status()).toBe(201);

    var response = await postResponse.json();
    userId = response.id;

})

test("Update users", async({request}) => {
    const putResponse = await request.put('https://reqres.in/api/users/'+userId, {
        data:{
            
                "name": "morpheus",
                "job": "engineer"
            },
            headers:{
            "Accept":"application/json"
            }
    });
    console.log(await putResponse.json());
    expect(putResponse.status()).toBe(200);

})

test("Delete users", async({request}) => {
    
    const deleteResponse = await request.delete('https://reqres.in/api/users/'+userId);
    expect(deleteResponse.status()).toBe(204);
})