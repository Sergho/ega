import { Individual } from '../individual/individual';
import { ISelection } from './selection.interface';

export class TournamentSelection implements ISelection {
  private _betta: number;
  private _size: number;
  public constructor(betta: number, size: number) {
    this._betta = betta;
    this._size = size;
  }
  public selection(reproduction: Individual[]): Individual[] {
    const selected: Individual[] = [];
    while (selected.length < this._size) {
      const candidate = this.tournament(reproduction);
      if (!selected.includes(candidate)) {
        selected.push(candidate);
      }
    }

    return selected;
  }
  private tournament(reproduction: Individual[]): Individual {
    const participants: Individual[] = [];
    while (participants.length < this._betta) {
      const candidate =
        reproduction[Math.floor(Math.random() * reproduction.length)];
      if (!participants.includes(candidate)) {
        participants.push(candidate);
      }
    }

    participants.sort((a, b): number => {
      return a.fitness() - b.fitness();
    });

    return participants[0];
  }
}
