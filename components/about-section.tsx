export function AboutSection() {
  return (
    <section className="py-16 bg-[var(--bg-alt)]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-24 h-px bg-[var(--divider-dark)] mx-auto mb-8"></div>

          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-8">About the Podcast</h2>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <p className="text-[var(--text)] leading-relaxed mb-4">
                In a world growing increasingly complex and fast-paced, we all need a place to pause and reflect. The
                Emergency Exit offers that space - a light-hearted but deep-minded podcast that throws open the magic
                chamber on important issues and poetry.
              </p>
              <p className="text-[var(--text)] leading-relaxed">
                Host Onaissa invites you into a world that feels both intimate and expansive, where stories unfold with
                care and poetry flows with purpose. Each episode is crafted to spark curiosity, inspire reflection, and
                remind us of the beauty that exists in both struggle and triumph.
              </p>
            </div>
            <div>
              <p className="text-[var(--text)] leading-relaxed mb-4">
                From thought-provoking conversations about contemporary issues to the gentle rhythm of spoken word, The
                Emergency Exit creates a sanctuary for minds seeking both entertainment and enlightenment.
              </p>
              <p className="text-[var(--text)] leading-relaxed">
                Whether you're commuting, taking a walk, or simply need a moment to breathe, let us be your companion on
                this journey of discovery. Welcome to your emergency exit from the ordinary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
