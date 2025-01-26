import AnimatedCheckmark from "@/components/check-mark";

const DonePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <AnimatedCheckmark />
      <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold mb-2 sm:mb-3 md:mb-4">
        Our top recommended <br />
        venues for you
      </h1>
      <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-zinc-500 font-semibold mb-2 sm:mb-3 md:mb-4">
        Shortlist the venues you like so that our planner can <br className="hidden md:block" /> understand your
        tastes better
      </h3>
    </div>
  );
}

export default DonePage