import "./shop-list.css";

export default function ShopListSection() {
  return (
    <section className="shop-list-section">
      <nav className="shop-list-container">
        <ShopList
          content={
            <>
              <ShopListItem text="Сноуборд" />
              <ShopListItem text="Сноуборд" />
              <ShopListItem text="Сноуборд" />
              <ShopListItem text="Сноуборд" />
              <ShopListItem text="Сноуборд" />
              <ShopListItem text="Сноуборд" />
              <ShopListItem text="Сноуборд" />
              <ShopListItem text="Сноуборд" />
              <ShopListItem text="Сноуборд" />
              <ShopListItem text="Сноуборд" />
              <ShopListItem text="Сноуборд" />
              <ShopListItem text="Сноуборд" />
              <ShopListItem text="Сноуборд" />
            </>
          }
        />
      </nav>
    </section>
  );
}

function ShopListItem({ text }) {
  return <li className="shop-list__item"><a href="#">{text}</a></li>;
}

function ShopList({ content }) {
  return <ul className="shop-list">{content}</ul>;
}
