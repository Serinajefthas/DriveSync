import DateTimePicker from "../components/DateTimePicker";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <DateTimePicker />
          {/* Slogan and Icons */}
          <div className="col-md-6 text-center">
            <h2>Choose Your Pickup Location</h2>
            <h2>Select the Best Deal</h2>
            <h2>Reserve Your Rental Car</h2>

            {/* Catchy Slogan */}
            <p>"Better Way to Rent Your Perfect Cars"</p>

            {/* Icons */}
            {/* Add your icons or images here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
