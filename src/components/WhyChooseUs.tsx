const features = [
  {
    icon: "💻",
    title: "Technology",
    description: "We utilize state-of-the-art technology to give you a cleaner clean."
  },
  {
    icon: "💬",
    title: "Communication",
    description: "Self-service web portal and mobile app make communication a breeze."
  },
  {
    icon: "❤️",
    title: "Customer Care",
    description: "Our responsive team proactively serves the needs of every one of our clients."
  },
  {
    icon: "✅",
    title: "Quality Assurance",
    description: "Our custom reporting tools monitor and improve service delivery."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us-section">
      <div className="why-choose-us-background"></div>
      <div className="why-choose-us-overlay"></div>
      <div className="container">
        <div className="why-choose-us-content">
          {/* Left Column - Main Heading */}
          <div className="why-choose-us-text">
            <h2 className="why-choose-us-title">A Deep Commitment to Quality Cleaning Services</h2>
          </div>
          
          {/* Right Column - Feature Cards Grid */}
          <div className="why-choose-us-cards">
            {features.map((feature, index) => (
              <div key={index} className="why-choose-card">
                <div className="why-choose-card-icon">{feature.icon}</div>
                <div className="why-choose-card-content">
                  <h3 className="why-choose-card-title">{feature.title}</h3>
                  <p className="why-choose-card-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}