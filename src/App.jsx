import Hero from "./components/Hero"
import Result from "./components/Result"
import Tips from "./components/Tips"
import Limitation from "./components/Limitation"

function App() {
  return (
    <main className="mx-auto w-sm pb-20 md:w-3xl lg:w-[1440px]">
      <Hero />
      <Result />
      <Tips />
      <Limitation />
    </main>
  )
}

export default App
