import notFound from "../assets/notFound.gif";

const NotFound = () => {
  <>
    <img
      src={notFound}
      alt="Gif"
      className="fixed top-10 -z-40 h-screen w-screen object-cover"
    />
    <div className="fixed top-10  -z-30 h-screen w-screen bg-black/70 backdrop-blur-sm backdrop-filter"></div>
  </>;
};

export default NotFound;
