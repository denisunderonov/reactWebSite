import "./Header.css";
import vector from "./header-img/vector.svg";
import tick from "./header-img/tick.svg";
import car from "./header-img/car.svg";
import backup from "./header-img/backup.svg";
import accountSVG from "./header-img/account.svg";
import creditCard from "./header-img/credit-card.svg";
import headerLogo from "./header-img/logo.png";

export default function Header() {
  return (
    <header>
      <div className="header__upper-block">
        <div className="header-upper-container">
          <nav className="header__blocks-container">
            <div className="header__geolocation">
              <button className="header__geolocation--icon">
                <img src={vector} alt="" />
              </button>
              <p className="header__geolocation--city">
                Ваш регион доставки: Москва
              </p>
              <button className="header__geolocation--choose-mark">
                <img src={tick} alt="" />
              </button>
            </div>
            <HeaderNavigation
              content={
                <>
                  <HeaderNavigationItem navText="Магазины" />
                  <HeaderNavigationItem navText="Помощь" />
                  <HeaderNavigationItem navText="Блоги" />
                </>
              }
            />
          </nav>
          <HeaderShop
            content={
              <>
                <HeaderShopItem
                  shopImage={car}
                  shopText="Бесплатная доставка *"
                />
                <HeaderShopItem
                  shopImage={creditCard}
                  shopText="Оплата при получении"
                />
                <HeaderShopItem
                  shopImage={backup}
                  shopText="Возврат в течение 14 дней"
                />
              </>
            }
          />
        </div>
      </div>
      <div className="header__down-block">
        <div className="header-down-container">
          <HeaderGender
            content={
              <>
                <HeaderGenderItem text="Мужчинам" />
                <HeaderGenderItem text="Женщинам" />
                <HeaderGenderItem text="Детям" />
              </>
            }
          />
          <img className="header__logo" src={headerLogo} />
          <HeaderAccount
            content={
              <>
                <HeaderAccountItem image={accountSVG} text="Войти" />
                <HeaderAccountItem image={accountSVG} text="Избранное" />
                <HeaderAccountItem image={accountSVG} text="Корзина" />
                <HeaderAccountItem image={accountSVG} text="Поиск" />
              </>
            }
          />
        </div>
      </div>
    </header>
  );
}

function HeaderNavigationItem({ navText }) {
  return (
    <li className="header__navigation--item">
      <a href="#">{navText}</a>
    </li>
  );
}

function HeaderShopItem({ shopImage, shopText }) {
  return (
    <li className="header__shop--item">
      <img src={shopImage} className="header__shop--image" />
      <p className="header__shop--text">{shopText}</p>
    </li>
  );
}

function HeaderGenderItem({ text }) {
  return <li className="header__gender-navigation--item">{text}</li>;
}

function HeaderAccountItem({ image, text }) {
  return (
    <li className="header__account--item">
      <img className="header__account--img" src={image} />
      <p className="header__account--text">{text}</p>
    </li>
  );
}

function HeaderAccount({ content }) {
  return <ul className="header__account">{content}</ul>;
}

function HeaderGender({ content }) {
  return <ul className="header__gender-navigation">{content}</ul>;
}

function HeaderShop({ content }) {
  return <ul className="header__shop">{content}</ul>;
}

function HeaderNavigation({ content }) {
  return <ul className="header__navigation">{content}</ul>;
}
