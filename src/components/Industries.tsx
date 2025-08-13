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
    <section className="section section-primary">
      <div className="container">
        <div className="text-center mb-2xl">
          <h2 className="heading-2">The Industries We Serve</h2>
          <p className="body-text" style={{ maxWidth: '800px', margin: '0 auto' }}>
            We are a firmly established commercial cleaning company that serves many household names 
            in the largest and most influential industries in America.
          </p>
        </div>
        
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card">
              <div 
                className="industry-card-image"
                style={{
                  backgroundImage: `url(${industry.image})`
                }}
              />
              <div className="industry-card-content">
                <h3 className="heading-3">{industry.title}</h3>
                <a href="#" className="learn-more-btn">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
