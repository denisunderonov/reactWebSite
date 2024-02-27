import saleImg from './image/sale.png';
import './sale.css';

export default function SaleSection() {
  return (
    <section className="sale-section">
      <ul className="section-container">
        <SaleItem text='Название акции 1' image={saleImg} />
        <SaleItem text='Название акции 1' image={saleImg} />
      </ul>
    </section>
  );
}

function SaleItem({ text, image }) {
  return (
    <li className="sale__item" style={{ backgroundImage: `url(${image})`}}>
      <div className="sale__item--saleblock">
        <p className="sale__item--undertext">{text}</p>
      </div>
    </li>
  );
}

function SaleList({ content }) {
    return <ul className="section-container">{content}</ul>
}
