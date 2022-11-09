import getDocsPaths from 'utils/getDocsPaths'
//eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler(req: any, res: any) {
  req = req
  res.status(200).json(await getDocsPaths())
}
