import csv

def calculate_average_gpa(filename):
    total = 0
    count = 0

    try:
        with open(filename, newline='') as file:
            reader = csv.reader(file)

            for row in reader:
                try:
                    # Assume GPA is last column
                    gpa = float(row[-1])
                    total += gpa
                    count += 1
                except:
                    # Skip invalid rows
                    continue

        if count == 0:
            return 0

        return round(total / count, 2)

    except FileNotFoundError:
        print("File not found.")
        return None


if __name__ == "__main__":
    avg = calculate_average_gpa("students.csv")
    if avg is not None:
        print(f"Average GPA: {avg}")
