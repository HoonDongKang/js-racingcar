import Race from "../src/domain/Race.js";
import { TEST_CARS } from "../src/constants/index.js";
import Car from "../src/domain/Car.js";

/**
- [x] 5회 반복된다.
- [ ] 우승자를 발표한다.
 */

describe("자동차 경주 테스트", () => {
  test("자동차 경주는 5회로 고정하여 진행한다.", () => {
    // given
    const race = new Race(TEST_CARS.map(car => new Car(car)));
    // when
    race.start();
    const totalRound = race.getTotalRounds();
    
    // then
    expect(totalRound).toBe(5);
  });
});