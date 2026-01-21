import type { ReactNode } from "react";

export type Chapter = {
  slug: string;
  title: string;
  summary: string;
  sections: { heading: string; content: ReactNode }[];
};

export const CHAPTERS: Chapter[] = [
  {
    slug: "basics-print-comments-indentation",
    title: "Basics: print, comments, indentation",
    summary: "Start writing Python properly (and avoid indentation errors).",
    sections: [
      {
        heading: "print()",
        content: (
          <div className="space-y-4">
            <p>
              Use <code>print()</code> to show output.
            </p>
            <pre className="rounded-lg border p-3 overflow-auto">
              {`print("Hello, World!!!")`}
            </pre>
            <div data-interactive="CodePlayground" />
          </div>
        ),
      },
      {
        heading: "Comments",
        content: (
          <div className="space-y-2">
            <p>Comments are notes for humans. Python ignores them.</p>
            <pre className="rounded-lg border p-3 overflow-auto">
              {`# Single-line comment
"""
Multi-line comment / docstring
"""`}
            </pre>
          </div>
        ),
      },
      {
        heading: "Indentation",
        content: (
          <div className="space-y-2">
            <p>Indentation groups code blocks (very important in Python).</p>
            <pre className="rounded-lg border p-3 overflow-auto">
              {`if 5 > 3:
    print("Inside if")
print("Outside if")`}
            </pre>
          </div>
        ),
      },
    ],
  },

  {
    slug: "variables-and-data-types",
    title: "Variables and Data Types",
    summary: "Store and work with different types of data in Python.",
    sections: [
      {
        heading: "Variables",
        content: (
          <div className="space-y-2">
            <p>
              Variables store values. You don&apos;t need to declare types in
              Python.
            </p>
            <pre className="rounded-lg border p-3 overflow-auto">
              {`name = "Alice"
age = 16
height = 5.6
is_student = True

print(name, age, height, is_student)`}
            </pre>
          </div>
        ),
      },
      {
        heading: "Basic Data Types",
        content: (
          <div className="space-y-4">
            <p>Python has several built-in data types.</p>
            <div data-interactive="VariableBoxVisualizer" />
            <pre className="rounded-lg border p-3 overflow-auto">
              {`# Integers (whole numbers)
age = 16
score = -5

# Floats (decimal numbers)
price = 19.99
temperature = -3.5

# Strings (text)
name = "Alice"
message = 'Hello World'

# Booleans (True or False)
is_active = True
is_valid = False

# Check type
print(type(age))    # <class 'int'>
print(type(price))  # <class 'float'>`}
            </pre>
          </div>
        ),
      },
      {
        heading: "Type Conversion",
        content: (
          <div className="space-y-2">
            <p>Convert between different data types when needed.</p>
            <pre className="rounded-lg border p-3 overflow-auto">
              {`# String to number
age = int("16")
price = float("19.99")

# Number to string
age_text = str(16)

# Integer to float
exact_value = float(10)  # 10.0

print(int(19.99))   # 19 (truncates)
print(float("3.14"))  # 3.14`}
            </pre>
          </div>
        ),
      },
    ],
  },

  {
    slug: "operators",
    title: "Operators: Arithmetic, Comparison, Logical",
    summary: "Perform calculations and make comparisons using operators.",
    sections: [
      {
        heading: "Arithmetic Operators",
        content: (
          <div className="space-y-2">
            <p>Perform mathematical operations.</p>
            <pre className="rounded-lg border p-3 overflow-auto">
              {`# Basic operations
print(10 + 5)   # 15 (addition)
print(10 - 5)   # 5 (subtraction)
print(10 * 5)   # 50 (multiplication)
print(10 / 5)   # 2.0 (division)

# More operations
print(10 // 3)  # 3 (floor division)
print(10 % 3)   # 1 (modulus/remainder)
print(2 ** 3)   # 8 (exponentiation)

# Compound assignments
x = 10
x += 5  # x = x + 5
print(x)  # 15`}
            </pre>
          </div>
        ),
      },
      {
        heading: "Comparison Operators",
        content: (
          <div className="space-y-4">
            <p>Compare values and get True or False results.</p>
            <div data-interactive="ComparisonScale" />
            <pre className="rounded-lg border p-3 overflow-auto">
              {`print(5 == 5)   # True (equal to)
print(5 != 3)   # True (not equal to)
print(5 > 3)    # True (greater than)
print(5 < 3)    # False (less than)
print(5 >= 5)   # True (greater than or equal)
print(5 <= 4)   # False (less than or equal)

# String comparison
print("apple" == "apple")  # True
print("apple" < "banana")  # True (alphabetical)`}
            </pre>
          </div>
        ),
      },
      {
        heading: "Logical Operators",
        content: (
          <div className="space-y-2">
            <p>Combine multiple conditions using and, or, not.</p>
            <pre className="rounded-lg border p-3 overflow-auto">
              {`age = 16
has_license = True

# AND: both must be True
print(age >= 16 and has_license)  # True

# OR: at least one must be True
print(age >= 18 or has_license)   # True

# NOT: reverses the boolean
print(not False)  # True
print(not (age < 16))  # True`}
            </pre>
          </div>
        ),
      },
    ],
  },

  {
    slug: "conditionals-if-elif-else",
    title: "Conditionals: If, Elif, Else",
    summary: "Make decisions in your code based on conditions.",
    sections: [
      {
        heading: "If Statements",
        content: (
          <div className="space-y-2">
            <p>Execute code only when a condition is True.</p>
            <pre className="rounded-lg border p-3 overflow-auto">
              {`age = 16

if age >= 18:
    print("You are an adult")
    print("You can vote")

if age >= 16:
    print("You can drive!")`}
            </pre>
          </div>
        ),
      },
      {
        heading: "If-Else Statements",
        content: (
          <div className="space-y-2">
            <p>Execute different code based on a condition.</p>
            <pre className="rounded-lg border p-3 overflow-auto">
              {`score = 85

if score >= 60:
    print("You passed!")
else:
    print("You need to retake the test")

# Ternary operator (one-line if-else)
result = "Pass" if score >= 60 else "Fail"
print(result)`}
            </pre>
          </div>
        ),
      },
      {
        heading: "If-Elif-Else Statements",
        content: (
          <div className="space-y-4">
            <p>Check multiple conditions in sequence.</p>
            <div data-interactive="IfElseFlowchart" />
            <pre className="rounded-lg border p-3 overflow-auto">
              {`score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Your grade is: {grade}")

# Nested conditions
age = 16
has_license = True

if age >= 16:
    if has_license:
        print("You can drive")
    else:
        print("Get your license first")
else:
    print("Too young to drive")`}
            </pre>
          </div>
        ),
      },
    ],
  },

  {
    slug: "strings-and-string-methods",
    title: "Strings and String Methods",
    summary: "Work with text data using Python's powerful string operations.",
    sections: [
      {
        heading: "String Basics",
        content: (
          <div className="space-y-4">
            <p>Create and manipulate strings in various ways.</p>
            <div data-interactive="StringSlicerTool" />
            <pre className="rounded-lg border p-3 overflow-auto">
              {`# Creating strings
name = "Alice"
message = 'Hello World'
multiline = """This is a
multi-line string"""

# String concatenation
greeting = "Hello, " + name + "!"
print(greeting)  # Hello, Alice!

# String repetition
print("Ha" * 3)  # HaHaHa

# Indexing and slicing
text = "Python"
print(text[0])     # P (first character)
print(text[-1])    # n (last character)
print(text[0:3])   # Pyt (slice)
print(text[2:])    # thon (from index 2 to end)`}
            </pre>
          </div>
        ),
      },
      {
        heading: "String Formatting",
        content: (
          <div className="space-y-2">
            <p>Format strings using f-strings and other methods.</p>
            <pre className="rounded-lg border p-3 overflow-auto">
              {`name = "Alice"
age = 16
score = 95.5

# f-strings (recommended)
print(f"My name is {name}")
print(f"{name} is {age} years old")
print(f"Score: {score:.1f}")  # 95.5 (1 decimal)

# format() method
print("My name is {}".format(name))
print("{} scored {} points".format(name, score))

# % formatting (old style)
print("My name is %s" % name)`}
            </pre>
          </div>
        ),
      },
      {
        heading: "String Methods",
        content: (
          <div className="space-y-2">
            <p>Use built-in methods to manipulate strings.</p>
            <pre className="rounded-lg border p-3 overflow-auto">
              {`text = "  Hello World  "

# Case methods
print(text.upper())      # "  HELLO WORLD  "
print(text.lower())      # "  hello world  "
print(text.title())      # "  Hello World  "

# Whitespace removal
print(text.strip())      # "Hello World"
print(text.lstrip())     # "Hello World  "
print(text.rstrip())     # "  Hello World"

# Search and replace
print(text.replace("World", "Python"))
print(text.find("World"))  # 8 (index position)
print("Hello" in text)     # True

# Split and join
words = "apple,banana,orange".split(",")
print(words)  # ['apple', 'banana', 'orange']
print("-".join(words))  # apple-banana-orange

# Check string properties
print("hello".isalpha())   # True
print("123".isdigit())     # True
print("hello123".isalnum())  # True`}
            </pre>
          </div>
        ),
      },
    ],
  },

  {
    slug: "functions",
    title: "Functions: Reusable Code Blocks",
    summary: "Create reusable code with functions and parameters.",
    sections: [
      {
        heading: "Defining Functions",
        content: (
          <div className="space-y-2">
            <p>Functions group code that performs a specific task.</p>
            <pre className="rounded-lg border p-3 overflow-auto">
              {`def greet():
    print("Hello!")
    print("Welcome to Python")

greet()  # Call the function

# Function with parameters
def greet_person(name):
    print(f"Hello, {name}!")

greet_person("Alice")
greet_person("Bob")`}
            </pre>
          </div>
        ),
      },
      {
        heading: "Return Values",
        content: (
          <div className="space-y-2">
            <p>Functions can return values using the return statement.</p>
            <pre className="rounded-lg border p-3 overflow-auto">
              {`def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # 8

def calculate_grade(score):
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    else:
        return "F"

grade = calculate_grade(85)
print(grade)  # B

# Multiple return values
def get_stats(numbers):
    return min(numbers), max(numbers), sum(numbers)

minimum, maximum, total = get_stats([1, 2, 3, 4, 5])
print(f"Min: {minimum}, Max: {maximum}, Total: {total}")`}
            </pre>
          </div>
        ),
      },
      {
        heading: "Default Parameters and Keyword Arguments",
        content: (
          <div className="space-y-2">
            <p>Use default values and keyword arguments for flexibility.</p>
            <pre className="rounded-lg border p-3 overflow-auto">
              {`# Default parameters
def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet("Alice")              # Hello, Alice!
greet("Bob", "Hi")          # Hi, Bob!

# Keyword arguments
def describe_pet(animal, name, age=1):
    print(f"{name} is a {age}-year-old {animal}")

describe_pet("dog", "Buddy", 3)
describe_pet(name="Whiskers", animal="cat", age=2)
describe_pet(animal="parrot", name="Polly")

# *args and **kwargs
def sum_all(*numbers):
    return sum(numbers)

print(sum_all(1, 2, 3, 4, 5))  # 15

def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=16, grade="A")`}
            </pre>
          </div>
        ),
      },
    ],
  },

  {
    slug: "loops-for",
    title: "For loops (with animation)",
    summary: "Understand iteration, range(), and what changes each loop.",
    sections: [
      {
        heading: "What is a for loop?",
        content: (
          <div className="space-y-2">
            <p>A for loop repeats a block of code a fixed number of times.</p>
            <pre className="rounded-lg border p-3 overflow-auto">
              {`for i in range(5):
    print(i)`}
            </pre>
          </div>
        ),
      },
      {
        heading: "Interactive: watch it iterate",
        content: (
          <div className="space-y-4">
            <div data-interactive="ForLoopVisualizer" />
            <div data-interactive="ForLoopRacetrack" />
          </div>
        ),
      },
    ],
  },

  {
    slug: "loops-while",
    title: "While Loops: Condition-Based Iteration",
    summary: "Repeat code as long as a condition is True.",
    sections: [
      {
        heading: "Basic While Loops",
        content: (
          <div className="space-y-4">
            <p>While loops continue running as long as a condition is True.</p>
            <div data-interactive="WhileLoopVisualizer" />
            <pre className="rounded-lg border p-3 overflow-auto">
              {`count = 0
while count < 5:
    print(count)
    count += 1

# Be careful with infinite loops!
# while True:
#     print("This runs forever!")

# User input loop
password = ""
while password != "secret":
    password = input("Enter password: ")
print("Access granted!")`}
            </pre>
          </div>
        ),
      },
      {
        heading: "Break and Continue",
        content: (
          <div className="space-y-2">
            <p>Control loop execution with break and continue statements.</p>
            <pre className="rounded-lg border p-3 overflow-auto">
              {`# Break: exit the loop
count = 0
while True:
    print(count)
    count += 1
    if count >= 5:
        break  # Exit loop

# Continue: skip to next iteration
count = 0
while count < 10:
    count += 1
    if count % 2 == 0:
        continue  # Skip even numbers
    print(count)  # Only prints odd numbers

# Works with for loops too
for i in range(10):
    if i == 5:
        break  # Stop at 5
    print(i)`}
            </pre>
          </div>
        ),
      },
      {
        heading: "While vs For Loops",
        content: (
          <div className="space-y-2">
            <p>Choose the right loop for your situation.</p>
            <pre className="rounded-lg border p-3 overflow-auto">
              {`# Use FOR when you know iterations in advance
for i in range(10):
    print(i)

for item in ["apple", "banana", "orange"]:
    print(item)

# Use WHILE when condition-based
attempts = 0
success = False
while not success and attempts < 3:
    if try_something():
        success = True
    attempts += 1

# Infinite loop with break (common pattern)
while True:
    command = input("Enter command (q to quit): ")
    if command == "q":
        break
    process_command(command)`}
            </pre>
          </div>
        ),
      },
    ],
  },

  {
    slug: "dictionaries-key-value-pairs",
    title: "Dictionaries: Key-Value Pairs",
    summary: "Store and access data using meaningful labels with dictionaries.",
    sections: [
      {
        heading: "What is a Dictionary?",
        content: (
          <div className="space-y-4">
            <p>
              Dictionaries store data as key-value pairs. Access values using
              keys instead of numbers.
            </p>
            <div data-interactive="DictionaryExplorer" />
            <pre className="rounded-lg border p-3 overflow-auto">
              {`student = {
    "name": "Alice",
    "age": 16,
    "grade": "A"
}
print(student["name"])  # Alice`}
            </pre>
          </div>
        ),
      },
      {
        heading: "Dictionary Methods",
        content: (
          <div className="space-y-2">
            <p>Add, update, and remove key-value pairs.</p>
            <pre className="rounded-lg border p-3 overflow-auto">
              {`student["email"] = "alice@school.com"  # Add new key
student["grade"] = "A+"  # Update existing
del student["email"]  # Remove

for key, value in student.items():
    print(f"{key}: {value}")`}
            </pre>
          </div>
        ),
      },
    ],
  },

  {
    slug: "lists-and-data-structures",
    title: "Lists: Storing Multiple Items",
    summary:
      "Create and manipulate collections of data with lists and indexing.",
    sections: [
      {
        heading: "Creating and Accessing Lists",
        content: (
          <div className="space-y-2">
            <p>
              Lists store multiple items in a single variable. Access items
              using index numbers (starting at 0).
            </p>
            <pre className="rounded-lg border p-3 overflow-auto">
              {`fruits = ["apple", "banana", "orange"]
print(fruits[0])   # apple
print(fruits[-1])  # orange (last item)`}
            </pre>
          </div>
        ),
      },
      {
        heading: "List Methods and Slicing",
        content: (
          <div className="space-y-4">
            <p>Modify lists and extract portions using methods and slicing.</p>
            <div data-interactive="ListAnimator" />
            <pre className="rounded-lg border p-3 overflow-auto">
              {`fruits.append("grape")
fruits.remove("banana")
print(fruits[1:3])  # Items from index 1 to 2

numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(numbers[::2])  # Every 2nd item: [0, 2, 4, 6, 8]`}
            </pre>
          </div>
        ),
      },
    ],
  },

  {
    slug: "tuples-and-sets",
    title: "Tuples and Sets",
    summary: "Work with immutable tuples and unique items in sets.",
    sections: [
      {
        heading: "Tuples: Immutable Collections",
        content: (
          <div className="space-y-2">
            <p>
              Tuples are like lists but cannot be changed. Great for protecting
              data.
            </p>
            <pre className="rounded-lg border p-3 overflow-auto">
              {`coordinates = (10, 20)
print(coordinates[0])  # 10

x, y = coordinates  # Unpacking
print(f"X: {x}, Y: {y}")

# You cannot modify tuples:
# coordinates[0] = 5  # Error!`}
            </pre>
          </div>
        ),
      },
      {
        heading: "Sets: Unique Items",
        content: (
          <div className="space-y-2">
            <p>
              Sets automatically remove duplicates and are perfect for
              membership testing.
            </p>
            <pre className="rounded-lg border p-3 overflow-auto">
              {`fruits = {"apple", "banana", "orange"}
fruits.add("grape")

set1 = {1, 2, 3}
set2 = {3, 4, 5}
print(set1 & set2)   # {3} - Intersection
print(set1 | set2)   # {1, 2, 3, 4, 5} - Union`}
            </pre>
          </div>
        ),
      },
    ],
  },

  {
    slug: "exception-handling",
    title: "Exception Handling: Graceful Error Management",
    summary: "Handle errors gracefully instead of letting your program crash.",
    sections: [
      {
        heading: "Try-Except Blocks",
        content: (
          <div className="space-y-2">
            <p>Catch and handle errors to make your program more robust.</p>
            <pre className="rounded-lg border p-3 overflow-auto">
              {`try:
    number = int(input("Enter a number: "))
    print(10 / number)
except ValueError:
    print("Please enter a valid number!")
except ZeroDivisionError:
    print("Cannot divide by zero!")`}
            </pre>
          </div>
        ),
      },
      {
        heading: "Try-Except-Finally",
        content: (
          <div className="space-y-2">
            <p>
              Use <code>finally</code> for cleanup operations that always run.
            </p>
            <pre className="rounded-lg border p-3 overflow-auto">
              {`try:
    file = open("data.txt", "r")
    content = file.read()
except FileNotFoundError:
    print("File not found!")
finally:
    print("Cleanup completed")`}
            </pre>
          </div>
        ),
      },
    ],
  },

  {
    slug: "list-comprehensions",
    title: "List Comprehensions: Creating Lists Elegantly",
    summary: "Write concise and readable list creation with comprehensions.",
    sections: [
      {
        heading: "Basic Comprehensions",
        content: (
          <div className="space-y-2">
            <p>Create lists in a concise way using comprehension syntax.</p>
            <pre className="rounded-lg border p-3 overflow-auto">
              {`squares = [x**2 for x in range(10)]
print(squares)
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

even = [x for x in range(20) if x % 2 == 0]
print(even)  # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]`}
            </pre>
          </div>
        ),
      },
      {
        heading: "Dictionary and Set Comprehensions",
        content: (
          <div className="space-y-2">
            <p>Create dictionaries and sets with comprehension syntax.</p>
            <pre className="rounded-lg border p-3 overflow-auto">
              {`squares_dict = {x: x**2 for x in range(5)}
print(squares_dict)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

unique_lengths = {len(word) for word in ["hi", "hello", "python"]}
print(unique_lengths)  # {2, 5, 6}`}
            </pre>
          </div>
        ),
      },
    ],
  },

  {
    slug: "modules-and-imports",
    title: "Modules and Imports",
    summary: "Extend Python's functionality with built-in modules.",
    sections: [
      {
        heading: "Importing Modules",
        content: (
          <div className="space-y-2">
            <p>Use modules to access pre-written code and functionality.</p>
            <pre className="rounded-lg border p-3 overflow-auto">
              {`import math
print(math.sqrt(16))  # 4.0
print(math.pi)        # 3.14159...

from math import sqrt, pi
print(sqrt(25))  # 5.0`}
            </pre>
          </div>
        ),
      },
      {
        heading: "Useful Standard Modules",
        content: (
          <div className="space-y-2">
            <p>Python has many built-in modules for common tasks.</p>
            <pre className="rounded-lg border p-3 overflow-auto">
              {`import random
print(random.randint(1, 10))

from datetime import datetime
now = datetime.now()
print(now)

from collections import Counter
items = [1, 1, 2, 2, 2, 3, 3, 3, 3]
counts = Counter(items)  # {3: 4, 2: 3, 1: 2}`}
            </pre>
          </div>
        ),
      },
    ],
  },

  {
    slug: "classes-and-objects",
    title: "Classes and Objects (OOP)",
    summary: "Organize code using object-oriented programming concepts.",
    sections: [
      {
        heading: "Creating Classes",
        content: (
          <div className="space-y-2">
            <p>Classes group related data and functions together.</p>
            <pre className="rounded-lg border p-3 overflow-auto">
              {`class Student:
    def __init__(self, name, age, grade):
        self.name = name
        self.age = age
        self.grade = grade

    def study(self, subject):
        print(f"{self.name} is studying {subject}")

student1 = Student("Alice", 16, "A")
student1.study("Python")`}
            </pre>
          </div>
        ),
      },
      {
        heading: "Inheritance",
        content: (
          <div className="space-y-2">
            <p>
              Create new classes based on existing ones to avoid code
              duplication.
            </p>
            <pre className="rounded-lg border p-3 overflow-auto">
              {`class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

class Teacher(Person):
    def __init__(self, name, age, subject):
        super().__init__(name, age)
        self.subject = subject

teacher = Teacher("Mr. Smith", 40, "Math")
print(teacher.name)  # Mr. Smith`}
            </pre>
          </div>
        ),
      },
    ],
  },

  {
    slug: "built-in-functions",
    title: "Built-in Functions and Utilities",
    summary: "Master Python's most useful built-in functions.",
    sections: [
      {
        heading: "Essential Built-in Functions",
        content: (
          <div className="space-y-2">
            <p>These functions are always available and incredibly useful.</p>
            <pre className="rounded-lg border p-3 overflow-auto">
              {`print(len([1, 2, 3]))        # 3
print(type(42))              # <class 'int'>
print(sum([1, 2, 3, 4]))    # 10
print(min([5, 2, 8, 1]))    # 1
print(max([5, 2, 8, 1]))    # 8
print(sorted([3, 1, 4, 1, 5]))  # [1, 1, 3, 4, 5]`}
            </pre>
          </div>
        ),
      },
      {
        heading: "Iteration Helpers",
        content: (
          <div className="space-y-2">
            <p>
              Use these functions to work with collections more effectively.
            </p>
            <pre className="rounded-lg border p-3 overflow-auto">
              {`fruits = ["apple", "banana", "orange"]
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")

names = ["Alice", "Bob"]
ages = [16, 15]
for name, age in zip(names, ages):
    print(f"{name} is {age}")

print(any([False, False, True]))  # True
print(all([True, True, True]))    # True`}
            </pre>
          </div>
        ),
      },
    ],
  },

  {
    slug: "best-practices-coding-style",
    title: "Best Practices and Coding Style",
    summary:
      "Write professional, clean Python code that others can understand.",
    sections: [
      {
        heading: "PEP 8 Naming Conventions",
        content: (
          <div className="space-y-2">
            <p>
              Follow Python&apos;s style guide for readable and professional
              code.
            </p>
            <pre className="rounded-lg border p-3 overflow-auto">
              {`# ✅ Good: descriptive names, snake_case
student_name = "Alice"
total_score = 95
is_enrolled = True

def calculate_average(scores):
    return sum(scores) / len(scores)

# ❌ Bad: unclear names
x = "Alice"
s = 95
e = True`}
            </pre>
          </div>
        ),
      },
      {
        heading: "Common Mistakes to Avoid",
        content: (
          <div className="space-y-2">
            <p>Learn from common errors to write better code.</p>
            <pre className="rounded-lg border p-3 overflow-auto">
              {`# ❌ Wrong: == vs is
if x is 5:  # Don't use 'is' for values
    pass

# ✅ Right:
if x == 5:
    pass

# ❌ Wrong: forgetting colon
if x > 5
    print(x)

# ✅ Right:
if x > 5:
    print(x)`}
            </pre>
          </div>
        ),
      },
    ],
  },
];
