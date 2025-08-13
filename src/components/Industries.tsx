const industries = [
  {
    title: "Luxury Retail",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Medical Facilities",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Office Buildings",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Private Schools",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Financial",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
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
