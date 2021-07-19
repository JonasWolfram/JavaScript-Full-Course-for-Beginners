const createPerson = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender,
    }
};
console.log(createPerson("Zodiac Hasbro", 56, "male"));

//Better way:

const createPerson1 = (name, age, gender) => ({ name, age, gender });
console.log(createPerson1("Zodiac Hasbro", 56, "male"));
