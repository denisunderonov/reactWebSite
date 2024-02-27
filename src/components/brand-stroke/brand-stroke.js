import "./brand-stroke.css";
import brImage from './images/brand.png'

export default function BrandSection() {
  return (
    <section className="brand-section">
      <ul className="brand-section-container">
        <BrandImage image={brImage} />
        <BrandImage image={brImage} />
        <BrandImage image={brImage} />
        <BrandImage image={brImage} />
        <BrandImage image={brImage} />
        <BrandImage image={brImage} />
        <BrandImage image={brImage} />
        <BrandImage image={brImage} />
      </ul>
    </section>
  );
}

function BrandImage({image}) {
  return (
    <li className="brand-section__item">
      <img className="brand_section__image" src={image} />
    </li>
  );
}
