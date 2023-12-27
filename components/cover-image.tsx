import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  title: string
  src: string
  slug?: string
  automationTarget: string
}

const CoverImage = ({ title, src, slug, automationTarget }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm w-full', {
        'hover:shadow-lg transition-shadow duration-200': slug,
      })}
      width={1300}
      height={630}
      data-a-target={automationTarget + '-image'}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title} data-a-target={automationTarget + '-link'}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
