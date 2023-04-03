import "./CTA.css";

export default function CTA() {
  return (
  <section className="CTA">
  <div className="container">
    <div className="CTA-container">
      <div className="CTA-images">
        <img className="CTA-img" src="/img/CTA/CTA1.svg" alt ="CTA1" />
        <img className="CTA-img" src="/img/CTA/CTA2.svg " alt="CTA2" />
      </div>
      <div className="CTA-content text-box-sm">
        <h2 className="heading">Ready to find your dream home?</h2>
        <p className="text-lg">
          Building a next-generation collaborative platform to connect
          renters, homeowners, and agents. Live the way you want. Beautiful
          homes.
        </p>
        <button className="CTA-btn btn-lg btn-type-2 text-lg">Find Home</button>
        <button className="CTA-btn btn-lg btn-type-1 text-lg">
          Contact us
        </button>
      </div>
    </div>
  </div>
</section>

  );
}
