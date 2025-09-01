export default function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="container text-center py-24">
        <h1 className="text-5xl font-heading font-bold mb-6">Fuel Your Team. Elevate Wellness.</h1>
        <p className="text-lg mb-8">Corporate • Schools • Fitness • Healthcare • Events — New Orleans & Mobile</p>
        <div className="flex justify-center gap-4">
          <a className="bg-brand-red text-white px-6 py-3 rounded-lg font-heading" href="#contact">Book a Consultation</a>
          <a className="border border-brand-red text-brand-red px-6 py-3 rounded-lg font-heading" href="#contact">Get a Free Quote</a>
        </div>
      </div>
    </section>
  )
}