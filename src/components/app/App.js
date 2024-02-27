import "./App.css";
import Header from "../header/Header";
import Main from "../main/Main";
import ShopListSection from "../shop-list/shop-list";
import MainSliderSection from "../main-slider/main-slider";
import BrandSection from "../brand-stroke/brand-stroke";
import SaleSection from "../sale/sale";

function App() {
  return (
    <>
      <Header />
      <Main
        content={
          <>
            <ShopListSection />
            <MainSliderSection />
            <BrandSection />
            <SaleSection />
          </>
        }
      />
    </>
  );
}

export default App;
