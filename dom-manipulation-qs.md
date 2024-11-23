Here are some coding questions with solutions to assess TypeScript skills for a junior developer role. These questions cover basic to intermediate concepts of TypeScript.

---

### **1. Basic TypeScript Syntax**

#### **Question:**
Write a function in TypeScript to add two numbers. Ensure the arguments are strictly numbers, and the return type is also a number.

#### **Solution:**
```typescript
function addNumbers(a: number, b: number): number {
    return a + b;
}
```

---

### **2. Interfaces**

#### **Question:**
Define an interface `User` with `id` (number), `name` (string), and `email` (optional string). Write a function that takes a `User` object and returns a greeting message.

#### **Solution:**
```typescript
interface User {
    id: number;
    name: string;
    email?: string;
}

function greetUser(user: User): string {
    return `Hello, ${user.name}! Your ID is ${user.id}.`;
}
```

---

### **3. Generics**

#### **Question:**
Write a generic function `getFirstElement` that returns the first element of an array. Ensure the function works for any data type.

#### **Solution:**
```typescript
function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}
```

---

### **4. Enum Usage**

#### **Question:**
Create an `enum` for days of the week and write a function that takes a day and returns whether it’s a weekday or weekend.

#### **Solution:**
```typescript
enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function isWeekend(day: Day): boolean {
    return day === Day.Saturday || day === Day.Sunday;
}
```

---

### **5. Class Implementation**

#### **Question:**
Write a `Person` class with properties `name` (string) and `age` (number). Add a method `greet` that returns a greeting message.

#### **Solution:**
```typescript
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
```

---

### **6. Union Types**

#### **Question:**
Write a function `formatInput` that takes a parameter which can be either a string or a number. If it’s a string, return it in uppercase. If it’s a number, return its square.

#### **Solution:**
```typescript
function formatInput(input: string | number): string | number {
    if (typeof input === "string") {
        return input.toUpperCase();
    } else {
        return input * input;
    }
}
```

---

### **7. Handling Nullable Types**

#### **Question:**
Write a function `printValue` that takes an argument of type `string | null`. If it’s `null`, print "No value". Otherwise, print the string.

#### **Solution:**
```typescript
function printValue(value: string | null): void {
    if (value === null) {
        console.log("No value");
    } else {
        console.log(value);
    }
}
```

---

### **8. Tuples**

#### **Question:**
Create a tuple type `UserInfo` that has a string for name and a number for age. Write a function that accepts this tuple and returns a formatted string.

#### **Solution:**
```typescript
type UserInfo = [string, number];

function formatUserInfo(userInfo: UserInfo): string {
    const [name, age] = userInfo;
    return `Name: ${name}, Age: ${age}`;
}
```

---

### **9. Type Assertions**

#### **Question:**
Write a function that accepts a parameter of type `any`, and asserts it as a string to return its length.

#### **Solution:**
```typescript
function getStringLength(input: any): number {
    return (input as string).length;
}
```

---

### **10. Error Handling**

#### **Question:**
Write a function `divide` that takes two numbers. If the divisor is zero, throw an error. Otherwise, return the result.

#### **Solution:**
```typescript
function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}
```

---

These questions should help you gauge the candidate's understanding of TypeScript basics, type safety, OOP principles, and error handling.