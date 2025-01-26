import { ProgressBar } from "@/components/progressbar";
import { StepContent } from "@/components/setcount";
import { data } from "@/constants/dummy";
import { usePriceRangeContext } from "@/context/store";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const GuestPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {
    selectedPriceRange,
    setSelectedPriceRange,
    selectedCardTitles,
    setSelectedCardTitles,
  } = usePriceRangeContext();

  console.log("__from guest page", selectedPriceRange, selectedCardTitles);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < data.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      <div className="w-full md:w-[70%] bg-[#FDFAD6] p-6 flex flex-col items-center justify-between">
        <ProgressBar currentIndex={currentIndex} totalSteps={data.length} />

        <StepContent
          step={data[currentIndex]}
          selectedPriceRange={selectedPriceRange}
          setSelectedPriceRange={setSelectedPriceRange}
          selectedCardTitles={selectedCardTitles}
          setSelectedCardTitles={setSelectedCardTitles}
        />
        <div className="flex justify-between w-full px-6">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="bg-gray-200 p-2 rounded disabled:opacity-50"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === data.length - 1}
            className="bg-gray-200 p-2 rounded disabled:opacity-50"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="w-full md:w-[30%] flex flex-col items-center justify-center bg-white p-6">
        <img
          src="/logo.png"
          alt={data[currentIndex].title}
          className="max-w-full max-h-full object-contain mb-4"
        />
        <img
          src={data[currentIndex].imageUrl}
          alt={`${data[currentIndex].title} top`}
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  );
};

export default GuestPage;
