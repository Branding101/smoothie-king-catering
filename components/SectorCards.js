export default function SectorCards() {
  const sectors = [
    { name: "Corporate Wellness", link: "/corporate" },
    { name: "Schools & Education", link: "/schools" },
    { name: "Fitness & Gyms", link: "/fitness" },
    { name: "Healthcare & Medical", link: "/healthcare" },
    { name: "Hospitality & Events", link: "/events" },
  ]
  return (
    <section className="container py-16">
      <h2 className="text-3xl font-heading mb-8 text-center">Who We Serve</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {sectors.map(s => (
          <a key={s.name} href={s.link} className="border rounded-lg shadow hover:shadow-lg transition p-6 text-center no-underline">
            <div className="font-heading">{s.name}</div>
          </a>
        ))}
      </div>
    </section>
  )
}