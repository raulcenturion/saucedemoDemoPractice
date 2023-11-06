import { faker } from '@faker-js/faker';

class DataGenerator{

    getNameRandom(){return faker.name.firstName()}
    getUsernameRandom(){return faker.name.firstName()+faker.datatype.number({'min': 100,'max': 999})}
    getNumberRandom(){return faker.random.numeric()}
    getNumber(){return faker.datatype.number({'min': 100,'max': 999})}
    getCityRandom(){return faker.address.cityName()}
    getAddressRandom(){return faker.address.streetAddress()}
    getZipCodeRandom(){return faker.address.zipCode()}
    getEmailRandom(){return faker.internet.email()}
    getPhoneRandom(){return faker.phone.number()}
    getCountry(){return faker.address.country()}

}

export default DataGenerator;