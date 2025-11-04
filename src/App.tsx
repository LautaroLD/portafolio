import { lazy, Suspense } from 'react'
import LoadingSpinner from './components/LoadingSpinner'
import ScrollToTop from './components/ScrollToTop'
import ThemeToggle from './components/ThemeToggle'

// Lazy load sections for better performance
const PrincipalSection = lazy(() => import('./components/sections/PrincipalSection'))
const ProjectsSection = lazy(() => import('./components/sections/ProjectsSection'))
const ContactSection = lazy(() => import('./components/sections/ContactSection'))

function App() {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <main className='flex min-h-dvh flex-col'>
          <PrincipalSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </Suspense>
      <ScrollToTop />
      <ThemeToggle />
    </>
  )
}

export default App
