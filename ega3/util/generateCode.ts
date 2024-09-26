import Code from "../codes/Code";
import NaturalCode from "../codes/NaturalCode";
import RandomCode from "../codes/RandomCode";
import SquareCode from "../codes/SquareCode";

export const generateCode = (mode: number): Code => {
  if(![1, 2, 3].includes(mode)) throw new Error('Incorrect mode');
  const codes = [
    new RandomCode(),
    new NaturalCode(),
    new SquareCode()
  ]
  return codes[mode - 1];
}