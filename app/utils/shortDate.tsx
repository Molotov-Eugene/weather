export const getShortDate = (date: string) => {
  const shortDate = new Date(date).toLocaleDateString('en-US', {
    weekday: 'short',
  })
  return shortDate;
}
