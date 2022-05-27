export const getDaysElapsed = (date: Date) => {
  const msInDay = 1000 * 60 * 60 * 24
  const msElapsed = new Date().getTime() - date.getTime()
  return Math.floor(msElapsed / msInDay)
}
