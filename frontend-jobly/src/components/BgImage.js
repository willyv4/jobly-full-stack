import officeImage from "../assets/office.png";

const BgImage = () => {
  return (
    <>
      <img
        src={officeImage}
        alt="office"
        className="fixed top-10 -z-40 h-screen w-screen object-cover"
      />
      <div className="fixed top-10  -z-30 h-screen w-screen bg-black/70 backdrop-blur-sm backdrop-filter"></div>
    </>
  );
};
export default BgImage;
