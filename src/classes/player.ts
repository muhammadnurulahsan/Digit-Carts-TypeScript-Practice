import { IsPlayer } from "../interfaces/IsPlayer";

export class Player implements IsPlayer {
  constructor(
    public name: string,
    private age: number,
    readonly country: string
  ) {}

  getAge() {
    return this.age;
  }

  play() {
    console.log(`${this.name} from ${this.country} is playing`);
  }

  // constructor(name: string, age: number, country: string) {
  //   this.name = name;
  //   this.age = age;
  //   this.country = country;
  // }

  // playName() {
  //   console.log(`${this.name} from ${this.country} is playing`);
  // }
}
