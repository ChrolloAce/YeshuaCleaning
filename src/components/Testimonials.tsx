const testimonials = [
  {
    quote: "Imperial Cleaning has been our trusted partner for over 5 years. Their attention to detail and professional service is unmatched. They consistently exceed our expectations.",
    author: "Michael Thompson",
    company: "Tarlow & Co., CPA"
  },
  {
    quote: "The team at Imperial Cleaning goes above and beyond every single day. Our office has never looked better, and our employees notice the difference in air quality and cleanliness.",
    author: "Joyce Chen",
    company: "Financial Services Corp"
  },
  {
    quote: "Professional, reliable, and thorough. Imperial Cleaning delivers exactly what they promise, every single time. Their green cleaning approach aligns perfectly with our values.",
    author: "Alla Garcia",
    company: "Medical Practice Group"
  }
];

export default function Testimonials() {
  return (
    <section className="section section-gray">
      <div className="container">
        <div className="text-center mb-2xl">
          <h2 className="heading-2">Personal Endorsements from Satisfied Customers</h2>
          <p className="body-text text-secondary" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Don&apos;t just take our word for it. Here&apos;s what our valued clients have to say about our services.
          </p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-quote">&ldquo;{testimonial.quote}&rdquo;</div>
              <div className="testimonial-author">{testimonial.author}</div>
              <div className="testimonial-company">{testimonial.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
