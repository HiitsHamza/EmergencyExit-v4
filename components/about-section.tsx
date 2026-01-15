import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-16 bg-[var(--bg-alt)]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-8 md:gap-10 mb-8">
            <span className="h-0.5 w-48 md:w-80 lg:w-96 bg-[#64748b] rounded-full" />
            <span className="inline-flex items-center justify-center">
              <Image
                src="/logo bit.svg"
                alt=""
                width={48}
                height={48}
                className="w-12 h-12 md:w-16 md:h-16"
                style={{ filter: 'brightness(0.8) contrast(1.2)' }}
              />
            </span>
            <span className="h-0.5 w-48 md:w-80 lg:w-96 bg-[#64748b] rounded-full" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-8">About the Podcast</h2>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <p className="text-[var(--text)] leading-relaxed mb-4 text-right">
                In a world growing increasingly complex and fast-paced, we all need a place to pause and reflect. The
                Emergency Exit offers that space - a light-hearted but deep-minded podcast that throws open the magic
                chamber on important issues and poetry.
              </p>
              <p className="text-[var(--text)] leading-relaxed mb-4 text-right">
                From thought-provoking conversations about contemporary issues to the gentle rhythm of spoken word, The
                Emergency Exit creates a sanctuary for minds seeking both entertainment and enlightenment.
              </p>
            </div>
            <div>
              <p className="text-[var(--text)] leading-relaxed mb-4">
                Host Onaissa invites you into a world that feels both intimate and expansive, where stories unfold with
                care and poetry flows with purpose. Each episode is crafted to spark curiosity, inspire reflection, and
                remind us of the beauty that exists in both struggle and triumph.
              </p>
              <p className="text-[var(--text)] leading-relaxed mb-4">
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
