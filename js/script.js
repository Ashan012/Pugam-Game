// const img = {
//   FRONT,
//   BACK: (document.getElementById("player1").src = "../img/front.svg"),
// };

const main = () => {
  const result1 = player1();

  const result2 = comp1();

  const result3 = comp2();
  const result = [result1, result2, result3];

  calculateMove(result);
};
const player1 = (ramdomIndex) => {
  const movePlayer1 = prompt("Entre Your Move").toLowerCase();
  if (movePlayer1 === "front") {
    document.getElementById("player1").src = "../img/front.svg";

    return (ramdomIndex = 0);
  } else if (movePlayer1 === "back") {
    document.getElementById("player1").src = "../img/back.svg";
    return (ramdomIndex = 1);
  } else {
    alert("invalid move");
    throw new Error("invalid");
  }
};

const comp1 = (ramdomIndex) => {
  ramdomIndex = 1;
  ramdomIndex = Math.random() > 0.5 ? 1 : 0;
  if (ramdomIndex == 1) {
    document.getElementById("comp1").src = "../img/back.svg";
  }
  return ramdomIndex;
};
const comp2 = (ramdomIndex) => {
  ramdomIndex = 1;
  ramdomIndex = Math.random() > 0.5 ? 1 : 0;
  if (ramdomIndex == 1) {
    const img = (document.getElementById("comp2").src = "../img/back.svg");
  }
  return ramdomIndex;
};
const calculateMove = (result) => {
  const allMoveFront = result.every((move) => {
    return move === 1;
  });
  const allMoveBack = result.every((move) => {
    return move === 0;
  });

  if (allMoveBack == true || allMoveFront == true) {
    console.log("noWinner");

    return;
  }
  const score = {
    front: [],
    back: [],
  };
  result.forEach((move, index) => {
    // console.log(move, index);
    if (move === 1) {
      score.front.push(index);
    } else {
      score.back.push(index);
    }
  });
  if (score.front.length === 1) {
    announceWinner(score.front[0], ["player1", "comp1", "comp2"]);
  } else {
    announceWinner(score.back[0], ["player1", "comp1", "comp2"]);
  }
};
const announceWinner = (winner, players) => {
  alert(`winner is ${players[winner]}`);
};

main();
