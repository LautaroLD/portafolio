import ContactSection from './components/sections/ContactSection'
import PrincipalSection from './components/sections/PrincipalSection'
import ProjectsSection from './components/sections/ProjectsSection'

function App() {
  return (
    <main className='flex min-h-dvh flex-col'>
      <PrincipalSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}

export default App
