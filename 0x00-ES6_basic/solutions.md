# 1. Block Scope
## Explanation of the Code

The provided code defines a function named `taskBlock` that takes a single parameter `trueOrFalse`. Within the function:

- Two constants `task` and `task2` are declared and initialized with boolean values: `false` and `true` respectively.
- Inside the conditional block (`if` statement), another set of constants with the same names (`task` and `task2`) are declared using the `const` keyword and initialized with different boolean values: `true` and `false` respectively. These constants are declared within the scope of the conditional block.

After the conditional block, the function returns an array containing the values of `task` and `task2`.

## Output Explanation

When the function `taskBlock` is called with the argument `true`, the conditional block is executed. Inside this block, new constants `task` and `task2` are declared and initialized with `true` and `false` respectively. However, these constants are scoped only within the block and do not affect the outer scope variables.

Therefore, when `console.log(taskBlock(true));` is executed:

- The function returns `[false, true]`, as the outer scope variables `task` and `task2` remain unchanged (`false` and `true` respectively).

When the function `taskBlock` is called with the argument `false`, the conditional block is not executed. Therefore, the outer scope variables `task` and `task2` remain unchanged.

Hence, `console.log(taskBlock(false));` also returns `[false, true]`.

