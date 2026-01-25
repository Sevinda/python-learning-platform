/* eslint-disable react/no-unescaped-entities */
import CustomPre from "@/components/custom/CustomPre";
import StudyGuideLayout from "@/components/custom/StudyGuideLayout";
import StudyGuideSection from "@/components/custom/StudyGuideSection";
import CustomNote from "@/components/custom/CustomNote";

const TypeConversion = () => {
  return (
    <StudyGuideLayout title="Type Conversion">
      <StudyGuideSection title="Converting Between Data Types">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            Type conversion allows you to convert data from one type to another.
            This is useful when you need to work with data in different formats.
          </p>

          <CustomPre>
            # String to number
            <br />
            age_str = "16"
            <br />
            age_num = int(age_str) # Convert to integer
            <br />
            price_str = "19.99"
            <br />
            price_num = float(price_str) # Convert to float
            <br />
            <br />
            # Number to string
            <br />
            score = 95
            <br />
            score_str = str(score) # Convert to string
            <br />
            <br />
            # Checking types
            <br />
            print(type(age_num)) # &lt;class 'int'&gt;
            <br />
            print(type(price_num)) # &lt;class 'float'&gt;
          </CustomPre>

          <CustomNote
            variant="info"
            title="💡 Key Functions:"
            description="Use int() to convert to integer, float() for decimal numbers, and str() to convert to text"
          />
        </div>
      </StudyGuideSection>
    </StudyGuideLayout>
  );
};

export default TypeConversion;
