/* eslint-disable react/no-unescaped-entities */
import CustomPre from "@/components/custom/CustomPre";
import StudyGuideLayout from "@/components/custom/StudyGuideLayout";
import StudyGuideSection from "@/components/custom/StudyGuideSection";

const InputOutput = () => {
  return (
    <StudyGuideLayout title="Input and Output">
      <div className="space-y-12">
        <StudyGuideSection title="1. Output with print">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              The `print()` function displays output to the console.
            </p>

            <CustomPre>
              print("Hello, World!")
              <br />
              print("My name is", "Alice")
              <br />
              print("Score:", 95)
              <br />
              <br />
              # Formatting output
              <br />
              name = "Bob"
              <br />
              age = 17
              <br />
              print("My name is " + name + " and I am " + str(age) + " years
              old") # Concatenation with +
              <br />
              print("My name is", name, "and I am", age, "years old") #
              Concatenation with commas
              <br />
              print(f"My name is {"{name}"} and I am {"{age}"} years old") #
              f-strings
              <br />
              print("My name is {"{"}
              {"{}"} and I am {"{"}
              {"{}"} years old".format(name, age)) # .format()
            </CustomPre>
          </div>
        </StudyGuideSection>

        <StudyGuideSection title="2. Input with input()">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              The `input()` function gets user input from the console.
            </p>

            <CustomPre>
              # Getting user input
              <br />
              name = input("What is your name? ")
              <br />
              print("Hello,", name)
              <br />
              <br />
              # Converting input to numbers
              <br />
              age = int(input("How old are you? "))
              <br />
              print("Next year you will be", age + 1)
            </CustomPre>

            <p className="text-lg leading-relaxed mt-4">
              Important: input() always returns a string, even if the user types
              numbers. You must convert it using int() or float() if you need to
              do math.
            </p>
          </div>
        </StudyGuideSection>
      </div>
    </StudyGuideLayout>
  );
};

export default InputOutput;
