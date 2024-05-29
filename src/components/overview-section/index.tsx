import { Link, Box, Flex, IconCaret, Text, SxStyleProp } from '@vtex/brand-ui'

interface ContentType {
  title: string
  description: string
  getStarted: string
  links: { title: string; href: string; icon?: JSX.Element }[]
}

const OverviewSectionStyles: SxStyleProp = {
  mt: '16px',
  padding: '16px',
  borderRadius: '4px',
  border: '1px solid #E7E9EE',
  fontSize: '1rem',
  gap: '0.8rem',
  flexDirection: ['column', 'column', 'row'],
  alignItems: ['flex-start', 'flex-start', 'center'],
  justifyContent: 'space-between',
  a: {
    color: 'muted.1',
  },
  'a:hover': {
    color: 'muted.0',
  },
}
const title: SxStyleProp = {
  mb: '8px',
  fontSize: '1.125rem',
  fontWeight: '400',
  lineHeight: ['22px', '18px'],
  color: 'muted.0',
}
const description: SxStyleProp = {
  mb: '8px',
  color: 'muted.0',
}
const cta: SxStyleProp = {
  display: 'flex',
  alignItems: 'center',
}
const linksList: SxStyleProp = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
}
const linksItem: SxStyleProp = {
  alignItems: 'center',
  display: 'flex',
  a: {
    pl: '0.5em',
  },
}
const OverviewSection = ({ content }: { content: ContentType }) => {
  return (
    <Flex sx={OverviewSectionStyles}>
      <Box sx={{ width: ['100%', '100%', '45%'] }}>
        <Text sx={title}>{content.title}</Text>
        <Text sx={description}>{content.description}</Text>
        <Link sx={cta} href={content.getStarted} className="link">
          Get started
          <IconCaret
            className="caret"
            color="currentColor"
            direction="right"
            size={18}
          />
        </Link>
      </Box>
      <Box sx={linksList}>
        {content.links.map((link) => (
          <Flex sx={linksItem} key={link.title}>
            {link?.icon && link.icon}
            <Link href={link.href}>{link.title}</Link>
          </Flex>
        ))}
      </Box>
    </Flex>
  )
}

export default OverviewSection
