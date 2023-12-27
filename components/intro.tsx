import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12" data-a-target='blog-intro-container'>
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8" data-a-target='blog-title'>
        Quality ADHD.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8" data-a-target='blog-intro-description'>
        Blog for showcasing code and thoughts around software and quality engineering.
      </h4>
    </section>
  )
}

export default Intro
