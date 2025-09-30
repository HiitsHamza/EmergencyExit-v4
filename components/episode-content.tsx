interface EpisodeContentProps {
  slug: string
}

export function EpisodeContent({ slug }: EpisodeContentProps) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold text-[#181e3a] mb-4">The Secret Life of Children's Literature</h1>
            <h2 className="text-2xl text-gray-600 mb-4">Part 1</h2>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <span>Onaissa Abdaal</span>
              <span>•</span>
              <span>Noor XYZ</span>
              <span>•</span>
              <span>Moosa XYZ</span>
            </div>
          </div>
          <div className="text-right text-sm text-gray-500">
            <div>December 15, 2024</div>
            <div>45 mins</div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            Welcome to a world where fantasy meets philosophy, where childhood tales contain startling truths. In this
            episode, join Onaissa Abdaal, Noor and Moosa as they dive through The Secret Societies and meet The
            Chronicles of Narnia, not just the wonder of seven year olds, but through the unexpected lens of adult
            reflection. From Aslan's sacrifice to the White Witch's tyranny, we explore how C.S. Lewis's work still
            magical, but deeply metaphorical.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Along the way, the trio delve through Lemony Snicket's dark, Roald Dahl's subversive wit, and Beatrice
            Potter's deceptively simple tales. This episode unpacks how these childhood favourites—rich with dark
            undertones and bright moral lessons—continue to shape our understanding of good, evil, and the complex grey
            areas in between. Whether you grew up with these stories or are discovering them anew, tune in for fresh
            perspectives on the books that raised us.
          </p>
        </div>
      </div>
    </section>
  )
}
