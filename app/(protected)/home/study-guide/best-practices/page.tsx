/* eslint-disable react/no-unescaped-entities */
import CustomPre from "@/components/custom/CustomPre";
import StudyGuideLayout from "@/components/custom/StudyGuideLayout";
import StudyGuideSection from "@/components/custom/StudyGuideSection";
import CustomNote from "@/components/custom/CustomNote";

const BestPractices = () => {
  return (
    <StudyGuideLayout title="Best Practices">
      <StudyGuideSection title="Best Practices and Coding Style">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            Follow these guidelines to write clean, readable, and maintainable
            Python code.
          </p>

          <CustomPre>
            # ✅ Good variable names (descriptive)
            <br />
            student_age = 16
            <br />
            total_score = 450
            <br />
            is_logged_in = True
            <br />
            <br />
            # ❌ Bad variable names (not descriptive)
            <br />
            a = 16
            <br />
            x = 450
            <br />
            flag = True
            <br />
            <br />
            # ✅ Good function names (verbs)
            <br />
            def calculate_total():
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;pass
            <br />
            <br />
            def check_password():
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;pass
            <br />
            <br />
            # ✅ Constants in UPPERCASE
            <br />
            MAX_ATTEMPTS = 3
            <br />
            DEFAULT_TIMEOUT = 30
            <br />
            PI = 3.14159
          </CustomPre>
        </div>
      </StudyGuideSection>

      <StudyGuideSection title="Code Organization">
        <div className="space-y-6">
          <CustomPre>
            # ✅ Good indentation (4 spaces)
            <br />
            if age &gt;= 18:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;print("Adult")
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;if age &gt;= 65:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Senior
            citizen")
            <br />
            <br />
            # ✅ Use blank lines to separate logical sections
            <br />
            def get_user_input():
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;name = input("Enter name: ")
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return name
            <br />
            <br />
            <br />
            def process_data(data):
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;# Process the data here
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return processed_data
            <br />
            <br />
            <br />
            def main():
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;name = get_user_input()
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;result = process_data(name)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;print(result)
          </CustomPre>
        </div>
      </StudyGuideSection>

      <StudyGuideSection title="Comments and Documentation">
        <div className="space-y-6">
          <CustomPre>
            # ✅ Good comments explain WHY, not WHAT
            <br />
            # Convert to uppercase for case-insensitive comparison
            <br />
            username = input("Username: ").upper()
            <br />
            <br />
            # ❌ Bad comment (explains what code already shows)
            <br />
            # Convert username to uppercase
            <br />
            username = input("Username: ").upper()
            <br />
            <br />
            # ✅ Function documentation
            <br />
            def calculate_bmi(weight, height):
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;"""
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;Calculate Body Mass Index.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;Args:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;weight (float):
            Weight in kilograms
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height (float):
            Height in meters
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;Returns:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;float: BMI value
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;"""
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return weight / (height ** 2)
          </CustomPre>
        </div>
      </StudyGuideSection>

      <StudyGuideSection title="Common Mistakes to Avoid">
        <div className="space-y-6">
          <CustomPre>
            # ❌ Don't use mutable defaults in functions
            <br />
            def bad_function(items=[]):
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;items.append("new")
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return items
            <br />
            <br />
            # ✅ Use None instead
            <br />
            def good_function(items=None):
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;if items is None:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;items = []
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;items.append("new")
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return items
            <br />
            <br />
            # ❌ Don't compare with True/False directly
            <br />
            if is_active == True:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;pass
            <br />
            <br />
            # ✅ Just use the boolean directly
            <br />
            if is_active:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;pass
            <br />
            <br />
            # ❌ Don't use global variables unnecessarily
            <br />
            counter = 0 # Global
            <br />
            <br />
            def increment():
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;global counter
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;counter += 1
            <br />
            <br />
            # ✅ Pass parameters and return values instead
            <br />
            def increment(value):
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return value + 1
            <br />
            <br />
            counter = 0
            <br />
            counter = increment(counter)
          </CustomPre>

          <div className="space-y-3 mt-6">
            <h4 className="text-lg font-bold text-foreground">
              Professional Coding Tips
            </h4>
            <CustomNote
              variant="success"
              title="📝"
              description="Write code as if the person maintaining it is a violent psychopath who knows where you live"
            />
            <CustomNote
              variant="info"
              title="🔍"
              description="Use descriptive names - code is read more than it's written"
            />
            <CustomNote
              variant="warning"
              title="⚠️"
              description="Avoid deep nesting - if you have more than 3 levels, consider breaking into functions"
            />
            <CustomNote
              variant="tip"
              title="🎯"
              description="Follow PEP 8 (Python Enhancement Proposal 8) for style guidelines"
            />
          </div>
        </div>
      </StudyGuideSection>
    </StudyGuideLayout>
  );
};

export default BestPractices;
