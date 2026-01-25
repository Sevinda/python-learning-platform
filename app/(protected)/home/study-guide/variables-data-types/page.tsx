/* eslint-disable react/no-unescaped-entities */
import CustomPre from "@/components/custom/CustomPre";
import StudyGuideLayout from "@/components/custom/StudyGuideLayout";
import StudyGuideSection from "@/components/custom/StudyGuideSection";
import CustomNote from "@/components/custom/CustomNote";

const VariablesDataTypes = () => {
  return (
    <StudyGuideLayout title="Variables & Data Types">
      <div className="space-y-12">
        <StudyGuideSection title="Variables">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Variables are like labeled boxes that store information. In
              Python, you can create a variable by simply assigning a value to a
              name using the equals sign (=).
            </p>
            <CustomPre>
              # Creating variables in Python
              <br />
              name = "Alice" # A string variable
              <br />
              age = 30 # An integer variable
              <br />
              height = 5.7 # A float variable
              <br />
              is_student = False # A boolean variable
            </CustomPre>

            <p className="text-lg leading-relaxed">
              You can use these variables later in your code to access or modify
              the stored values.
            </p>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">
                Naming Rules for Variables
              </h4>
              <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
                <li>
                  Variable names must start with a letter (a-z, A-Z) or an
                  underscore (_). <strong>(CANNOT START WITH A NUMBER)</strong>
                </li>
                <li>
                  They can contain letters, digits (0-9), and underscores.
                </li>
                <li>
                  Variable names are case-sensitive (e.g., age and Age are
                  different).
                </li>
                <li>
                  Avoid using Python reserved keywords as variable names (e.g.,
                  if, else, while).
                </li>
              </ul>
            </div>
            <CustomPre>
              # Good variable names <br />
              user_name = "Bob" <br />
              total_score = 95 <br />
              is_active = True
              <br />
              <br />
              # Bad variable names <br />
              1st_place = "Alice" # Invalid: starts with a number <br />
              user-name = "Charlie" # Invalid: contains a hyphen
              <br />
              class = "Math" # Invalid: 'class' is a reserved keyword
            </CustomPre>
          </div>
        </StudyGuideSection>

        <StudyGuideSection title="Data Types">
          <div className="space-y-10">
            <p className="text-lg leading-relaxed">
              Python has several built-in data types to store different kinds of
              information. Let's explore the most common ones!
            </p>

            {/* Numbers Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                1. Numbers 🔢
              </h3>
              <p className="text-lg leading-relaxed">
                Python handles two main types of numbers:
              </p>
              <CustomPre>
                # Integers (whole numbers)
                <br />
                students_in_class = 25
                <br />
                floors_in_building = -2
                <br />
                <br />
                # Floats (decimal numbers)
                <br />
                pizza_price = 12.99
                <br />
                room_temperature = 22.5
                <br />
                golden_ratio = 1.618
              </CustomPre>
              <CustomNote
                variant="success"
                title="✅ Number Best Practices:"
                description="Use integers for counting, floats for measurements"
              />
            </div>

            {/* Strings Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                2. Strings 📝
              </h3>
              <p className="text-lg leading-relaxed">
                Strings store text data - from single characters to entire
                paragraphs!
              </p>
              <CustomPre>
                # Different ways to create strings
                <br />
                student_name = "Emma Watson" # Double quotes - most common
                <br />
                greeting_message = 'Welcome back!' # Single quotes - for simple
                text
                <br />
                course_description = """Python Programming Fundamentals:
                <br />
                A comprehensive guide to learning Python
                <br />
                from basics to advanced concepts.""" # Triple quotes - for
                multi-line text
                <br />
                <br />
                # String operations that make text manipulation easy
                <br />
                first_name = "John"
                <br />
                last_name = "Doe"
                <br />
                full_name = first_name + " " + last_name # Concatenation magic!
                <br />
                print(full_name) # Output: John Doe
                <br />
                <br />
                # Powerful string methods for text processing
                <br />
                text = "Hello, World!"
                <br />
                print(text.upper()) # HELLO, WORLD!
                <br />
                print(text.lower()) # hello, world!
                <br />
                print(len(text)) # 13 (counts all characters)
                <br />
                print(text.replace("World", "Python")) # Hello, Python!
              </CustomPre>
              <div className="space-y-3">
                <CustomNote
                  variant="success"
                  title="✅ Good practice:"
                  description="Use double quotes for most strings, single for quotes within text"
                />
                <CustomNote
                  variant="info"
                  title="🎯 Smart tip:"
                  description='Use f-strings for variable insertion: <code class="bg-blue-100 dark:bg-blue-900 px-1 rounded">f"Hello {name}!"</code>'
                />
                <CustomNote
                  variant="warning"
                  title="⚠️ Remember:"
                  description="Strings are immutable - methods create new strings, don't modify originals"
                />
              </div>
            </div>

            {/* Booleans Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                3. Booleans ✅❌
              </h3>
              <p className="text-lg leading-relaxed">
                Booleans represent simple yes/no, on/off, true/false values -
                essential for decision-making!
              </p>
              <CustomPre>
                is_student_enrolled = True
                <br />
                has_completed_assignment = False
                <br />
                is_weekend = True
                <br />
                <br />
                # Boolean operations for logical thinking
                <br />
                is_sunny = True
                <br />
                is_raining = False
                <br />
                <br />
                print(not is_raining) # True (opposite of False)
                <br />
                print(is_sunny or is_raining) # True (at least one is True)
                <br />
                print(is_sunny and is_raining) # False (both must be True)
              </CustomPre>
              <div className="space-y-3">
                <CustomNote
                  variant="success"
                  title="✅ Good naming:"
                  description='Use descriptive names starting with <code class="bg-green-100 dark:bg-green-900 px-1 rounded">is_</code>, <code class="bg-green-100 dark:bg-green-900 px-1 rounded">has_</code>, <code class="bg-green-100 dark:bg-green-900 px-1 rounded">can_</code>'
                />
                <CustomNote
                  variant="info"
                  title="💡 Smart usage:"
                  description="Perfect for controlling program flow with if statements"
                />
                <CustomNote
                  variant="tip"
                  title="🎯 Remember:"
                  description='Comparison operations (<code class="bg-purple-100 dark:bg-purple-900 px-1 rounded">==</code>, <code class="bg-purple-100 dark:bg-purple-900 px-1 rounded">&gt;</code>, <code class="bg-purple-100 dark:bg-purple-900 px-1 rounded">&lt;</code>) automatically return booleans'
                />
              </div>
            </div>
          </div>
        </StudyGuideSection>
      </div>
    </StudyGuideLayout>
  );
};

export default VariablesDataTypes;
