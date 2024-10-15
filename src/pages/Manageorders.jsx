import ManageOrders from "../components/ManageOrders";
import Navbar from "../components/Navbar";

const Manageorders = () => {
  return (
    <div>
      <div className="h-[10%]">
        <Navbar />
      </div>
      <div className="flex justify-center mt-10">
      <ManageOrders/>
      </div>
    </div>
  );
};

export default Manageorders;
