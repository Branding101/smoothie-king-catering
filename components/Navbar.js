export default function Navbar() {
  return (
    <nav className="container flex justify-between items-center py-5">
      <div className="text-2xl font-heading text-brand-red">Smoothie King Catering</div>
      <div className="hidden md:flex gap-6 font-heading">
        <a href="/corporate">Corporate</a>
        <a href="/schools">Schools</a>
        <a href="/fitness">Fitness</a>
        <a href="/healthcare">Healthcare</a>
        <a href="/events">Events</a>
      </div>
      <a href="/#contact" className="bg-brand-red text-white px-4 py-2 rounded-lg font-heading">Book a Consultation</a>
    </nav>
  )
}