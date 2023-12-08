function Footer() {
  return (
    <footer className="bg-dark text-white p-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-3">
            <h5>DriveSync</h5>
            <p>
              Explore our wide range of rental cars to find the perfect vehicle
              for your journey.
            </p>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/#" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/#" className="text-white">
                  Cars
                </a>
              </li>
              <li>
                <a href="/#" className="text-white">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <p>Email: info@drivesync.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/#" className="text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="/#" className="text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="/#" className="text-white">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
