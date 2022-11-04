import { MathUtils } from "three";

class MathCircle {
  #angle: number = 0;
  #radius: number = 1;

  constructor(radius: number = 1) {
    this.#radius = radius;
  }

  get angle() {
    return this.#angle;
  }

  set angle(degrees: number) {
    this.#angle = MathUtils.degToRad(degrees);
  }

  getCoordinates(degrees: number) {
    this.angle = degrees;
    const x = Math.cos(this.angle) * this.#radius;
    const y = Math.sin(this.angle) * this.#radius;

    return { x, y };
  }
}

export { MathCircle };
