export default async function getNavigation() {
  const navigationJsonUrl = process.env.navigationJsonUrl
  const result = await fetch(navigationJsonUrl as string)
    .then((res) => res.json())
    .then((res) => res.navbar)
  return result
}
