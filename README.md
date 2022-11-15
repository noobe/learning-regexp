# learning-regexp
A project to familiarize regexp using JS

Regex is basically a tool to find patterns within a string. The main usecase being:
- Validate user provided input
- Search through text

RegExp patterns are not limited to any particular programming langauge.

## Regexp in Javascript:

Javascript provides native String methods to work with RegExp patterns:
- `'anystring'.match(regex)`
- `'anystring'.search(regex)`
- `'anystring'.replace(regex)`
Once we create a RegExp object, we can pass it as `regex` in the above methods

Creating a RegExp in JS:
- Literal syntax: a regex matcher object can be created by simply writing the match criteria in between 2 forward slashes, eg: `/The/`
```js
const regex = /The/
```
- RegExp constructor: a regex matcher object can also be created using the RegExp constuctor in JS
```js
const regex = new RegExp(pattern [, flags])
```
Once created, the `regex` object can be passed to the `match`, `search` and/or `replace` methods

## Project Overview:
01. Simple Regex using Javascript
02. Flags in Regex
03. Special Characters in RegExp