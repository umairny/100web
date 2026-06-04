import { Link } from 'react-router-dom'
import { AnimatedSection, Container, CTAButton } from '../components'

export function NotFound() {
  return (
    <main className="min-h-[calc(100vh-64px)] flex items-center">
      <Container className="w-full text-center py-20">
        <AnimatedSection animation="scale-in">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist yet. But check back soon for more designs!
        </p>
        <Link to="/">
          <CTAButton size="lg">
            ← Back to Home
          </CTAButton>
        </Link>
        </AnimatedSection>
      </Container>
    </main>
  )
}
