// import useSWR from 'swr'
import type { SidebarSectionProps } from 'components/sidebar-section'
import getNavigation from 'utils/getNavigation'

const sidebarDataMaster: SidebarSectionProps[] = await getNavigation()

//eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function handler(req: any, res: any): void {
  req = req
  res.status(200).json(sidebarDataMaster)
}
