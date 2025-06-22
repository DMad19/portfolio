export default function Blog() {
  return (
    <section className="bg-[var(--bg-primary)] text-[var(--text-primary)] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--accent-code)] mb-12">
          🗣️ Commentary Box
        </h2>

        <div className="space-y-10">
          {/* Replace this with your embed code from LinkedIn */}
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:7318483172562739201"
            height="300"
            width="100%"
            frameborder="0" 
            allowfullscreen=""
            title="LinkedIn post on client side pagination">
          </iframe>
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:7117928873324933121"
            height="600"
            width="100%"
            frameBorder="0"
            allowFullScreen=""
            title="LinkedIn Post"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
