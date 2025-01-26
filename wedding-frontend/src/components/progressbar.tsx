export const ProgressBar = ({
  currentIndex,
  totalSteps,
}: {
  currentIndex: number;
  totalSteps: number;
}) => (
  <div className="relative w-[90%] h-2 bg-gray-200 rounded-full mb-6">
    <div
      className="absolute h-2 bg-[#FFA500] rounded-full transition-all duration-300"
      style={{ width: `${((currentIndex + 1) / totalSteps) * 100}%`, left: 0 }}
    />
  </div>
);
