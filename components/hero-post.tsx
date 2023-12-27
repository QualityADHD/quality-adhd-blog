import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
  automationTarget: string
}

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  automationTarget
}: Props) => {
  return (
    <section>
      <div className="mb-8 md:mb-16" data-a-target={automationTarget}>
        <CoverImage title={title} src={coverImage} slug={slug} automationTarget={automationTarget}/>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight" data-a-target="heroPost-title">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg" data-a-target={"heroPost-date"}>
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4" data-a-target={"heroPost-excerpt"}>{excerpt}</p>
          <div data-a-target={"heroPost-author-container"}>
          <Avatar name={author.name} picture={author.picture}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroPost
