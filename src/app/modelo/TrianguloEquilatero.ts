import { TrianguloEscaleno } from './TrianguloEscaleno';

export class TrianguloEquilatero extends TrianguloEscaleno {
  constructor(ladoA: number) {
    super(ladoA, ladoA, ladoA);
  }
}
