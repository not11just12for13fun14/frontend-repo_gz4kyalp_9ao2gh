import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CollectionGrid from './components/CollectionGrid'
import Editorial from './components/Editorial'
import ShopByCategory from './components/ShopByCategory'
import ScrollReveal from './components/ScrollReveal'
import ShopTheLook from './components/ShopTheLook'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-neutral-900">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <CollectionGrid />
        <ScrollReveal />
        <Editorial />
        <ShopByCategory />
        <ShopTheLook />
      </main>
      <Footer />
    </div>
  )
}

export default App
