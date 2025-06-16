import { FiguraGeometrica } from './FiguraGeometrica';

export class TrianguloEscaleno extends FiguraGeometrica {
  private ladoA: number;
  private ladoB: number;
  private ladoC: number;

  constructor(ladoA: number, ladoB: number, ladoC: number) {
    super('Triángulo Escaleno');
    this.ladoA = ladoA;
    this.ladoB = ladoB;
    this.ladoC = ladoC;
  }

  override calcularPerimetro(): number {
    return this.ladoA + this.ladoB + this.ladoC;
  }
}
