const services = [
  {
    title: "Commercial Cleaning",
    description: "Comprehensive office and workspace cleaning solutions",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Imperial Shield",
    description: "Advanced disinfection and protection services",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Day or Night Cleaning",
    description: "Flexible scheduling to fit your business needs",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Floor Cleaning",
    description: "Professional floor care and maintenance",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Emergency Services",
    description: "24/7 rapid response cleaning solutions",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Green Cleaning",
    description: "Eco-friendly and sustainable cleaning practices",
    image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  }
];

export default function Services() {
  return (
    <section className="services-horizontal-section">
      <div className="services-background-overlay"></div>
      <div className="container">
        <div className="services-horizontal-content">
          <div className="services-text-section">
            <div className="eyebrow">SERVICES</div>
            <h2 className="services-title">First-Class Cleaning and Disinfecting Services</h2>
            <p className="services-description">
              At Imperial Cleaning, we take great care in making you look great. 
              Our comprehensive professional commercial cleaning and disinfecting services for businesses are second-to-none.
            </p>
            <div className="services-buttons">
              <button className="btn btn-primary">VIEW ALL OUR SERVICES</button>
              <button className="btn btn-outline services-btn-outline">RESIDENTIAL SERVICES. LEARN MORE</button>
            </div>
          </div>
          
          <div className="services-cards-horizontal">
            {services.slice(0, 6).map((service, index) => (
              <div key={index} className="service-card-horizontal">
                <div 
                  className="service-card-image-horizontal"
                  style={{
                    backgroundImage: `url(${service.image})`
                  }}
                />
                <div className="service-card-title-horizontal">
                  <h3>{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
