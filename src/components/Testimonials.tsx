import Script from "next/script";

export default function Testimonials() {
  return (
    <section className="section section-gray">
      <div className="container">
        <div className="text-center mb-2xl">
          <h2 className="heading-2">Personal Endorsements from Satisfied Customers</h2>
          <p className="body-text text-secondary" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Don&apos;t just take our word for it. Here&apos;s what our valued clients have to say about Yeshua Cleaning&apos;s services.
          </p>
        </div>
        
        <div className="reviews-widget-container">
          <Script 
            src="https://reputationhub.site/reputation/assets/review-widget.js"
            strategy="afterInteractive"
          />
          <iframe 
            className="embedded_reviews_widget" 
            src="https://reputationhub.site/reputation/widgets/review_widget/dIR65OesFgKY03WTP30z?widgetId=689cececaecf3e3f5e844926" 
            frameBorder="0" 
            scrolling="no" 
            style={{ minWidth: '100%', width: '100%', height: '400px', border: 'none' }}
          />
        </div>
      </div>
    </section>
  );
}
