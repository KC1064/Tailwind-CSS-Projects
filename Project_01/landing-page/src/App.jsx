import Body from "./components/Body"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {

  return (
    <div className="bg-amber-100 min-h-svh md:flex md:flex-col md:gap-16 md:justify-between ">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default App
