# lotide
# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @obaidadil/lotide`

**Require it:**

`const _ = require('@obaidadil/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

assertEqual => (actual, expected) => This will tell you the comparisons between strings true/false 
head => (array) => will give the first element in the array
tail => (array) => it will take off the first element and return the rest 
eqArrays => (arr1, arr2) => returns a true/false showing if both arrays are equal in value
assertArraysEqual => (arr1, arr2) => prints an assertion message due to comparning 2 arrays
without => (arr1, arr2) => arr2 is an array of values to be removed from arr1. without() shows the updated new array
flatten => (array) => outputs a single array of elements from n-dimensional arrays
middle => (array) => will return the mid element of the input array
countOnly => (array, object) => returns an object containing counts of everything that the input object listed
map => (array, callback) => will get a new array thanks to the callback function. Callback will take the original element, process it and then return it
countLetters => (string) => returns a count of each of the letters in that sentence
letterPositions => (string) => returns zero-based positions in the string \
findKeyByValue => (object, value) => Gives the the first key which contains the given value after scanning them 
eqObjects => (object1, object2) => compares primitive, array and objects. Returns true if both objects are equal; otherwise, returns false. This is a recursive function
assertObjectsEqual => (object1, object2) => compares two objects and returns an assertion message
takeUntil => (array, callback) => returns a slice of the array with elements taken from the beginning until the callback returns a truthy value
findKey => (object, callback) => scans the object and returns the first key for which the callback returns a truthy value
