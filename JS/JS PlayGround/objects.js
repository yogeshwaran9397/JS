const person = {
    name: 'John',
    age: 30,
    isEmployed: true,
    greet: function() {
      console.log('Hello, my name is ' + this.name);
    }
  };
  
  //Access 
  console.log(person.name);
  person.greet();