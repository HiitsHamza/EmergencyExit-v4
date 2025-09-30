export function BehindTheMic() {
  return (
    <section className="py-16 bg-[var(--bg-alt)]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-8 text-center">Behind the Mic</h2>

          <div className="relative">
            {/* Frame Container */}
            <div className="relative bg-[var(--brand-primary)] rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image Placeholder */}
                <div className="relative">
                  <div className="aspect-square bg-[var(--surface)] rounded-full flex items-center justify-center">
                    <div className="w-24 h-24 bg-[var(--muted)] rounded-full flex items-center justify-center">
                      <span className="text-[var(--text)] text-sm">Host Photo</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-white">
                  <p className="leading-relaxed mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </p>
                  <p className="leading-relaxed mb-4">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                  </p>
                  <p className="leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
