import ServiceBox from "./ServiceBox";
import Title from "./Title";
export default function Services() {
  return (
    <div className="py-5 section" id="services">
      <div className="custom-container">
        <Title name="my services" />
        <p className="text-white my-3">
          Tailored Solutions to Meet Your Development Needs
        </p>
        <div className="row">
          <ServiceBox>
            <i class="fa-solid fa-gear custom-text-secondary third-font-size"></i>
          </ServiceBox>
          <ServiceBox>
            <i class="fa-solid fa-code custom-text-secondary third-font-size"></i> 
          </ServiceBox>
          <ServiceBox>
            <i class="fa-solid fa-code custom-text-secondary third-font-size"></i> 
          </ServiceBox>
        </div>
      </div>
    </div>
  );
}
