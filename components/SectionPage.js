import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function SectionPage({ title, subtitle, bullets=[] }) {
  return (
    <div>
      <Navbar />
      <section className="bg-gray-50">
        <div className="container py-16">
          <h1 className="text-4xl font-heading font-bold mb-3">{title}</h1>
          {subtitle && <p className="text-lg mb-6">{subtitle}</p>}
          <div className="grid md:grid-cols-2 gap-6">
            {bullets.map((b, i) => (
              <div key={i} className="border rounded-lg p-6 shadow-sm">
                <h3 className="font-heading text-xl mb-2">{b.title}</h3>
                <p>{b.copy}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a href="/#contact" className="bg-brand-red text-white px-6 py-3 rounded-lg font-heading">Book a Consultation</a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}