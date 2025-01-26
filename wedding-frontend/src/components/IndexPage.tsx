import { motion } from "framer-motion";

const InitialLoader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#FEFEFE] via-[#FDFCF1] via-[#FCF9DF] to-[#FCF6D1]">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4">
        <img
          src="/logo.png"
          alt=""
          className="w-[150px] md:w-[200px] h-auto"
        />
      </div>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{
          duration: 2,
          type: "spring",
          stiffness: 50,
        }}
        className="relative w-[20rem] md:w-[31rem] h-[400px] md:h-[500px] overflow-hidden"
      >
        {/* Invitation Card */}
        <div className="absolute inset-0">
          <img
            src="/card.webp"
            alt=""
            className="md:w-full md:h-full w-[17rem] h-[17rem] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Letter Animation */}
        <motion.div
          initial={{ y: "70%", opacity: 0 }}
          animate={{ y: "20%", opacity: 1 }}
          transition={{
            duration: 2,
            delay: 1,
            type: "spring",
            stiffness: 50,
          }}
          className="absolute top-0 left-[25%] transform -translate-x-1/2 z-10"
        >
          <img
            src="/letter.png"
            alt=""
            className="w-[170px] md:w-full h-[150px] md:h-[200px] rounded-md shadow-md"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InitialLoader;
