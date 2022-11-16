# Flags
Flags or modifiers are characters that enable certain advanced search features including global search and case-insensitive search. They can be used individually or collectively.

Some commonly used ones are:
- g: global search -> search will not return after first match, but continue till end of string.
- i: case-insensitive search
- m: multi line search
- u: unicode search

## g: Global search
```js
const regex1 = /the/g;
str = 'Please get The apple, the ball and the bat';

console.log(str.match(regex1));
console.log(str.search(regex1));
console.log(str.replace(regex1, "TEST"));
```
gives:
```js
[ 'the', 'the' ]
22
Please get The apple, TEST ball and TEST bat
```
Here the string contain 2 occurance of the word 'the' and setting the flag g results in finding/replacing both the occurances. Search returns the index of the 1st occurance of the word.

## i: Case Insensitive flag

```js
const regex2 = /the/i;
str = 'Please get The apple, the ball and the bat';

console.log(str.match(regex2));
console.log(str.search(regex2));
console.log(str.replace(regex2, "TEST"));
```
gives:
```js
[
  'The',
  index: 11,
  input: 'Please get The apple, the ball and the bat',
  groups: undefined
]
11
Please get TEST apple, the ball and the bat
```
Here, the flag i makes the search case-insensitive, hence it picks up the 1st occurance '`T`he' despite it being capital `T`