import Image from "next/image"

export function HostProfile() {
  return (
    <section className="py-16 bg-[#f5f5f5] relative overflow-hidden">
      {/* Decorative diagonal stripe - coming from right, fades to left */}
      <div 
        className="absolute pointer-events-none"
        style={{
          top: '35%',
          right: '-10%',
          width: '120%',
          height: '180px',
          background: 'linear-gradient(to left, #e8eaef 0%, #e8eaef 30%, transparent 45%)',
          transform: 'rotate(340deg)',
          clipPath: 'polygon(100% 10%, 100% 80%, 0% 45%, 0% 55%)',
          zIndex: 0,
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[auto_1fr] gap-12 items-center">
            {/* Left side - Large circular image (semi-circle visible) */}
            <div className="hidden lg:block relative h-[900px] w-[500px]">
              <div className="absolute top-1/2 -translate-y-1/2 -left-[400px]">
                {/* Blue border */}
                <div className="w-[900px] h-[900px] rounded-full border-[12px] border-[#181e3a] overflow-hidden">
                  <Image
                    src="/host2.jpeg"
                    alt="Onaissa - Host of The Emergency Exit"
                    width={900}
                    height={900}
                    className="w-full h-full object-cover"
                    style={{
                      transform: 'scaleX(-1)'
                    }}
                  />
                </div>
              </div>
            </div>
            
            {/* Mobile - Full circle visible */}
            <div className="flex justify-center lg:hidden mb-8">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-full border-[6px] border-[#181e3a] overflow-hidden">
                <Image
                  src="/host2.jpeg"
                  alt="Onaissa - Host of The Emergency Exit"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  style={{
                    transform: 'scaleX(-1)'
                  }}
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="text-center lg:text-right max-w-1xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#181e3a] mb-8">
                Host Profile
              </h2>
              
              <div className="text-[#181e3a] leading-relaxed space-y-5 text-base md:text-lg">
                <p className="italic text-[#181e3a]/80 text-xl md:text-2xl font-medium">
                  Imagination is the only deity I worship.
                </p>
                
                <p>
                  This is why Literature is an all-consuming, life-long calling for me. After winding my way through journalistic writing and advertising conceptualising, I have found my true element in the vibrancy of a Literature classroom. I thrive in learning new things, sharing knowledge and experiencing the elegance and unexpectedness in poetry, drama and novels.
                </p>
                
                <p>
                  It is a privilege to partake in the youthful energies, quirky wit and unbound curiosity of my young students. There is something so precious and peerless in a teacher-student relationship that it never ceases to surprise me: so many years after they have left my classroom, they remain in touch and pop up on a nippy December evening to meet me.
                </p>
                
                <p>
                  Education is my field, and I, a respected professional in my trade. Currently the Head of the Literature Department at Karachi Grammar School, I have been teaching Literature In English in the public and private sector for more than two decades. I still feel alive and like a rookie when I enter any classroom.
                </p>
                
                <p>
                  I get asked a lot why I teach? It's very simple really: when the outside world is falling apart, in my classroom are a group of young people who sit together to explore the beauty of words and make robust sense out of it. This gives meaning to my life.
                </p>
                
                <p>
                  I have been fangirling over Shakespeare and Elvis since I first read Sonnet 18, and caught the lilting strains of Always on My Mind as a child. While the world bleeds when you scratch a surface, life is albeit full of surprises – and there is a twist in its dramatic action if one is ready to buckle up.
                </p>
                
                <p className="text-xl font-medium text-[#181e3a] pt-4">
                  I am set to fall headlong, again.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
