import About from "./component/About/About";
import CTA from "./component/CTA/CTA";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import Property from "./component/Property/Property";
import Reviews from "./component/Reviews/Reviews";
import Service from "./component/Service/Service";
import Trust from "./component/Trust/Trust";

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Header />
        <Trust />
        <About />
        <Property />
        <Service />
        <Reviews />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
