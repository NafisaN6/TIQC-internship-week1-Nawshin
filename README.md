# CSV GPA Calculator

## Description
This program reads a CSV file of students and calculates the average GPA rounded to two decimals.  
Invalid or malformed rows are skipped.

---

## How to Run

Run the program:

Run tests:

---

## Assumptions

- GPA is the last column in each row
- Invalid rows are skipped
- If file is empty, average GPA = 0
- If file is missing, program prints error

---

## Sample Output

Average GPA: 3.5

## AI PROMPT USED:

Create a Python script that reads a students.csv file and calculates the average GPA.
Skip invalid rows and round to two decimals.


REFLECTION:

The first version crashed when the file was missing. I updated it to handle FileNotFoundError.
I also added logic to skip invalid GPA rows and return 0 if there are no valid rows.
