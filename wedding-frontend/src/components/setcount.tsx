import { Card, Step } from "@/types";
import { useNavigate } from "@tanstack/react-router";
import axios from "axios";

interface StepContentProps {
  step: Step;
  selectedPriceRange: string | null;
  setSelectedPriceRange: (priceRange: string | null) => void;
  selectedCardTitles: string[];
  setSelectedCardTitles: (titles: string[]) => void;
}

export const StepContent = ({
  step,
  selectedPriceRange,
  setSelectedPriceRange,
  selectedCardTitles,
  setSelectedCardTitles,
}: StepContentProps) => {
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
     const name = localStorage.getItem("name");
     const email = localStorage.getItem("email");

     console.log({ name, email, selectedPriceRange, selectedCardTitles });

     const response = await axios.post(
       `https://wedding-backend-fragrant-bush-3143.fly.dev/save`,
       {
         name,
         email,
         selectedPriceRange,
         selectedCardTitles,
       }
     );

      console.log("Data submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className="mb-6">
        <span className="text-lg text-gray-500">Step {step.stepNumber}</span>
        <h2 className="text-2xl md:text-4xl font-bold mb-4">{step.title}</h2>
        <p className="mb-4 text-lg md:text-xl text-zinc-500">{step.description}</p>
      </div>

      {step.priceRanges && (
        <div className="flex flex-wrap gap-4 justify-center">
          {step.priceRanges.map((range, idx) => (
            <div
              key={idx}
              className={`p-4 border bg-white hover:bg-[#CDA25B] hover:text-white cursor-pointer rounded-full ${
                selectedPriceRange === range.text
                  ? "bg-transparent border-4 border-red-500 text-black"
                  : ""
              }`}
              onClick={() => setSelectedPriceRange(range.text)}
            >
              <p className="text-lg md:text-xl">{range.text}</p>
            </div>
          ))}
        </div>
      )}

      {step.cards && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {step.cards.map((card, idx) => (
            <CardComponent
              key={idx}
              card={card}
              selectedCardTitles={selectedCardTitles}
              setSelectedCardTitles={setSelectedCardTitles}
            />
          ))}
        </div>
      )}
      {step.stepNumber === 2 && (
        <button
          onClick={() => {
            handleSubmit();
            navigate({ to: "/done" });
          }}
          className="w-full md:w-[70%] py-4 mt-6 bg-pink-500 text-lg md:text-xl font-semibold rounded-full text-[#FDFCF1] hover:bg-pink-600 transition-colors shadow-[0_0_20px_rgba(255,255,0,0.3)]"
        >
          Get My FREE Proposal
        </button>
      )}
    </div>
  );
};

const CardComponent = ({
  card,
  selectedCardTitles,
  setSelectedCardTitles,
}: {
  card: Card;
  selectedCardTitles: string[];
  setSelectedCardTitles: (titles: string[]) => void;
}) => {
  const isSelected = selectedCardTitles.includes(card.title);

  const handleCardClick = () => {
    if (isSelected) {
      setSelectedCardTitles(
        selectedCardTitles.filter((title) => title !== card.title)
      );
    } else {
      setSelectedCardTitles([...selectedCardTitles, card.title]);
    }
  };

  return (
    <div
      className={`border rounded-lg p-4 text-center bg-white cursor-pointer ${
        isSelected ? "bg-transparent text-black border-4 border-red-500" : ""
      }`}
      onClick={handleCardClick}
    >
      <img
        src={card.image}
        alt={card.title}
        className="w-20 h-20 object-cover rounded-xl mx-auto mb-4"
      />
      <h3 className="text-lg font-bold mb-2">{card.title}</h3>
      <p className="text-gray-500">{card.description}</p>
    </div>
  );
};
