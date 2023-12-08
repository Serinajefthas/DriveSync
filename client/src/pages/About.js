import "../styles/About.css";

function About() {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="img-parent col-md-6 p-md-5"></div>
            <div className="text">
              <div className="content">
                <span>About us</span>
                <h2>Welcome to DriveSync</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Facere consequatur, quibusdam, exercitationem
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatum.
                </p>
                <a href="/#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
