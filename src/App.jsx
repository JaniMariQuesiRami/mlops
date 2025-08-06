import Navbar from './components/Navbar'
import Section from './components/Section'
import { content } from './data/content'

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto p-4 space-y-16">
        <Section id="proyectos" title="Proyectos" items={content.proyectos} />
        <Section id="laboratorios" title="Laboratorios" items={content.laboratorios} />
        <Section id="casos" title="Casos de Estudio" items={content.casos} />
        <Section id="talleres" title="Talleres" items={content.talleres} />
      </main>
    </>
  )
}

export default App
