const people = [
  {
    name: "Sam",
    surname: "Hue",
    date: "07/07/2015",
    department: "Development",
    salary: "45000",
  },
  {
    name: "Mas",
    surname: "Tue",
    date: "04/05/1998",
    department: "Develop",
    salary: "25000",
  },
  {
    name: "Sammy",
    surname: "Huestin",
    date: "09/08/2000",
    department: "Development",
    salary: "65000",
  },
  {
    name: "David",
    surname: "Justin",
    date: "06/09/1988",
    department: "Development",
    salary: "12000",
  },
  {
    name: "Sardor",
    surname: "Jurayev",
    date: "04/08/1999",
    department: "Development",
    salary: "85000",
  },
];

// console.log(people);

//What is the avarage income of all the people in the array?
console.log("======================= avarage salary");
console.log(
  people.reduce(
    (accumulator, person) => accumulator + parseInt(person.salary),
    0
  ) / people.length
);

// Who are the people that are curently older thn 30?
console.log("=========================== older one");
console.log(
  people.filter(
    (person) =>
      new Date().getFullYear() - new Date(person.date).getFullYear() > 30
  )
);

//Get a list of the people's full name

console.log("======================== name and surname");

console.log(people.map((person) => `${person.name} ${person.surname}`)); // just name and surname
console.log(people.map(({ name, surname }) => `${name} ${surname}`)); // just name and surname same
console.log(
  people.map((person) => ({
    ...person,
    name: `${person.name} ${person.surname}`,
  }))
);

// Get a list of people in the array ordered from youngrst to oldest

console.log("======================= sort people");

console.log(
  people.sort(
    (personA, personB) => new Date(personA.date) - new Date(personB.date)
  )
);

// How many people are there in each department?

console.log("==================== calculate department");

console.log(
  people.reduce(
    (accumulator, person) => ({
      ...accumulator,
      [person.department]: accumulator[person.department] + 1 || 1,
    }),
    {}
  )
);
