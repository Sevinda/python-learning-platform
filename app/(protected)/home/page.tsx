import CustomCard from "@/components/custom/CustomCard";

const ProtectedHomePage = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <CustomCard
          title="Study Guide 🚀"
          description="Explore interactive lessons, coding exercises, and quizzes to master Python concepts effectively."
          href="/home/study-guide"
        />
        <CustomCard
          title="Practice Labs (Questions) 🔬"
          description="Hands-on coding challenges and exercises to reinforce your Python skills."
          href="/home/practice-labs"
        />
      </div>
    </div>
  );
};

export default ProtectedHomePage;
