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
          <div className="space-y-2">
            <p>
              Use <code>print()</code> to show output.
            </p>
            <pre className="rounded-lg border p-3 overflow-auto">
              {`print("Hello, World!")`}
            </pre>
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
        content: <div data-interactive="ForLoopVisualizer" />,
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
          <div className="space-y-2">
            <p>
              Dictionaries store data as key-value pairs. Access values using
              keys instead of numbers.
            </p>
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
          <div className="space-y-2">
            <p>Modify lists and extract portions using methods and slicing.</p>
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
