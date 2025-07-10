import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-white via-[#f8f7f3] to-[#faf3e5]">
      {/* Asymmetrical gradient elements */}
      <div className="absolute -left-48 -top-48 h-96 w-96 rounded-full bg-[#c8e6c9]/20 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-[#705d00]/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-[#faf3e5]/40 blur-3xl"></div>

      {/* Contact link */}
      <div className="absolute right-8 top-8 z-10 flex gap-3">
        <Link
          href="mailto:sean@laters.life"
          className="rounded-md border border-stone-600/20 bg-stone-600/10 px-4 py-2 font-medium text-stone-800 backdrop-blur-sm transition-colors hover:bg-stone-600/20"
        >
          Contact
        </Link>
        <Link
          href="/support"
          className="rounded-md border border-stone-600/20 bg-stone-600/10 px-4 py-2 font-medium text-stone-800 backdrop-blur-sm transition-colors hover:bg-stone-600/20"
        >
          Support
        </Link>
      </div>

      {/* Main content */}
      <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <img 
          src="/icon.png" 
          alt="Laters.life Logo" 
          className="mb-6 h-20 w-auto md:h-24"
        />
        <h1 className="font-serif text-6xl font-bold tracking-tight text-stone-800 md:text-8xl">laters.life</h1>
        <p className="mt-6 text-xl font-light text-stone-700/90">Craft and Share heartfelt messages that transcend time</p>
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
          className="text-sm text-stone-600/80 hover:text-stone-600 transition-colors"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  )
}

