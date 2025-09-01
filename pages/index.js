import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import SectorCards from '../components/SectorCards'
import LeadForm from '../components/LeadForm'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SectorCards />
      <LeadForm />
      <Footer />
    </div>
  )
}