const features = [
  {
    icon: "💻",
    title: "Technology",
    description: "We utilize state-of-the-art technology to give you a cleaner clean."
  },
  {
    icon: "💬",
    title: "Communication",
    description: "Imperial Cleaning's self-service web portal and mobile app make communication a breeze."
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
    <section className="section section-white">
      <div className="container">
        <div className="features-container">
          <div>
            <div className="eyebrow">WHY CHOOSE US</div>
            <h2 className="heading-2">A Deep Commitment to Quality Cleaning Services</h2>
            <p className="body-text text-secondary">
              Our dedication to excellence, cutting-edge technology, and personalized service 
              sets us apart as the premier choice for commercial cleaning solutions.
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="heading-3">{feature.title}</h3>
                <p className="body-text-sm mb-0">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
