import React from "react";

export default function Contact() {
  return (
    <section className="bg-[var(--bg-primary)] text-[var(--text-primary)] py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--accent-pitch)] mb-8">
          🧢 Dressing Room
        </h2>
        <p className="text-lg text-[var(--text-secondary)] mb-12">
          Whether you're looking for a cricketing partner in code or just want to say hi, drop a message below — the pavilion's open!
        </p>

        <form
          action="https://formspree.io/f/YOUR_FORM_ID" // Replace with your Formspree or backend endpoint
          method="POST"
          className="grid gap-6 text-left"
        >
          <div>
            <label className="block mb-1 font-medium text-[var(--text-primary)]">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 rounded-md border border-[var(--border-default)] bg-[var(--bg-card)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-cricket)]"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-[var(--text-primary)]">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-md border border-[var(--border-default)] bg-[var(--bg-card)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-cricket)]"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-[var(--text-primary)]">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 rounded-md border border-[var(--border-default)] bg-[var(--bg-card)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-cricket)]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[var(--accent-cricket)] text-white px-6 py-3 rounded-md font-semibold hover:bg-[var(--accent-code)] transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
