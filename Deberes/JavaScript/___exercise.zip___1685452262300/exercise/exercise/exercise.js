const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;


// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);


function changeVals(person2){
  person2.firstName="Simon";
}

changeVals(person2);

console.log(person1);
console.log(person2);

/*
I'll explain it with A=Person1 B=Person2 example.

If we say A=5 , A will storage 5 as it's value.

If then we say B=A, B will storage A as it's value,
therefore, B will be B=5;

But now if we change B, who is keeping A inside it,
A will be equal to A=B.

So, if we now do B=10; A will turn into A=10,
because it's storaged in B.

This will be the logical path:
        A=5;
        B=A => B=5;
        B=10=> B=A=10;

They are connected in the order they are written.
*/
