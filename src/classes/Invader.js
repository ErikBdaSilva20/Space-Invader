import { INVADER_IMAGE } from '../utils/constants.js'
import Projectile from './Projectiles.js'

class Invader {
  constructor(position, velocity) {
    this.width = 50
    this.height = 37
    this.velocity = 1.5

    this.position = position

    this.image = this.getImage(INVADER_IMAGE)
  }

  getImage(path) {
    const image = new Image()
    image.src = path
    return image
  }

  moveLeft() {
    this.position.x -= this.velocity
  }

  moveRight() {
    this.position.x += this.velocity
  }

  moveDown() {
    this.position.y += this.height
  }

  incrementVelocity(boost) {
    this.velocity += boost
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width, // largura
      this.height, // altura
    )
  }

  shoot(projectiles) {
    const p = new Projectile(
      {
        x: this.position.x + this.width / 2 - 1,
        y: this.position.y + this.height,
      },
      10,
    )

    projectiles.push(p)
  }

  playerHitEnemy(projectile) {
    return (
      projectile.position.x >= this.position.x &&
      projectile.position.x <= this.position.x + this.width &&
      projectile.position.y >= this.position.y &&
      projectile.position.y <= this.position.y + this.height
    )
  }
}

export default Invader
