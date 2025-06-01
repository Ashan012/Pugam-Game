const main = () => {
  comp1Func.comp1();
  comp2Func.comp1();
  playerFunc.comp1();

  calculateResult();
};

class func {
  constructor(name) {
    this.name = name;
  }
  comp1() {
    let RandomIndex = Math.random() > 0.5 ? 1 : 0;
    console.log(RandomIndex);

    if (RandomIndex === 1) {
      this.name.src = img1.BACK;
    }
    Result.push(RandomIndex);
    return;
  }
}
const comp1 = document.getElementById("comp1");
const comp2 = document.getElementById("comp2");
const player = document.getElementById("player");

let img1 = {
  FRONT: "../img/front.svg",
  BACK: "../img/back.svg",
};

const Result = [];

const comp1Func = new func(comp1);
const comp2Func = new func(comp2);
const playerFunc = new func(player);

const calculateResult = () => {
  const allmoveFront = Result.every((move) => {
    return move === 0;
  });
  const allmoveBack = Result.every((move) => {
    return move === 1;
  });
  if (allmoveFront === true || allmoveBack === true) {
    alert("no winner");
    return;
  }
  const score = {
    FRONT: [],
    BACK: [],
  };
  Result.forEach((move, index) => {
    if (move == 0) {
      score.FRONT.push(index);
    } else {
      score.BACK.push(index);
    }
  });

  announceWinner(score, ["comp1", "comp2", "player"]);
};
const announceWinner = (score, listOfPlayer) => {
  if (score.FRONT.length === 1) {
    alert(`winner is ${listOfPlayer[score.FRONT]}`);
  } else {
    alert(`winner is ${listOfPlayer[score.BACK]}`);
  }
};
main();
