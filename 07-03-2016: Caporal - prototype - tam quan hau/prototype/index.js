/**
 * Created by phambaonam on 07/03/2017.
 */
let str = 'abc'; // str là string, cha nó là String.prototype

// nhân đôi chuỗi đưa vào
String.prototype.duplicate = function() { return this + this; };

console.log(str.duplicate());

// TODO: Co 2 cach de khoi tao 1 object,

// object literal
let person = {
    firstName:'Nam',
    lastName: 'Pham',
    showName: ()=>{
        console.log(this.firstName + ' ' + this.lastName);
    }
};

// Constructor Function
function Person (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.showName = function(){
        console.log(this.firstName + ' ' + this.lastName);
    };
}

let otherPerson = new Person('Nam','Pham');

Person.prototype.age = 22;

let anotherPerson = new Person('Nam','Pham');

console.log(anotherPerson);






























