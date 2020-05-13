const helloWorld = () => {
  console.log('hello world');
};

const person = { name: 'Sandrico Provo', age: 20, country: 'Canada' };

const personName = async ({ name }) => {
  const nameInput = name;
  console.log(nameInput);
};

personName(person);
