/* eslint-disable react/no-unescaped-entities */
import CustomPre from "@/components/custom/CustomPre";
import StudyGuideLayout from "@/components/custom/StudyGuideLayout";
import StudyGuideSection from "@/components/custom/StudyGuideSection";
import CustomNote from "@/components/custom/CustomNote";

const FileHandling = () => {
  return (
    <StudyGuideLayout title="File Handling">
      <div className="space-y-12">
        <StudyGuideSection title="File Handling">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              In Python, you can read from and write to files using built-in
              functions.
            </p>
            <p className="text-lg leading-relaxed">
              Important: Always close files after opening them to free up system
              resources.
            </p>
          </div>
        </StudyGuideSection>
        <StudyGuideSection title="Reading Files">
          <div className="space-y-6">
            <CustomPre>
              # Reading entire file
              <br />
              file = open("data.txt", "r")
              <br />
              content = file.read()
              <br />
              print(content)
              <br />
              file.close()
              <br />
              <br />
              # Reading line by line
              <br />
              file = open("data.txt", "r")
              <br />
              for line in file:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;print(line.strip()) # strip() removes
              newline characters
              <br />
              file.close()
            </CustomPre>
          </div>
        </StudyGuideSection>
        <StudyGuideSection title="Writing Files">
          <div className="space-y-6">
            <CustomPre>
              # Writing to a file (overwrites existing content)
              <br />
              file = open("output.txt", "w")
              <br />
              file.write("Hello, World!\n")
              <br />
              file.close()
              <br />
              <br />
              # Appending to a file (adds to existing content)
              <br />
              file = open("output.txt", "a")
              <br />
              file.write("This is an appended line.\n")
              <br />
              file.close()
              <br />
              <br />
              # Writing lists to file
              <br />
              data = ["apple", "banana", "orange"]
              <br />
              file = open("fruits.txt", "w")
              <br />
              for fruit in data:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;file.write(fruit + "\n") # Write each item
              on a new line
              <br />
              file.close()
            </CustomPre>
          </div>
        </StudyGuideSection>
        <StudyGuideSection title="Using Context Managers (The Smart Way)">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              The `with` statement automatically closes files for you - best
              practice!
            </p>
            <CustomPre>
              # Reading with context manager
              <br />
              with open("data.txt", "r") as file:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;content = file.read()
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;print(content)
              <br />
              # File is automatically closed here
              <br />
              <br />
              # Writing with context manager
              <br />
              with open("output.txt", "w") as file:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;file.write("Hello, World!\n")
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;file.write("This is safe and clean!\n")
              <br /># File is automatically closed here
            </CustomPre>
            <div className="space-y-3 mt-6">
              <h4 className="text-lg font-bold text-foreground">
                File Handling Best Practices
              </h4>
              <CustomNote
                variant="success"
                title="✅"
                description="Always use `with` statements for file operations"
              />
              <CustomNote
                variant="info"
                title="🎯"
                description='Use "r" for reading, "w" for writing, "a" for appending'
              />
              <CustomNote
                variant="warning"
                title="⚠️ Remember:"
                description='"w" mode overwrites the file, be careful!'
              />
            </div>
          </div>
        </StudyGuideSection>
      </div>
    </StudyGuideLayout>
  );
};

export default FileHandling;
