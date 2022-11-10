export class ScoreState {
  private _score: number;

  constructor() {
    this._score = 0;
  }

  public get score() {
    return this._score;
  }

  public set score(points: number) {
    this._score = points;
  }

  public add(points: number) {
    this._score += Math.abs(points);
  }
}
