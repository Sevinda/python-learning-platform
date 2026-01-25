/* eslint-disable react/no-unescaped-entities */
import CustomPre from "@/components/custom/CustomPre";
import StudyGuideLayout from "@/components/custom/StudyGuideLayout";
import StudyGuideSection from "@/components/custom/StudyGuideSection";

const DataStructures = () => {
  return (
    <StudyGuideLayout title="Data Structures">
      <StudyGuideSection title="Lists">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            Lists store multiple items in a single variable. They are ordered,
            changeable, and allow duplicate values.
          </p>

          <CustomPre>
            # Creating a list
            <br />
            fruits = ["apple", "banana", "orange"]
            <br />
            numbers = [1, 2, 3, 4, 5]
            <br />
            mixed = ["hello", 42, True, 3.14]
            <br />
            empty_list = []
            <br />
            <br />
            # Accessing list items (indexing starts at 0)
            <br />
            print(fruits[0]) # apple
            <br />
            print(fruits[1]) # banana
            <br />
            print(fruits[-1]) # orange (negative indexing from end)
          </CustomPre>

          <CustomPre>
            fruits = ["apple", "banana", "orange"]
            <br />
            # List methods
            <br />
            fruits.append("grape") # Add item to end
            <br />
            fruits.insert(1, "kiwi") # Insert item at specific position
            <br />
            fruits.remove("banana") # Remove specific item
            <br />
            last_fruit = fruits.pop() # Remove and return last item
            <br />
            fruits.sort() # Sort the list
            <br />
            print(len(fruits)) # Get length of list
          </CustomPre>

          <CustomPre>
            # List slicing
            <br />
            numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
            <br />
            print(numbers[2:5]) # [2, 3, 4] (items from index 2 to 4)
            <br />
            print(numbers[:3]) # [0, 1, 2] (first 3 items)
            <br />
            print(numbers[3:]) # [3, 4, 5, 6, 7, 8, 9] (from index 3 to end)
            <br />
            print(numbers[::2]) # [0, 2, 4, 6, 8] (every 2nd item)
          </CustomPre>
        </div>
      </StudyGuideSection>
    </StudyGuideLayout>
  );
};

export default DataStructures;
