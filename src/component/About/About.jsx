import "./About.css";

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about-container">
          {/* about img */}
          <div className="about-images text-box-md">
            <div className="about-room-img text-box-sm">
              <img src="/img/about/about1.svg" alt="about-image" />
            </div>
            {/* avatar & info & button */}
            <div className="about-avatar">
              <div className="agent-avatar">
                <img src="/img/about/ava.svg" alt="about-avatar" />
              </div>
              <div className="agent-info">
                <p className="text-lg heading">David Warner</p>
                <p className="text-sm">Property Agent</p>
              </div>
              <div>
                <button className="btn-type-1 btn-sm text-md">Messages</button>
              </div>
            </div>
          </div>
          {/* about text */}
          <div className="about-text">
            <div className="about-text-item text-box-sm">
              <h2 className="heading about-heading">
                Providing the effective solutions for you
              </h2>
              <p className="text-lg about-content">
                Building a next-generation collaborative platform to connect
                renters, homeowners, and agents. Live the way you want.
                Beautiful homes. Incredible locations. Pricing that makes sense.
              </p>
              <div>
                <button className="btn-type-2 btn-lg text-lg">
                  More About Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
