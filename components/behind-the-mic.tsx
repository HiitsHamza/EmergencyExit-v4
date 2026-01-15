import Image from "next/image"
import Link from "next/link"

export function BehindTheMic() {
  return (
    <section className="py-16 bg-[var(--bg)]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main card container */}
          <div className="relative bg-[#e8eaef] rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0 lg:gap-8 items-stretch">
              {/* Left side - Content */}
              <div className="p-6 md:p-8 lg:p-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#181e3a] mb-4 md:mb-6">
                  Behind the Mic
                </h2>
                <div className="text-[#181e3a] leading-relaxed space-y-4 text-sm md:text-base">
                  <p className="italic text-[#181e3a]/80">
                    It has been said about her that &apos;Batman is afraid of her… I trust her to pilot the Millennium Falcon without hesitation.&apos;
                  </p>
                  <p>
                    Who am I is a question that I have always found hard to answer. Over the years, I have morphed and become many startling things; I am every character I have encountered in the thousands of stories I have read and lived and felt. I make but I also break.<br />
                    I paint, I write, I sing.
                  </p>
                  <p>
                    I handwrite letters to our two sons on aged paper, both in Victorian English and in Urdu. I adore emotion; every messy, hardy, embracing kind. My passions are many — discovering meaning in words, a weekend drive in a tiny red convertible with the love of my life, devouring a book while I cook a mean rib.
                  </p>
                  <p className="hidden lg:block">
                    I am a mother who rejoices in the growing lives of our sons, a mentor who is keenly sought after, a loyal friend to a rare few. I am a woman through and through, loving my bling and an occasional rom-com or a gothic flick. Sometimes I wonder if I am a real person even?
                  </p>
                </div>
                <Link 
                  href="/about"
                  className="inline-block mt-6 px-8 py-3 bg-[#181e3a] text-white font-medium rounded-full hover:bg-[#181e3a]/90 transition-colors"
                >
                  Learn more about me
                </Link>
              </div>

              {/* Right side - Decorative element with image */}
              <div className="relative min-h-[250px] md:min-h-[300px] lg:min-h-[400px]">
                {/* Navy blue shape - simple rectangle on mobile/tablet */}
                <div className="absolute inset-0 bg-[#181e3a] lg:hidden" />
                
                {/* Blue border chevron - outermost, behind white */}
                <div 
                  className="absolute hidden lg:block bg-[#181e3a]"
                  style={{
                    top: '-88px',
                    bottom: '-88px',
                    left: '-88px',
                    right: '0',
                    clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 20% 100%, 0% 50%)'
                  }}
                />
                
                {/* Background-matching border chevron - same thickness as blue */}
                <div 
                  className="absolute hidden lg:block bg-[#e8eaef]"
                  style={{
                    top: '-44px',
                    bottom: '-44px',
                    left: '-44px',
                    right: '0',
                    clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 20% 100%, 0% 50%)'
                  }}
                />
                
                {/* Navy blue chevron shape - desktop only */}
                <div 
                  className="absolute inset-0 bg-[#181e3a] hidden lg:block"
                  style={{
                    clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 20% 100%, 0% 50%)'
                  }}
                />

                {/* Circular frame with host image - highest z-index */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="relative">
                    {/* Gray border ring */}
                    <div className="w-40 h-40 md:w-50 md:h-50 lg:w-[32rem] lg:h-[32rem] rounded-full border-[5px] lg:border-[12px] border-gray-300 flex items-center justify-center overflow-hidden bg-[#181e3a]">
                      {/* Host image */}
                      <Image
                        src="/host1.jpeg"
                        alt="Host"
                        width={576}
                        height={576}
                        className="w-full h-full object-cover"
                        style={{
                          objectPosition: '80% 0%', // Adjust position: horizontal%, vertical% (lower % = show top of image)
                          transform: 'scale(1.15)', // Adjust zoom: 1.0 = normal, 1.2 = 120% zoom, etc.
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
