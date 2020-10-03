const { fake } = require("faker");
var faker = require("faker");
const fs = require("fs");


function fakeData(){

    let user = [];

    for(let i=0;i<10;i++){

        user.push({
            id: i,
            name: faker.company.companyName(),
            image: faker.image.fashion(),
            rating: faker.random.number()%5,
            description: faker.lorem.paragraph()
        })
    }

    return user;
}

console.log(fakeData());

let dataOBJ = fakeData();

fs.writeFileSync('data.json',JSON.stringify(dataOBJ,null,'\t'));
