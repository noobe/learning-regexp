# Using RegEx in JS

Here we start by creating a regex object using the literal syntax. The object constians only the string `the` and we also have a string `str` that contains a sample string to test the regex against.

```js
const regex = /the/;
const str = "the apple and the ball";
```

## exec()
```js
console.log(regex.exec(str));
```
gives:
```js
[ 'the', index: 0, input: 'the apple and the ball', groups: undefined ]
```
## test()
```js
console.log(regex.test(str));
```
gives:
```js
true
```
## match()
```js
console.log(str.match(regex));
```
gives:
```js
[ 'the', index: 0, input: 'the apple and the ball', groups: undefined ]
```
## match()
```js
```
## search()
```js
console.log(str.search(regex));
```
gives:
```js
0
```
## replace()
```js
console.log(str.replace(regex, "TEST"));
```
gives:
```js
TEST apple and the ball
```