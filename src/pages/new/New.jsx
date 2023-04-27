import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const New = ({ inputs }) => {

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Employee</h1>
        </div>
        <div className="bottom">
          <div className="details">
            <form>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              
            </form>
            <button className="send_button">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;