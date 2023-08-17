/* eslint-disable import/named */
import { Footer, Navbar } from '../components';
import { Explore, Shop, Hero, WhatsNew, News } from '../sections';

const Home = () => (
  <div className="bg-primary-white overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <div className="gradient-03 z-0" />
      <Explore />
      <Shop />
    </div>
    <div className="relative">
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <div className="relative">
      <News />
    </div>
    <Footer />
  </div>
);

export default Home;
