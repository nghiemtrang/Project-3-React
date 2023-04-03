import "./Property.css";

export default function Property() {
  return (
    <section className="property" id="renters">
      <div className="half-bg">
        <div className="container">
          <div className="property-container">
            {/* property content */}
            <div className="property-text">
              <div className="property-content text-box-sm">
                <h2>Popular property</h2>
                <p className="text-lg">
                  Building a next-generation collaborative platform to connect
                  renters, homeowners, and agents.
                </p>
              </div>
              <div className="property-link">
                <a href="#">
                  <img
                    className="btn-cricle"
                    src="/img/property/button-cricle-1.svg"
                    alt="cricle btn"
                  />
                </a>
                <a href="#">
                  <img
                    className="btn-cricle"
                    src="/img/property/button-cricle-2.svg"
                    alt="cricle-btn"
                  />
                </a>
              </div>
            </div>
            {/* Property items */}
            <ul className="property-items">
              {/* item 1 */}
              <li className="property-item">
                <img
                  className="property-img"
                  src="/img/property/property1.svg"
                  alt="property-img-1"
                />
                <div className="property-item-info">
                  <div>
                    <h4 className="heading">
                      <span className="dolla-color">$</span> 49,143
                    </h4>
                    <h3 className="heading">Gulshan duplex house</h3>
                  </div>
                  <div className="property-item-link">
                    <a href="#">
                      <img
                        className="btn-cricle"
                        src="/img/property/button-cricle-3.svg"
                        alt ="cricle-btn"
                      />
                    </a>
                  </div>
                </div>
              </li>
              {/* item 2 */}
              <li className="property-item property-item-display">
                <img
                  className="property-img"
                  src="/img/property/property2.svg"
                  alt ="property-img-2"
                />
                <div className="property-item-info">
                  <div>
                    <h4 className="heading">
                      <span className="dolla-color">$</span> 49,143
                    </h4>
                    <h3 className="heading">Gulshan duplex house</h3>
                  </div>
                  <div className="property-item-link">
                    <a href="#">
                      <img
                        className="btn-cricle"
                        src="/img/property/button-cricle-3.svg"
                        alt ="cricle-btn"
                      />
                    </a>
                  </div>
                </div>
              </li>
              {/* item 3 */}
              <li className="property-item property-item-display">
                <img
                  className="property-img"
                  src="/img/property/property3.svg"
                  alt="property-img-3"
                />
                <div className="property-item-info">
                  <div>
                    <h4 className="heading">
                      <span className="dolla-color">$</span>49,143
                    </h4>
                    <h3 className="heading">Gulshan duplex house</h3>
                  </div>
                  <div className="property-item-link">
                    <a href="#">
                      <img
                        className="btn-cricle"
                        src="/img/property/button-cricle-3.svg"
                        alt = "cricle-btn"
                      />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
            <div className="property-active">
              <button className="btn-type-2 btn-lg text-lg">
                All Property
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
