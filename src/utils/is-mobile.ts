const isAndroid = (): boolean => {
  return /Android/i.test(navigator.userAgent)
}

const isiOS = (): boolean => {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent)
}

const isMobile = (): boolean => {
  return isAndroid() || isiOS()
}

export default isMobile
