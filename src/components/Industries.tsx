const industries = [
  {
    title: "Residential",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Airbnb",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  }
];

export default function Industries() {
  return (
    <section className="industries-section">
      <div className="industries-background"></div>
      <div className="industries-overlay"></div>
      <div className="container">
        <div className="industries-text-content">
          <h2 className="industries-title">The Industries We Serve</h2>
          <p className="industries-subtitle">
            We are a firmly established commercial cleaning company that serves many household names 
            in the largest and most influential industries in America.
          </p>
        </div>
        
        <div className="industries-cards-row">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card-new">
              <div 
                className="industry-card-image-new"
                style={{
                  backgroundImage: `url(${industry.image})`
                }}
              />
              <div className="industry-card-overlay-box">
                <h3 className="industry-card-title-new">{industry.title}</h3>
                <button className="industry-learn-more-btn">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
