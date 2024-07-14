import Header from "./components/Header"
import Intro from "./components/Intro"
import Testimonials from "./components/Testimonials"
import Pricing from "./components/Pricing"
import Footer from "./components/Footer"
import Features from "./components/Features"

function App() {

  return (
    <div className="px-2.5 py-4 flex flex-col gap-10">
      <Header></Header>
      <Intro></Intro>
      <Testimonials></Testimonials>
      <Pricing></Pricing>
      <Features></Features>
      <Footer></Footer>
    </div>
  )
}

export default App
