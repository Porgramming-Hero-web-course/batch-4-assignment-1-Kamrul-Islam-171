## The significance of union and intersection types in Typescript.

# Union Type : 

We can define a variable or parameter in TypeScript that can hold data of different types by using union types. represented by the symbol "|".

1. Only methods and attributes that are present on all of its constituent types can be used by a variable of union type. TypeScript will generate a compile-time error if it attempts to access a property that is not present on one of them.

2. We can use the typeof operator or other custom logic to do conditional checks at runtime to find out what type a union variable presently contains.

Example : 

    let userInfo: string | number;
    userInfo = 'Kamal'; 
    userInfo = 123; 

Here userInfo can only accept any string type or number type data.



# Intersection Type : 


Intersection types in TypeScript combine multiple types into a single type and creates new types that has the characteristics of each merged type.

1. An intersection type combines the structure of two or more types into a single type. Any variables declared with an intersection type must satisfy all of the constraints imposed by each individual type.

2. Intersection types are commonly used to define objects that need to implement multiple interfaces or extend multiple classes.

3. Complex data structures that may contain values from several sources of different kinds can also be represented by combining intersection types with union types.


Example : 
        type Person = {
            name: string;
            age: number;
        };

        type Student = {
            id: string;
            email: string;
        };

        type StudentPerson = Person & Student;

        const student1: StudentPerson = {
            name: "Kamrul",
            age: 24,
            id: "1126374",
            email: "kamrul@gmail.com",
        };



In this example, we define Person and Student types and then create an StudentPerson type by intersecting them. The resulting StudentPerson type holds all properties from both Person and Student types.        
