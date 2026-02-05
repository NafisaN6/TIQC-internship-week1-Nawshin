import unittest
from gpa import calculate_average_gpa


class TestGPA(unittest.TestCase):

    def test_valid_file(self):
        result = calculate_average_gpa("students.csv")
        self.assertIsNotNone(result)

    def test_missing_file(self):
        result = calculate_average_gpa("fakefile.csv")
        self.assertIsNone(result)

    def test_empty_file(self):
        with open("empty.csv", "w") as f:
            pass
        result = calculate_average_gpa("empty.csv")
        self.assertEqual(result, 0)


if __name__ == "__main__":
    unittest.main()
