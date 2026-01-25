/* eslint-disable react/no-unescaped-entities */
import CustomPre from "@/components/custom/CustomPre";
import StudyGuideLayout from "@/components/custom/StudyGuideLayout";
import StudyGuideSection from "@/components/custom/StudyGuideSection";

const ControlFlow = () => {
  return (
    <StudyGuideLayout title="Control Flow">
      <StudyGuideSection title="Control Flow">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            Control flow statements allow you to control the execution of your
            code based on conditions.
          </p>
        </div>
      </StudyGuideSection>

      <StudyGuideSection title="Selection (if Statement)">
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              Basic If Statement
            </h3>
            <CustomPre>
              age = 18
              <br />
              if age &gt;= 18:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;print("You are an adult.")
            </CustomPre>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              If-Else Statement
            </h3>
            <CustomPre>
              age = 16
              <br />
              if age &gt;= 18:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;print("You are an adult.")
              <br />
              else:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;print("You are a minor.")
            </CustomPre>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              If-Elif-Else Statement
            </h3>
            <CustomPre>
              score = 85
              <br />
              if score &gt;= 90:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;print("Grade: A")
              <br />
              elif score &gt;= 80:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;print("Grade: B")
              <br />
              elif score &gt;= 70:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;print("Grade: C")
              <br />
              else:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;print("Grade: F")
            </CustomPre>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              Nested If Statement
            </h3>
            <CustomPre>
              weather = input("Is it raining? (yes/no): ")
              <br />
              temperature = int(input("What's the temperature? "))
              <br />
              <br />
              if weather == "no":
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;if temperature &gt; 20:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Great day
              for a picnic!")
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;else:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("A bit cold,
              but still nice")
              <br />
              else:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;print("Better stay inside")
            </CustomPre>
          </div>
        </div>
      </StudyGuideSection>

      <StudyGuideSection title="Repetition OR Iteration (Loops)">
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">For Loops</h3>
            <p className="text-lg leading-relaxed">
              Use for loops when you know how many times you want to repeat
              something.
            </p>
            <CustomPre>
              # Basic for loop with range
              <br />
              for i in range(5):
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;print(i)
              <br />
              # Output: 0, 1, 2, 3, 4
              <br />
              <br />
              # For loop with start and end
              <br />
              for i in range(1, 6):
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;print(i)
              <br />
              # Output: 1, 2, 3, 4, 5
              <br />
              <br />
              # For loop with step
              <br />
              for i in range(0, 10, 2):
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;print(i)
              <br />
              # Output: 0, 2, 4, 6, 8
              <br />
              <br />
              # For loop with strings
              <br />
              name = "Python"
              <br />
              for letter in name:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;print(letter)
              <br /># Output: P, y, t, h, o, n
            </CustomPre>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">While Loops</h3>
            <p className="text-lg leading-relaxed">
              Use while loops when you want to repeat something until a
              condition changes.
            </p>
            <CustomPre>
              # Basic while loop
              <br />
              count = 0
              <br />
              while count &lt; 5:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;print(count)
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;count += 1
              <br />
              <br />
              # User input validation
              <br />
              password = ""
              <br />
              while password != "secret": # Keep asking until correct
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;password = input("Enter password: ")
              <br />
              print("Access granted!")
              <br />
              <br />
              # Infinite loop prevention
              <br />
              attempts = 0
              <br />
              while password != "secret" and attempts &lt; 3: # Max 3 attempts
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;password = input("Enter password: ")
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;attempts += 1
              <br />
              if attempts &gt;= 3:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;print("Too many attempts!")
            </CustomPre>
          </div>
        </div>
      </StudyGuideSection>

      <StudyGuideSection title="Loop Control Statements">
        <div className="space-y-8">
          <p className="text-lg leading-relaxed">
            Loop control statements change the normal flow of loops.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              Break Statement
            </h3>
            <CustomPre>
              for i in range(10):
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;if i == 5:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break # Exit the
              loop when i is 5
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;print(i)
              <br /># Output: 0, 1, 2, 3, 4
            </CustomPre>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              Continue Statement
            </h3>
            <CustomPre>
              for i in range(10):
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;if i % 2 == 0:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;continue # Skip
              even numbers
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;print(i)
              <br /># Output: 1, 3, 5, 7, 9
            </CustomPre>
          </div>
        </div>
      </StudyGuideSection>
    </StudyGuideLayout>
  );
};

export default ControlFlow;
