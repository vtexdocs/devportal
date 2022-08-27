export default async function getNavigation() {
  console.log('getNavigation')
  try {
    return await fetch(process.env.navigationJsonUrl as string)
      .then((res) => res.json())
      .then((res) => res.navbar)
  } catch (error) {
    console.log(error)
  }
  return []
}
