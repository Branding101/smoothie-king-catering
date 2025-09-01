export default function LeadForm() {
  return (
    <section id="contact" className="bg-gray-100">
      <div className="container py-16">
        <h2 className="text-3xl font-heading mb-6 text-center">Get a Free Consultation</h2>
        <form className="max-w-2xl mx-auto grid grid-cols-1 gap-4">
          <input type="text" placeholder="Your Name" className="border rounded-lg p-3" />
          <input type="email" placeholder="Your Email" className="border rounded-lg p-3" />
          <textarea placeholder="How can we help?" className="border rounded-lg p-3" rows="4"></textarea>
          <button type="submit" className="bg-brand-red text-white px-6 py-3 rounded-lg font-heading">Submit</button>
        </form>
      </div>
    </section>
  )
}