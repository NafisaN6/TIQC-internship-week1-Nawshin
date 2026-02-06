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
- Todos stored in todos.json
- Each todo has id, text, completed
- File is created if missing

## Sample Output
Todo added
1. [ ] Buy milk
