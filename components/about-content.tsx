export function AboutContent() {
  return (
    <section className="py-16 px-4 bg-[#f5f5f5] relative overflow-hidden">
      {/* Decorative diagonal stripe - coming from left, fades to right */}
      <div 
        className="absolute pointer-events-none"
        style={{
          top: '45%',
          left: '-10%',
          width: '120%',
          height: '180px',
          background: 'linear-gradient(to right, #e8eaef 0%, #e8eaef 30%, transparent 45%)',
          transform: 'rotate(-340deg)',
          zIndex: 0,
        }}
      />
      <div className="prose prose-xl mx-auto max-w-5xl relative z-10">
        {/* Chevron background behind title */}
        <div className="relative w-full mb-12">
          {/* Chevron background with layered borders - double arrow */}
          <div className="relative w-full">
            {/* Main content area + double arrow with borders using clipPath */}
            <div className="relative h-18 w-full">
              {/* Blue border layer (outermost, extends furthest on both sides) */}
              <div 
                className="absolute bg-[#1e2742]"
                style={{
                  top: '0',
                  bottom: '0',
                  left: '-50px',
                  right: '-50px',
                  clipPath: 'polygon(40px 0%, calc(100% - 40px) 0%, 100% 50%, calc(100% - 40px) 100%, 40px 100%, 0% 50%)'
                }}
              />
              
              {/* Gray border layer (middle, thinner) */}
              <div 
                className="absolute bg-gray-300"
                style={{
                  top: '0',
                  bottom: '0',
                  left: '-35px',
                  right: '-35px',
                  clipPath: 'polygon(40px 0%, calc(100% - 40px) 0%, 100% 50%, calc(100% - 40px) 100%, 40px 100%, 0% 50%)'
                }}
              />
              
              {/* Main navy chevron - double arrow */}
              <div 
                className="relative bg-[#1e2742] h-18 w-full px-16 flex items-center justify-center"
                style={{
                  clipPath: 'polygon(38px 0%, calc(100% - 38px) 0%, 100% 50%, calc(100% - 38px) 100%, 38px 100%, 0% 50%)',
                  paddingLeft: '4rem',
                  paddingRight: '4rem'
                }}
              >
                <h2 className="text-5xl font-bold text-white mb-0 tracking-wide whitespace-nowrap">About</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="text-lg leading-relaxed space-y-8 text-gray-700">
          <p>
            This podcast is a labour of love. After so many years of being in a literature classroom, it started becoming increasingly obvious that my conversations with my students have to be saved - for legacy and to share the sheer pleasure of intelligent, witty and informed exchanges with well read young people. These controlled parleys on poem after poem, story after story, dialogue after dialogue had to be made privy to like minded people. I always say this to those who ask me why I teach; that I get paid to talk about the things I love the most! What can be more of a privilege than that?
          </p>

          <p>
            A lot of my students responded when I sent out a call to action - and we had some serious fun while recording. This is the anti small talk podcast. We love a literary conversation and refuse to settle for half baked half hearted chatter! But the most remarkable thing about this project is that it destigmatises the teacher-student relationship. I hope my listeners enjoy the chemistry!
          </p>

          <p>
            Why are literary conversations important? Why are stories important? How do stories told long ago shape the world around us today? Find some answers as this podcast undresses the written word, urban legends, song lyrics and burrows into some film subtexts, linking imaginative literature through eras and regions.
          </p>

          <p>
            Welcome to The Emergency Exit, a light hearted but sharp minded podcast that centres around the pleasures of reading: Onaissa Abbasi and her guests scout their way to a much needed escape into the realm where words make sense, reminding us that there is yet elegance and meaning in the world despite. So let's open a book and exit into the world of literature and the arts…
          </p>

          <p className="italic text-[#181e3a]/80 text-xl font-medium">
            We're not experts, and as Einstein said, our only talent is that we are passionately curious about the written word and the arts.
          </p>          
        </div>
      </div>
    </section>
  )
}

export function AboutAudience() {
  return (
    <section className="py-16 px-4 bg-[#f5f5f5] relative overflow-hidden">
      <div className="prose prose-xl mx-auto max-w-5xl relative z-10">
        <div className="text-lg leading-relaxed space-y-8 text-gray-700">
          <h3 className="text-3xl font-bold text-[#181e3a] mt-16 mb-8">Who is Our Audience</h3>
          <p className="text-2xl font-medium text-[#181e3a]">
            Everyone with class and curiosity!
          </p>
          <p>
            This podcast is for people who enjoy engrossing conversations about Literature - and how stories can be read again and again. Here we form unexpected connections with contemporary life, referencing culture, cinema and the arts. For fellow aficionados of the written word, this podcast is the emergency exit into inspired conversations; the idea came about from our passion for literature and how the rereading of existing classics in the contemporary world can be an exciting rediscovery.
          </p>

          <p>
            As we sit down with our coffees, our conversations throw open the magic casement on imaginative thought. Listen to us weave our way through novels, stories, movies and poetry; things get curiouser and curiouser! Picking up particular literary and artistic sources, we discover play within the play, finding fascinating tidbits and trivia, tracing how artists and authors express human emotion, and how much of that affects our postmodern worldview.
          </p>

          <p>
            So watch this space; we will be sharing striking literary experiences with our listeners, how re-exploring fiction can be rewarding once we draw our audience's attention to the joy of literature. And on the way, convince some of you to read the titles on the table!
          </p>

          <p className="text-xl font-medium text-[#181e3a] bg-white/50 p-6 rounded-lg border-l-4 border-[#181e3a]">
            Fair warning! We do rummage into the rabbit holes of fiction and the arts discovering how we, as readers and viewers, read beyond the lines: You will encounter the inside stories!
          </p>

          <p>
            In every episode we will discuss select titles, recommend a couple of novels, stories, movies and poems, discover what is special about it, make connections with real life, culture and society, and look around, under and beyond what went into writing them. Pop over to theemergencyexitpodcast.com for exciting details on upcoming episodes!
          </p>

          <p className="text-xl font-bold text-[#181e3a] text-center mt-12">
            Buckle up and step into The Emergency Exit, when the slings and arrows of outrageous fortune strike.
          </p>
        </div>
      </div>
    </section>
  )
}
