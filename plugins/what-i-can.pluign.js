import alcoholsData from '@/data/alcohols/alcohols.json'
const SELECTED_ITEM = {
  class: 'alcohol-card--selected',
}
export const getRandomAlcoholOrder = () => {
  const randomNumber = () => (Math.random() * alcoholsData.length).toFixed()
  if (randomNumber() > alcoholsData.length) {
    randomNumber()
  } else {
    return randomNumber()
  }
}

export const toAlcoholPosition = () => {
  if (process.client || process.browser) {
    const order = getRandomAlcoholOrder()
    const element = document.querySelectorAll('.alcohol-card')[order]
    if (element) {
      element.classList.add(SELECTED_ITEM.class)
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
      setTimeout(() => {
        element.classList.remove(SELECTED_ITEM.class)
      }, 3000)
    }
  }
}
