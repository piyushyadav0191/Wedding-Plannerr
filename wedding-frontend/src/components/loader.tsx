

const InLoader = ({imageUrl}: {imageUrl: string}) => {
    return  <div className="bg-gradient-to-b from-[#FEFCE1] via-[#FDFAD6] via-[#FBF6C7] via-[#F8F4BC] to-[#F8F3AD] flex justify-center items-center h-screen">
    <img src={imageUrl} alt="" />
  </div>;
}

export default InLoader