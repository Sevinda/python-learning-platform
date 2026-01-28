/* eslint-disable react/no-unescaped-entities */
import CustomPre from "@/components/custom/CustomPre";
import StudyGuideLayout from "@/components/custom/StudyGuideLayout";
import StudyGuideSection from "@/components/custom/StudyGuideSection";

const FunctionsProcedures = () => {
  return (
    <StudyGuideLayout title="Functions and Procedures">
      <div className="space-y-12">
        <StudyGuideSection title="Functions and Procedures">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Functions are reusable blocks of code that perform a specific
              task. They help organize code and make it more modular.
            </p>
            <p className="text-lg leading-relaxed">
              Difference between Functions and Procedures:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4">
              <li>
                <strong>Function:</strong> Returns a value after execution.
              </li>
              <li>
                <strong>Procedure:</strong> Performs an action but does not
                return a value.
              </li>
            </ul>
          </div>
        </StudyGuideSection>
        <StudyGuideSection title="Defining Functions">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Use the `def` keyword to define a function.
            </p>
            <CustomPre>
              def greet():
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;print("Hello, World!") # Function
              definition
              <br />
              <br />
              greet() # Function call
            </CustomPre>
          </div>
        </StudyGuideSection>
        <StudyGuideSection title="Function Parameters">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Functions can take inputs called parameters.
            </p>
            <CustomPre>
              def greet(name): # Function with a parameter
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;print(f"Hello, {"{name}"}!")
              <br />
              <br />
              greet("Alice") # Function call with an argument
            </CustomPre>
          </div>
        </StudyGuideSection>
        <StudyGuideSection title="Return Values">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Functions can return values using the `return` statement.
            </p>
            <CustomPre>
              def add(a, b): # Function with parameters
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return a + b # Return the sum of a and b
              <br />
              <br />
              result = add(5, 3) # Function call with arguments
              <br />
              print(result) # Output: 8
            </CustomPre>
          </div>
        </StudyGuideSection>
        <StudyGuideSection title="Default Parameters">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              You can provide default values for parameters.
            </p>
            <CustomPre>
              def greet(name="Guest"): # Default parameter
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;print(f"Hello, {"{name}"}!")
              <br />
              <br />
              greet() # Uses default value
              <br />
              greet("Bob") # Overrides default value
            </CustomPre>
          </div>
        </StudyGuideSection>
        <StudyGuideSection title="Local vs Global Variables">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Variables defined inside a function are local to that function.
              Variables defined outside are global.
            </p>
            <CustomPre>
              x = 10 # Global variable
              <br />
              def my_function():
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;y = 5 # Local variable
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;print(x) # Accessing global variable
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;print(y) # Accessing local variable
              <br />
              <br />
              my_function()
              <br />
              print(x) # Accessing global variable
              <br /># print(y) # Error! y is not defined outside the function
            </CustomPre>
          </div>
        </StudyGuideSection>
      </div>
    </StudyGuideLayout>
  );
};

export default FunctionsProcedures;
