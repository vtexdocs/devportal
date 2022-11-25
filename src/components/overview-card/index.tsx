import styles from './styles.module.css'
import Link from 'next/Link'
import * as Icons from './icons'
import type { IconComponent } from 'utils/typings/types'

interface IconsI {
  name: string
  Icon: IconComponent
}

const IconsMap: IconsI[] = [
  {
    name: 'StorageUnit',
    Icon: Icons.StorageUnit,
  },
  {
    name: 'Board',
    Icon: Icons.Board,
  },
]

//Interfaces
interface OverviewCardProps {
  title: string
  href: string
  description: string
  docs: { title: string; href: string }[]
  icon: string
  seeMore: boolean | undefined
}

interface ListOfDocsProps {
  docs: { title: string; href: string }[]
  href: string
  seeMore: boolean | undefined
}

//Functions
const getIcon = (name: string) => {
  return IconsMap.find((icon) => icon.name === name)?.Icon
}

const ListOfDocs = ({ docs, seeMore, href }: ListOfDocsProps) => (
  <ul className={styles.listOfDocs}>
    {docs.map((doc) => (
      <li key={doc.href}>
        <Link href={doc.href}>{doc.title}</Link>
      </li>
    ))}
    {seeMore && (
      <li className={styles.seeMore}>
        <Link href={href}>
          <a>See more</a>
        </Link>
      </li>
    )}
  </ul>
)

const OverviewCard = ({
  title,
  href,
  description,
  docs,
  icon,
  seeMore,
}: OverviewCardProps) => {
  const Icon = getIcon(icon)
  return (
    <div className={styles.categoryInfo}>
      {Icon && <Icon className={styles.icon} />}
      <div>
        <div className={styles.header}>
          <Link href={href}>{title}</Link>
          <p>{description}</p>
        </div>
        <ListOfDocs docs={docs} seeMore={seeMore} href={href} />
      </div>
    </div>
  )
}

export default OverviewCard
