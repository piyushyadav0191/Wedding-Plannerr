import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const AnimatedCircle = () => {
  const [text, setText] = useState(
    "Shortlisting venues to accommodate your wedding party"
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setText("Curating styles that match your budget");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#FEFCE1] via-[#FDFAD6] via-[#FBF6C7] via-[#F8F4BC] to-[#F8F3AD] flex justify-center items-center h-screen">
      <div className="relative flex flex-col items-center justify-center w-[35rem] h-[35rem] bg-[#F8F4BC] rounded-full shadow-2xl">
        <Search className="mb-4 text-zinc-700" size={48} />
        <motion.div className="text-center">
          <h1 className="text-2xl font-serif font-bold text-zinc-500">
            {text}
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedCircle;
