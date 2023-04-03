import "./Service.css";

export default function Service() {
  return (
    <section className="service">
      <div className="container">
        <div className="service-container">
          <div className="service-content text-box-sm">
            <h2 className="heading">What we give you</h2>
            <p className="text-lg">
              Building a next-generation collaborative platform to connect
              renters, homeowners, and agents.
            </p>
          </div>
          <div>
            <img src="/img/video-service.svg" alt="video" />
          </div>
        </div>
      </div>
    </section>
  );
}
