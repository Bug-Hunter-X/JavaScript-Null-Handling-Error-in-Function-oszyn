# JavaScript Null Handling Bug
This repository demonstrates a common error in JavaScript related to handling null values. The `foo` function attempts to add two numbers but doesn't correctly handle cases where one or both inputs are null.  This can lead to unexpected behavior, especially if subsequent code relies on the result.

## Bug Description:
The `bug.js` file contains a function that returns null if either of its input arguments is null. This isn't robust error handling because it doesn't explicitly check for type.  If the function is called with one null and one number, it returns null, which may not always be desirable.

## Solution:
The `bugSolution.js` file provides a corrected version of the function. This improved version explicitly checks the type of both arguments and throws an error if either is not a number or if both are null. It also includes handling for the case where exactly one argument is null, returning the value of the other argument.