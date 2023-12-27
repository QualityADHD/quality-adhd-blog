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

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  automationTarget
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} automationTarget={automationTarget}/>
      </div>
      <h3 className="text-3xl mb-3 leading-snug" data-a-target={automationTarget + '-title-container'}>
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
          data-a-target={automationTarget + '-link'}
        >
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4" data-a-target={automationTarget + '-date'}>
        <DateFormatter dateString={date}/>
      </div>
      <p className="text-lg leading-relaxed mb-4" data-a-target={automationTarget + '-excerpt'}>{excerpt}</p>
      <div data-a-target={automationTarget + '-author'}>
      <Avatar name={author.name} picture={author.picture}/>
      </div>
    </div>
  )
}

export default PostPreview
