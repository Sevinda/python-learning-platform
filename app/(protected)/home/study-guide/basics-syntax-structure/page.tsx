/* eslint-disable react/no-unescaped-entities */
import CustomNote from "@/components/custom/CustomNote";
import CustomPre from "@/components/custom/CustomPre";
import StudyGuideLayout from "@/components/custom/StudyGuideLayout";
import StudyGuideSection from "@/components/custom/StudyGuideSection";

const BasicSyntaxStructure = () => {
  return (
    <StudyGuideLayout title="Basic Syntax & Structure">
      <div className="space-y-12">
        <StudyGuideSection title="Your First Python Code Block">
          <div className="space-y-3">
            <p className="text-lg leading-relaxed">
              Let's start with the traditional "Hello, World!" program - the
              first step in any programming journey.
            </p>
          </div>
          <CustomPre>print("Hello, World!")</CustomPre>
        </StudyGuideSection>

        <StudyGuideSection title="Comments">
          <div className="space-y-3">
            <p className="text-lg leading-relaxed">
              Comments are notes for humans reading the code. Python ignores
              them when running the program.
            </p>
            <CustomNote
              title="💡 Best Practice:"
              description="Use comments to explain why something is done, not what is done."
            />
          </div>
          <CustomPre>
            # This is a single-line comment in Python
            <br />
            <br />
            """
            <br />
            This is a multi-line comment (docstring).
            <br />
            It can span multiple lines and is often used
            <br />
            for documentation and longer explanations.
            <br />
            """
          </CustomPre>
        </StudyGuideSection>

        <StudyGuideSection title="Indentation">
          <div className="space-y-3">
            <p className="text-lg leading-relaxed">
              Python uses indentation (spaces or tabs) to define blocks of code.
              Proper indentation is crucial as it indicates which statements
              belong together.
            </p>
            <CustomNote
              title="⚠️ Important:"
              description="Consistent indentation is key! Mixing spaces and tabs can lead to errors."
            />
          </div>
          <CustomPre>
            if True:
            <br />
            &nbsp;&nbsp;print("This line is indented and part of the if block")
            <br />
            &nbsp;&nbsp;print("This line is also part of the if block")
            <br />
            print("This line is outside the if block")
          </CustomPre>
        </StudyGuideSection>
      </div>
    </StudyGuideLayout>
  );
};

export default BasicSyntaxStructure;
