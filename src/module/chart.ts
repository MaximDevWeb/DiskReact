type configChart = {
  dataset: Array<number>;
  colors: Array<string>;
  width: number;
};

/**
 * Class for creating pie charts
 */
export class Chart {
  private canvas: HTMLCanvasElement;

  private dataset: Array<number>;
  private readonly fullDataset: number;
  private readonly colors: Array<string>;
  private readonly width: number;

  private ctx: CanvasRenderingContext2D;
  private angle: number = -Math.PI / 2;

  /**
   * Diagram creation constructor
   *
   * @param canvas
   * @param config
   */
  constructor(canvas: HTMLCanvasElement, config: configChart) {
    this.dataset = config.dataset;
    this.colors = config.colors;
    this.canvas = canvas;
    this.width = config.width;

    this.fullDataset = this.dataset.reduce((sum, value) => sum + value, 0);
    this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    this.renderScene();
  }

  /**
   * Chart data update method
   *
   * @param dataset
   */
  public update(dataset: Array<number>) {
    this.dataset = dataset;

    this.renderScene();
  }

  /**
   * Scene rendering method
   *
   * @private
   */
  private renderScene() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.angle = -Math.PI / 2;

    this.dataset.forEach((item, index) => {
      this.renderArc(item, this.fullDataset, this.colors[index]);
    });
  }

  /**
   * Arc rendering method
   *
   * @param value
   * @param full
   * @param color
   * @private
   */
  private renderArc(value: number, full: number, color: string) {
    const angeleOffset = this.angle + 2 * Math.PI * (value / full);
    const x = this.canvas.width / 2;
    const y = this.canvas.height / 2;
    const r = (this.canvas.width - this.width / 2) / 2 - this.width / 2;

    this.ctx.beginPath();
    this.ctx.arc(x, y, r, this.angle, angeleOffset);
    this.ctx.lineWidth = this.width;
    this.ctx.strokeStyle = color;
    this.ctx.stroke();

    this.angle = angeleOffset;
  }
}
