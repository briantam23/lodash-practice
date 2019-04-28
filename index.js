const _ = require('lodash');


/* let word = 'alphabet';

console.log(_.capitalize(word)); */

/* let arr1 = [4, 2, 3, 8];
let arr2 = [0, 2];

console.log(_.intersection(arr1, arr2)); */


/* const students = [
    { name: 'Brian', class: 4, grade: 95 },
    { name: 'Mike', class: 3, grade: 94 },
    { name: 'Johnny', class: 4, grade: 96 }
]

console.log(_.findIndex(students, { class: 4, grade: 96 })); */


/* const foo = { a: "a property" };
const bar = { b: 4, c: "another property" }

console.log(_.assign({ a: 'an old property'}, foo, bar)); */


/* const getRandomInteger = () => Math.round(Math.random() * 100);

console.log(_.times(5, getRandomInteger)); */


/* const users = [
    { firstName: "John", lastName: "Doe", age: 28, gender: "male" },
    { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
    { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
    { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" }
];

console.log(_.find(users, { lastName: 'Doe', age: 5 }));
console.log(_.find(users, user => user.age < 41)); */


/* const bar = { foo: { key: "foo" } };

console.log(_.set(bar, 'foo.items[0]', 'An Item'));
console.log(_.get(bar, 'name'));
console.log(_.get(bar, 'name', 'Brian')); */


/* console.log(_.deburr("déjà vu")); // -> deja vu
console.log(_.deburr("Juan José")); // -> Juan Jose */


/* let posts = [
    { id: "1abc", title: "First blog post", content: "..." },
    { id: "2abc", title: "Second blog post", content: "..." },
    // more blog posts
    { id: "34abc", title: "The blog post we want", content: "..." }
    // even more blog posts
];
posts = _.keyBy(posts, 'id');

console.log(posts['34abc']); */


/* const users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 28 },
    { name: "Bill", age: 65 },
    { name: "Emily", age: 17 },
    { name: "Jack", age: 30 }
]

const reducedUsers = _.reduce(users, (result, user) => {
    if(user.age >= 18 && user.age <= 59) {
        (result[user.age] || (result[user.age] = [])).push(user);
    }
    return result;
}, {});

console.log(reducedUsers); */


/* var original = { foo: "bar" };
var copy = original;
copy.foo = "new value";

console.log(copy, original);
// copy -> { foo: "new value" } Yeah!
// original -> { foo: "new value" } Oops!

var original = { foo: "bar" };
var copy = _.cloneDeep(original);
copy.foo = "new value";

console.log(copy, original);
// copy -> { foo: "new value" } Yeah!
// original -> { foo: "bar" } Yeah! */


/* const sortedArray = [1, 1, 2, 3, 3, 3, 5, 8, 8];

console.log(_.sortedUniq(sortedArray)); */


/* for(var i = 0; i < 5; i++) {
    // ....
}

_.times(5, () => console.log('foo')) */


// Fetch the name of the first pet from each owner
const ownerArr = [{
    "owner": "Colin",
    "pets": [{"name":"dog1"}, {"name": "dog2"}]
}, {
    "owner": "John",
    "pets": [{"name":"dog3"}, {"name": "dog4"}]
}];

// Array's map method.
console.log(ownerArr.map(owner => owner.pets[0].name));

// Lodash
console.log(_.map(ownerArr, 'pets[0].name'));