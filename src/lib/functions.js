export const copyToClipboard = () => {
  const email = "zjose88@gmail.com"

  navigator.clipboard.writeText(email).then(
  () => {
    console.log(`Email copied to clipboard`)
  },
  () => {
    console.log(`An error has occurred`);
    
  })
}