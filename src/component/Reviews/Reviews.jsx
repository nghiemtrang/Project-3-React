import "./Reviews.css";

export default function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <div className="reviews-container">
          <div className="rewviews-box">
            <div className="reviews-text">
              <div className="reviews-header">
                <h2 className="heading text-box-sm review-heading">
                  What client say
                </h2>
                <div className="reviews-btn">
                  <a className="reviews-dot" href="#" />
                  <a className="reviews-dot btn-type-2" href="#" />
                  <a className="reviews-dot" href="#" />
                </div>
              </div>
              <div className="reviews-content">
                <img
                  className="reviews-icon"
                  src="/img/Reviews/reviews-dauphay.svg"
                  alt="dau-phay"
                />
                <p className="text-lg">
                  I love Dwelling! They make it super easy and safe to find a
                  room for rent. Customer service is vary quick and helpful.
                  Highly recommend this platform. Really a great and wonderful
                  platform to find rooms and houses in quick time.
                </p>
                <div className="reviewer">
                  <img
                    className="reviewer-avatar"
                    src="/img/Reviews/Reviews-avatar.svg"
                    alt="review-avatar"
                  />
                  <div className="reviewer-info">
                    <p className="text-lg review-heading">Joe Root</p>
                    <p className="text-md">UI/UX designer</p>
                  </div>
                </div>
              </div>
            </div>
            {/* brand logo */}
            <div className="reviews-brand">
              <div className="reviews-brand-logo">
                <img
                  src="/img/Reviews/brand-logo/nerrdwallet.svg"
                  alt="nerrdwallet"
                />
                <img src="/img/Reviews/brand-logo/indeed.svg" alt="indeed" />
                <img
                  src="/img/Reviews/brand-logo/richfood.svg"
                  alt="richfood"
                />
                <img src="/img/Reviews/brand-logo/nexflix.svg" alt="nexflix" />
                <img
                  src="/img/Reviews/brand-logo/shinetsu.svg"
                  alt="shinetsu"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
