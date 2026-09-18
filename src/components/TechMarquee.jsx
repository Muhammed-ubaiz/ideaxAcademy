const items = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'Node.js',
  'Express.js',
  'MongoDB',
  'REST API',
  'Git',
  'GitHub',
  'AI APIs',
  'Prompt Engineering',
]

export default function TechMarquee() {
  const loop = [...items, ...items]

  return (
    <section className="border-y border-ideax-black/8 bg-white py-8" aria-label="Technologies covered">
      <div className="no-scrollbar overflow-hidden">
        <div className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
          {loop.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="whitespace-nowrap text-lg font-semibold text-ideax-black/35 transition-colors duration-300 hover:text-ideax-purple sm:text-xl"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
