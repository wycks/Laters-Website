import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-white via-[#f8f7f3] to-[#faf3e5]">
      {/* Asymmetrical gradient elements */}
      <div className="absolute -left-48 -top-48 h-96 w-96 rounded-full bg-[#c8e6c9]/20 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-[#705d00]/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-[#faf3e5]/40 blur-3xl"></div>

      {/* Navigation */}
      <div className="absolute left-8 top-8 z-10">
        <Link
          href="/"
          className="rounded-md border border-stone-600/20 bg-stone-600/10 px-4 py-2 font-medium text-stone-800 backdrop-blur-sm transition-colors hover:bg-stone-600/20"
        >
          ← Back
        </Link>
      </div>

      {/* Main content */}
      <div className="flex min-h-screen flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-4xl">
          
          {/* Google Form Embed - Clean Version */}
          <div className="relative w-full overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm p-6 shadow-2xl border border-stone-200/50">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdSJ0NG-a64vZUmD9HI_fTp6QyAZ-7puwgs_qiMFGAsdEXsNw/viewform?embedded=true&usp=pp_url"
              width="100%"
              height="1200"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Contact Form"
              className="google-form-iframe min-h-[400px] w-full rounded-lg"
              style={{
                border: 'none',
                overflow: 'hidden',
                backgroundColor: 'transparent'
              }}
            >
              Loading…
            </iframe>
          </div>
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