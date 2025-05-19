export const createStars = (num, className) => {
  for (let i = 0; i < num; i++) {
    const star = document.createElement('div')
    star.className = className

    star.style.top = `${Math.random() * 100}vh`
    star.style.left = `${Math.random() * 100}vw`

    const size = Math.random() * 3 + 1
    star.style.width = `${size}px`
    star.style.height = `${size}px`
    star.style.opacity = Math.random().toFixed(2)

    star.style.animationDuration = `${Math.random() * 3 + 2}s`

    document.body.appendChild(star)
  }
}

createStars(50, 'stars')
createStars(40, 'stars2')
createStars(30, 'stars3')
