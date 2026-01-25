import CustomPre from "@/components/custom/CustomPre";
import StudyGuideLayout from "@/components/custom/StudyGuideLayout";
import StudyGuideSection from "@/components/custom/StudyGuideSection";

const Operators = () => {
  return (
    <StudyGuideLayout title="Operators">
      <StudyGuideSection title="Arithmetic Operators">
        <div className="space-y-6">
          <CustomPre>
            a = 10
            <br />
            b = 3
            <br />
            <br />
            print(a + b) # Addition: 13
            <br />
            print(a - b) # Subtraction: 7
            <br />
            print(a * b) # Multiplication: 30
            <br />
            print(a / b) # Division: 3.3333...
            <br />
            print(a // b) # Floor division: 3
            <br />
            print(a % b) # Modulus (remainder): 1
            <br />
            print(a ** b) # Exponentiation: 1000
          </CustomPre>
        </div>
      </StudyGuideSection>

      <StudyGuideSection title="Comparison Operators">
        <div className="space-y-6">
          <CustomPre>
            x = 5
            <br />
            y = 10
            <br />
            <br />
            print(x == y) # Equal to: False
            <br />
            print(x != y) # Not equal to: True
            <br />
            print(x &lt; y) # Less than: True
            <br />
            print(x &gt; y) # Greater than: False
            <br />
            print(x &lt;= y) # Less than or equal: True
            <br />
            print(x &gt;= y) # Greater than or equal: False
          </CustomPre>
        </div>
      </StudyGuideSection>

      <StudyGuideSection title="Logical Operators">
        <div className="space-y-6">
          <CustomPre>
            a = True
            <br />
            b = False
            <br />
            <br />
            print(a and b) # AND: False
            <br />
            print(a or b) # OR: True
            <br />
            print(not a) # NOT: False
          </CustomPre>
        </div>
      </StudyGuideSection>

      <StudyGuideSection title="Assignment Operators">
        <div className="space-y-6">
          <CustomPre>
            x = 10
            <br />
            x += 5 # Same as x = x + 5, result: 15
            <br />
            x -= 3 # Same as x = x - 3, result: 12
            <br />
            x *= 2 # Same as x = x * 2, result: 24
            <br />x /= 4 # Same as x = x / 4, result: 6.0
          </CustomPre>
        </div>
      </StudyGuideSection>
    </StudyGuideLayout>
  );
};

export default Operators;
