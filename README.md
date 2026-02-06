# Todo CLI

## Description
A command line todo app that lets users add, list, and complete todos.
Todos are stored in a local JSON file.

## How to Run

Add todo:
node todo.js add "Buy milk"

List todos:
node todo.js list

Complete todo:
node todo.js complete 1

Run tests:
node test_todo.js

## Assumptions
- Todos are stored in todos.json
- Each todo has an id, text, and is completed
- A file is created if missing

## Sample Output
Todo added
1. [ ] Buy milk

## AI PROMPT USED:

Create a simple Node.js CLI todo app that can add, list, and complete todos using a JSON file.


## REFLECTION:

The first version did not handle missing files. I learned what a todo was, and how to check for it in the terminal of github codespaces. I am still a little confused though, on how it works, and why I can only really acess it within the github terminal. 
