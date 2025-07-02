import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      {/* Asymmetrical gradient elements */}
      <div className="absolute -left-48 -top-48 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-yellow-500/20 blur-3xl"></div>

      {/* Contact link */}
      <div className="absolute right-8 top-8 z-10">
        <Link
          href="mailto:sean@laters.life"
          className="rounded-md border border-white/20 bg-white/10 px-4 py-2 font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        >
          Contact
        </Link>
      </div>

      {/* Main content */}
      <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <h1 className="font-serif text-6xl font-bold tracking-tight text-white md:text-8xl">laters.life</h1>
        <p className="mt-6 text-xl font-light text-white/80">Love Never Dies: Private Afterlife Messaging</p>
        <div className="mt-8 flex items-center justify-center gap-6">
          <Link href="#" className="transition-transform hover:scale-105">
            <img 
              src="/apple-store.svg" 
              alt="Download on the App Store" 
              className="h-12 w-auto md:h-14"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </Link>
          <Link href="#" className="transition-transform hover:scale-105">
            <img 
              src="/google-play.svg" 
              alt="Get it on Google Play" 
              className="h-12 w-auto md:h-14"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 left-0 right-0 z-10 text-center">
        <Link
          href="/privacy-policy.html"
          className="text-sm text-white/60 hover:text-white/80 transition-colors"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  )
}

