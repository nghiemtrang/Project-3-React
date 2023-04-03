import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-border">
            <div className="footer-content">
              <div className="footer-brand text">
                <div className="brand">
                  <img className="brand-img" src="/img/logo.svg" alt="logo" />
                  <p className="text-xl heading">dwelling</p>
                </div>
                <p>
                  Building a next-generation collaborative platform to connect
                  renters, homeowners, and agents.
                </p>
                <div className="footer-input-box">
                  <input
                    className="footer-input text-lg"
                    type="text"
                    placeholder="email"
                  />
                  <button className="btn-type-2 btn-lg text-lg">Send</button>
                </div>
              </div>
              <div className="footer-links">
                <div className="link-list">
                  <h4 className="heading">Dwelling</h4>
                  <ul className="text-lg">
                    <li>
                      <a href="#">Find my home</a>
                    </li>
                    <li>
                      <a href="#">Homeowners</a>
                    </li>
                    <li>
                      <a href="#">Community</a>
                    </li>
                    <li>
                      <a href="#">Reviews</a>
                    </li>
                  </ul>
                </div>
                <div className="link-list">
                  <h4 className="heading">Company</h4>
                  <ul className="text-lg">
                    <li>
                      <a href="#">Features</a>
                    </li>
                    <li>
                      <a href="#">Articles</a>
                    </li>
                    <li>
                      <a href="#">Press</a>
                    </li>
                    <li>
                      <a href="#">Refer</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">API documentations</a>
                    </li>
                  </ul>
                </div>
                <div className="link-list">
                  <h4 className="heading">Support</h4>
                  <ul className="text-lg">
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                    <li>
                      <a href="#">Terms</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* copy right */}
          <div className="copy-right">
            <div className="media">
              <a href="#" className="media-link">
                <img className="media-img" src="/img/footer/fb.svg" alt="faccebook" />
              </a>
              <a href="#" className="media-link">
                <img className="media-img" src="/img/footer/in.svg" alt="in" />
              </a>
              <a href="#" className="media-link">
                <img className="media-img" src="/img/footer/tw.svg" alt="tw" />
              </a>
            </div>
            <div>Copyright @UIHUT 2022</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
