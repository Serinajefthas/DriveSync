import "../styles/Contact.css";
import Headings from "../components/Headings";

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <Headings subHeading="Contact" heading="How to reach us" />
        <div className="row d-flex mb-5">
          <div className="info col-md-4">
            <div className="row mb-5">
              <div className="col-md-12">
                <div className="border w-100 p-4 rounded mb-2 d-flex">
                  <div className="icon mb-3">
                    <ion-icon size="large" name="map-outline"></ion-icon>
                  </div>
                  <p>
                    <span>Address: </span>
                    198 West 21th Street, Suite 721 New York NY 10016
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="border w-100 p-4 rounded mb-2 d-flex">
                  <div className="icon mb-3">
                    <ion-icon size="large" name="call-outline"></ion-icon>
                  </div>
                  <p>
                    <span>Phone: </span>+1 (123) 456-7890
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="border w-100 p-4 rounded mb-2 d-flex">
                  <div className="icon mb-3">
                    <ion-icon size="large" name="mail-outline"></ion-icon>
                  </div>
                  <p>
                    <span>Email: </span>
                    info@drivesync.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="form col-md-8 block-9 mb-md-5">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-light p-5 contact-form"
            >
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group mb-3">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="7"
                  className="form-control"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="form-group mb-3">
                <input
                  type="submit"
                  value="Send Message"
                  className="btn btn-primary py-3 px-5"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
