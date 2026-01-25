/* eslint-disable react/no-unescaped-entities */
import CustomPre from "@/components/custom/CustomPre";
import StudyGuideLayout from "@/components/custom/StudyGuideLayout";
import StudyGuideSection from "@/components/custom/StudyGuideSection";
import CustomNote from "@/components/custom/CustomNote";

const BuiltInFunctions = () => {
  return (
    <StudyGuideLayout title="Built-in Functions">
      <StudyGuideSection title="Useful Built-in Functions">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            Python comes with many built-in functions that make programming
            easier.
          </p>

          <CustomPre>
            # len() - get length of collections
            <br />
            text = "Hello World"
            <br />
            numbers = [1, 2, 3, 4, 5]
            <br />
            print(len(text)) # 11
            <br />
            print(len(numbers)) # 5
            <br />
            <br />
            # range() - generate sequences of numbers
            <br />
            for i in range(5): # 0, 1, 2, 3, 4
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;print(i)
            <br />
            <br />
            for i in range(2, 8): # 2, 3, 4, 5, 6, 7
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;print(i)
            <br />
            <br />
            for i in range(0, 10, 2): # 0, 2, 4, 6, 8
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;print(i)
            <br />
            <br />
            # sum() - add up numbers
            <br />
            scores = [85, 92, 78, 95, 88]
            <br />
            total = sum(scores) # 438
            <br />
            average = sum(scores) / len(scores) # 87.6
            <br />
            <br />
            # min() and max() - find smallest and largest
            <br />
            temps = [22, 28, 19, 31, 25]
            <br />
            lowest = min(temps) # 19
            <br />
            highest = max(temps) # 31
            <br />
            <br />
            # sorted() - sort collections
            <br />
            names = ["Charlie", "Alice", "Bob"]
            <br />
            print(sorted(names)) # ['Alice', 'Bob', 'Charlie']
            <br />
            print(sorted(temps)) # [19, 22, 25, 28, 31]
            <br />
            <br />
            # reversed() - reverse order
            <br />
            numbers = [1, 2, 3, 4, 5]
            <br />
            print(list(reversed(numbers))) # [5, 4, 3, 2, 1]
          </CustomPre>
        </div>
      </StudyGuideSection>

      <StudyGuideSection title="Type Checking Functions">
        <div className="space-y-6">
          <CustomPre>
            # type() - check data type
            <br />
            print(type(42)) # &lt;class 'int'&gt;
            <br />
            print(type("hello")) # &lt;class 'str'&gt;
            <br />
            print(type([1, 2, 3])) # &lt;class 'list'&gt;
            <br />
            <br />
            # isinstance() - check if object is specific type
            <br />
            age = 25
            <br />
            print(isinstance(age, int)) # True
            <br />
            print(isinstance(age, str)) # False
            <br />
            <br />
            # Useful for validation
            <br />
            def process_age(age):
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;if isinstance(age, int) and age &gt; 0:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(f"Processing
            age: {"{age}"}")
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;else:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Invalid age")
          </CustomPre>
        </div>
      </StudyGuideSection>

      <StudyGuideSection title="String and Input Functions">
        <div className="space-y-6">
          <CustomPre>
            # input() - get user input
            <br />
            name = input("What's your name? ")
            <br />
            age = int(input("How old are you? ")) # Convert to int
            <br />
            <br />
            # print() - display output
            <br />
            print("Hello", name)
            <br />
            print("You are", age, "years old")
            <br />
            print("Name:", name, "Age:", age, sep=" | ") # Custom separator
            <br />
            <br />
            # abs() - absolute value
            <br />
            print(abs(-15)) # 15
            <br />
            print(abs(42)) # 42
            <br />
            <br />
            # round() - round numbers
            <br />
            price = 19.99
            <br />
            print(round(price)) # 20
            <br />
            print(round(price, 1)) # 20.0 (1 decimal place)
            <br />
            <br />
            # all() and any() - check conditions
            <br />
            grades = [85, 92, 78, 95]
            <br />
            print(all(g &gt;= 70 for g in grades)) # True (all passed)
            <br />
            print(any(g &gt;= 90 for g in grades)) # True (some got A)
          </CustomPre>

          <div className="space-y-3 mt-6">
            <CustomNote
              variant="success"
              title="🏆"
              description="Built-in functions are optimized and fast - use them!"
            />
            <CustomNote
              variant="info"
              title="💡"
              description="Combine functions: max(len(word) for word in words)"
            />
            <CustomNote
              variant="tip"
              title="💻"
              description="Use help(function_name) to learn about any function"
            />
          </div>
        </div>
      </StudyGuideSection>
    </StudyGuideLayout>
  );
};

export default BuiltInFunctions;
