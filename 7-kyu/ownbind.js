const logPerson = person => {
  return `Person: ${person.name}, ${person.age}, ${person.job}`;
};

const person1 = { name: 'Adam', age: 23, job: 'dev' };
const person2 = { name: 'Eva', age: 21, job: 'economist' };

const bind = function (person, logPerson) {
  return logPerson(person);
};

// console.log(bind(person1, logPerson));
// console.log(bind(person2, logPerson));

// bind(person1, logPerson)
