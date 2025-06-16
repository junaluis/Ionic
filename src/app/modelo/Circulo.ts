import { FiguraGeometrica } from './FiguraGeometrica';

export class Circulo extends FiguraGeometrica {
  private radio: number;

  constructor(radio: number) {
    super('Círculo');
    this.radio = radio;
  }

  override calcularPerimetro(): number {
    return 2 * Math.PI * this.radio;
  }
}
