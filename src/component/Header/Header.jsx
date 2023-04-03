import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-container">
          {/* img */}
          <div className="header-img">
            <div className="header-img-box">
              <img src="/img/header/header1.svg" alt="header image" />
              <img
                className="header-img-down"
                src="/img/header/header2.svg"
                alt="header image"
              />
              <img src="/img/header/header3.svg" alt="header image" />
              <img
                className="header-img-down"
                src="/img/header/header4.svg"
                alt="header image"
              />
            </div>
          </div>
          {/* text  */}
          <div className="header-text">
            <h1>Home is where your story begins</h1>
            <p className="text-lg">
              Building a next-generation collaborative platform to connect
              renters, homeowners, and agents. Live the way you want. Beautiful
              homes. Incredible locations. Pricing that makes sense.
            </p>
          </div>
          {/* search box */}
          <div className="header-search">
            <div className="search-box">
              <div className="search-place">
                <input
                  className="input text-md"
                  type="text"
                  placeholder="Where are you moving?"
                />
                <img src="/img/header/search.svg" alt="search" />
              </div>
              <div className="search-type">
                <input
                  className="input text-md"
                  list="place"
                  placeholder="What type of home?"
                />
                <datalist id="place">
                  <option value="A" />
                  <option value="B" />
                  <option value="C" />
                  <option value="D" />
                </datalist>
                <img src="/img/header/datalist.svg" alt="datalist" />
              </div>
              <div className="btn-box btn-type-2">
                <button className="btn-type-2 text-md">Find a home</button>
                <i className="fa-solid fa-arrow-right" />
              </div>
            </div>
            <img className="scroll" src="/img/header/Scroll.svg" alt="scroll" />
          </div>
        </div>
      </div>
    </header>
  );
}
