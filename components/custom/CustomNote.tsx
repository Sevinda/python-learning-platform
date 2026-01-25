type CustomNoteProps = {
  title: string;
  description: string;
  variant?: "success" | "info" | "warning" | "tip";
};

const CustomNote = ({
  title,
  description,
  variant = "info",
}: CustomNoteProps) => {
  const variants = {
    success: {
      container:
        "bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800",
      title: "text-green-700 dark:text-green-300",
      description: "text-green-600 dark:text-green-400",
      code: "bg-green-100 dark:bg-green-900",
    },
    info: {
      container:
        "bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800",
      title: "text-blue-700 dark:text-blue-300",
      description: "text-blue-600 dark:text-blue-400",
      code: "bg-blue-100 dark:bg-blue-900",
    },
    warning: {
      container:
        "bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800",
      title: "text-amber-700 dark:text-amber-300",
      description: "text-amber-600 dark:text-amber-400",
      code: "bg-amber-100 dark:bg-amber-900",
    },
    tip: {
      container:
        "bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800",
      title: "text-purple-700 dark:text-purple-300",
      description: "text-purple-600 dark:text-purple-400",
      code: "bg-purple-100 dark:bg-purple-900",
    },
  };

  const currentVariant = variants[variant];

  return (
    <div className={`${currentVariant.container} rounded-lg p-3`}>
      <p className="text-sm">
        <span className={`font-semibold ${currentVariant.title}`}>{title}</span>{" "}
        <span
          className={currentVariant.description}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </p>
    </div>
  );
};

export default CustomNote;
