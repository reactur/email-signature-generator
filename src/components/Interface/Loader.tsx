import "../../styles/loader.css";

const Loader = () => {

  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="three-body">
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
      </div>
    </div>
  );
};

export default Loader;
