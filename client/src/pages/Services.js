import Headings from "../components/Headings";
import "../styles/Services.css";
import wedding from "../assets/images/wedding-car.png";
import sedan from "../assets/images/sedan.png";
import transportation from "../assets/images/transportation.png";

function Services() {
  return (
    <section className="services">
      <div className="container">
        <Headings subHeading="Services" heading="Our Latest Services" />
        <div className="row">
          <div className="col-md-3">
            <div className="service">
              <div className="service-icon">
                <img src={wedding} alt="" />
              </div>
              <div className="service-text w-100">
                <h3 className="mb-3">Wedding Ceremony</h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="service">
              <div className="service-icon">
                <img src={transportation} alt="" />
              </div>
              <div className="service-text w-100">
                <h3 className="mb-3">City Transfer</h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="service">
              <div className="service-icon">
                <img src={sedan} alt="" />
              </div>
              <div className="service-text w-100">
                <h3 className="mb-3">Airport Transfer</h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="service">
              <div className="service-icon">
                <img src={transportation} alt="" />
              </div>
              <div className="service-text w-100">
                <h3 className="mb-3">Whole City Tour</h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
