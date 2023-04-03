import "./Trust.css";

export default function Trust() {
  return (
    <section className="trust" id="aboutus">
      <div className="container">
        <div className="trust-container">
          <div className="trust-box">
            {/* text */}
            <div className="trust-text">
              <h2 className="text-box-md">
                Trusted by the people across the globe
              </h2>
              <div className="text-box-sm">
                <p className="text-lg">
                  Building a next-generation collaborative platform to connect
                  renters, homeowners, and agents. Live the way you want.
                  Beautiful homes. Incredible locations. Pricing that makes
                  sense.
                </p>
                <p className="text-lg">
                  No matter what stage of life you’re in, having friends to
                  share experiences with is what it’s all about.
                </p>
              </div>
            </div>
            {/* trust number */}
            <div className="trust-numbers">
              <div className="trust-number">
                <div className="icon">
                  <img src="/img/trust/trust1.svg" alt="supprise" />
                </div>
                <div className="trust-number-text">
                  <h2>+20K</h2>
                  <p className="text-lg">Clients worldwide</p>
                </div>
              </div>
              <div className="trust-number">
                <div className="icon">
                  <img src="/img/trust/trust2.svg" alt="heart" />
                </div>
                <div className="trust-number-text">
                  <h2>95.7%</h2>
                  <p className="text-lg">Satisfied Clients</p>
                </div>
              </div>
              <div className="trust-number">
                <div className="icon">
                  <img src="/img/trust/trust3.svg" alt="smile" />
                </div>
                <div className="trust-number-text">
                  <h2>100+</h2>
                  <p className="text-lg">City around</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
