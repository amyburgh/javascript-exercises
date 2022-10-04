const findTheOldest = function (people) {
    return people.reduce((oldest, person) => {
        let a = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let b = getAge(person.yearOfBirth, person.yearOfDeath);
        return a > b ? oldest : person;
    });
};

const getAge = function (birth, death) {
    if (!death)
        death = new Date().getFullYear();
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
