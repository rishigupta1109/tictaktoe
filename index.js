var positions = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
var mode = 0; // 0 for player vs player and 1 for player vs cpu
var fistTurn = true;
const p1 = document.getElementsByClassName("p1")[0];
const p2 = document.getElementsByClassName("p2")[0];
p1.innerText = "Your Turn";
p2.innerText = "Wait for your turn";
let boxes = document.getElementsByClassName("boxes");
var complete = false;
var playercount = 1;
var winningrow = [];
var Button = document.getElementById("reset");

const playbutton = document.getElementById("play");
const cpuPlayButton = document.getElementById("comingsoon");
const play = document.getElementsByClassName("megacontainer")[0];
const game = document.getElementsByClassName("megacontainer")[1];
const navbar = document.getElementsByClassName("navbar")[0];
const dash = document.getElementsByClassName("dash")[0];
navbar.style.display = "none";
game.style.display = "none";
dash.style.display = "none";

// comingsoon.addEventListener("mouseover",(e)=>{e.target.innerText="coming soon"})
// comingsoon.addEventListener("mouseleave",(e)=>{e.target.innerText="Player VS CPU"})
const startgame = (m) => {
  console.log(m);
  play.style.display = "none";
  game.style.display = "flex";
  navbar.style.display = "flex";
  mode = m;
  // if (mode === 1) {
  //   playercount++;
  //   document.querySelector(".p22 .heading").innerText = "CPU";
  //   positions[1][1] = "O";
  //   setTimeout(() => {
  //     playercount++;
  //     document.getElementById("box11").innerText = "O";
  //     document.getElementById(
  //       "box11"
  //     ).style.textShadow = `rgb(255 255 255) 0px 0px 4px, rgb(255 255 255) 0px 0px 11px, rgb(255 255 255) 0px 0px 19px, rgb(27 255 0) 0px 0px 40px, rgb(27 255 0) 0px 0px 80px, rgb(27 255 0) 0px 0px 90px, rgb(27 255 0) 0px 0px 100px, rgb(27 255 0) 0px 0px 150px`;
  //   }, 500);
  // }
  Array.from(boxes).forEach((element) => {
    if (mode === 0) element.addEventListener("click", setvaluePVP);
    else element.addEventListener("click", setvaluePVC);
  });
};
playbutton.addEventListener("click", startgame.bind(null, 0));
cpuPlayButton.addEventListener("click", startgame.bind(null, 1));
var getCumulativeOffset = function (obj) {
  var left, top;
  left = top = 0;
  if (obj.offsetParent) {
    do {
      left += obj.offsetLeft;
      top += obj.offsetTop;
    } while ((obj = obj.offsetParent));
  }
  return {
    x: left,
    y: top,
  };
};
const setdash = (arr) => {
  if (arr[0] === 0) {
    if (arr[1] === 0) {
      let box = document.getElementById("box00");
      let XY = getCumulativeOffset(box);

      dash.style.display = "flex";
      // dash.style.top="159px";
      dash.style.top = `${XY.y - 82}px`;
      dash.style.left = `${XY.x + 109}px`;
      dash.style.height = "237px";
      dash.style.width = "8px";
      dash.style.backgroundColor = "white";
      dash.style.transform = "rotate(90deg)";
    } else if (arr[1] === 1) {
      let box = document.getElementById("box10");
      let XY = getCumulativeOffset(box);
      dash.style.display = "flex";
      dash.style.top = `${XY.y - 82}px`;
      dash.style.left = `${XY.x + 109}px`;
      dash.style.height = "237px";
      dash.style.width = "8px";
      dash.style.backgroundColor = "white";
      dash.style.transform = "rotate(90deg)";
    } else if (arr[1] === 2) {
      let box = document.getElementById("box20");
      let XY = getCumulativeOffset(box);
      dash.style.display = "flex";
      dash.style.top = `${XY.y - 82}px`;
      dash.style.left = `${XY.x + 109}px`;
      dash.style.height = "237px";
      dash.style.width = "8px";
      dash.style.backgroundColor = "white";
      dash.style.transform = "rotate(90deg)";
    }
  }
  if (arr[0] === 1) {
    if (arr[1] === 0) {
      let box = document.getElementById("box00");
      let XY = getCumulativeOffset(box);
      dash.style.display = "flex";
      dash.style.top = `${XY.y + 6}px`;
      dash.style.left = `${XY.x + 33}px`;
      dash.style.height = "221px";
      dash.style.width = "8px";
      dash.style.backgroundColor = "white";
      dash.style.transform = "rotate(0deg)";
    } else if (arr[1] === 1) {
      let box = document.getElementById("box01");
      let XY = getCumulativeOffset(box);
      dash.style.display = "flex";
      dash.style.top = `${XY.y + 6}px`;
      dash.style.left = `${XY.x + 33}px`;
      dash.style.height = "221px";
      dash.style.width = "8px";
      dash.style.backgroundColor = "white";
      dash.style.transform = "rotate(0deg)";
    } else if (arr[1] === 2) {
      let box = document.getElementById("box02");
      let XY = getCumulativeOffset(box);
      dash.style.display = "flex";
      dash.style.top = `${XY.y + 6}px`;
      dash.style.left = `${XY.x + 33}px`;
      dash.style.height = "221px";
      dash.style.width = "8px";
      dash.style.backgroundColor = "white";
      dash.style.transform = "rotate(0deg)";
    }
  }
  if (arr[0] === 2) {
    if (arr[1] === 0) {
      let box = document.getElementById("box10");
      let XY = getCumulativeOffset(box);
      dash.style.display = "flex";
      dash.style.top = `${XY.y - 115}px`;
      dash.style.left = `${XY.x + 109}px`;
      dash.style.height = "292px";
      dash.style.width = "8px";
      dash.style.backgroundColor = "white";
      dash.style.transform = "rotate(135deg)";
    } else if (arr[1] === 1) {
      let box = document.getElementById("box10");
      let XY = getCumulativeOffset(box);
      dash.style.display = "flex";
      dash.style.top = `${XY.y - 100}px`;
      dash.style.left = `${XY.x + 109}px`;
      dash.style.height = "292px";
      dash.style.width = "8px";
      dash.style.backgroundColor = "white";
      dash.style.transform = "rotate(45deg)";
    }
  }
};

const reset = () => {
  playercount = 1;

  winningrow = [];
  dash.style.display = "none";
  document.getElementsByClassName("p11")[0].style.boxShadow =
    "0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #ff0000, 0 0 0.8rem #ff0000, 0 0 2.8rem #ff0000, inset 0 0 1.3rem #ff0000";
  document.getElementsByClassName("p22")[0].style.boxShadow =
    "0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #4aff0f, 0 0 0.8rem#4aff0f, 0 0 2.8rem #4aff0f, inset 0 0 1.3rem #4aff0f";
  positions = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  complete = false;
  Array.from(boxes).forEach((element) => {
    element.innerText = "";
  });
  if (mode === 1 && !fistTurn) {
    playercount++;
    document.querySelector(".p22 .heading").innerText = "CPU";
    positions[1][1] = "O";
    setTimeout(() => {
      playercount++;
      document.getElementById("box11").innerText = "O";
      document.getElementById(
        "box11"
      ).style.textShadow = `rgb(255 255 255) 0px 0px 4px, rgb(255 255 255) 0px 0px 11px, rgb(255 255 255) 0px 0px 19px, rgb(27 255 0) 0px 0px 40px, rgb(27 255 0) 0px 0px 80px, rgb(27 255 0) 0px 0px 90px, rgb(27 255 0) 0px 0px 100px, rgb(27 255 0) 0px 0px 150px`;
    }, 500);
  }
  p1.innerText = "Your Turn";
  p2.innerText = "Wait for your turn";
};

Button.addEventListener("click", reset);

const blurloser = (letter) => {
  let boxes = document.getElementsByClassName("boxes");
  console.log(boxes);
  Array.from(boxes).forEach((element) => {
    if (element.innerText === letter) {
      element.style.textShadow = "none";
    }
  });
};

const playerWon = (char) => {
  if (char === "X") {
    // alert("player 1 Won");
    complete = true;
    fistTurn = false;
    console.log("player 1 Won");
  } else {
    // alert("player 2 Won");
    fistTurn = true;
    complete = true;
    console.log("player 2 Won");
  }
  // positions=[[0,0,0],[0,0,0],[0,0,0]];
};
const Completed = () => {
  let bool = true;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (positions[i][j] === 0) {
        bool = false;
      }
    }
  }
  return bool;
};
const checkwin = (char, check = false) => {
  let Won = false;
  for (let i = 0; i < 3; i++) {
    let oneRow = true;
    for (let j = 0; j < 3; j++) {
      if (positions[i][j] !== char) {
        oneRow = false;
      }
    }
    if (oneRow) {
      winningrow = [0, i];
      if (!check) setdash(winningrow);
      Won = true;
      return Won;
    }
  }
  for (let i = 0; i < 3; i++) {
    let oneRow = true;
    for (let j = 0; j < 3; j++) {
      if (positions[j][i] !== char) {
        oneRow = false;
      }
    }
    if (oneRow) {
      winningrow = [1, i];
      if (!check) setdash(winningrow);
      Won = true;
      return Won;
    }
  }
  let diagonal = true;
  for (let i = 0; i < 3; i++) {
    if (positions[i][i] !== char) {
      diagonal = false;
    }
  }
  if (diagonal) {
    winningrow = [2, 0];
    if (!check) setdash(winningrow);
    Won = true;
    return Won;
  }
  // 02 11 20
  let oppdiagonal = true;
  for (let i = 0; i < 3; i++) {
    if (positions[i][2 - i] !== char) {
      oppdiagonal = false;
    }
  }
  if (oppdiagonal) {
    winningrow = [2, 1];
    if (!check) setdash(winningrow);
    Won = true;
    return Won;
  }

  return Won;
};

const setvaluePVP = (e) => {
  let index1 = Number(e.target.id[3]);
  let index2 = Number(e.target.id[4]);
  if (!complete) {
    if (!positions[index1][index2]) {
      if (playercount % 2 !== 0) {
        p1.innerText = "Wait for your turn";
        p2.innerText = "Your Turn";
        e.target.innerText = "X";
        e.target.style.textShadow = ` rgb(255 255 255) 0px 0px 4px, rgb(255 255 255) 0px 0px 11px, rgb(255 255 255) 0px 0px 19px, rgb(245 0 0) 0px 0px 40px, rgb(245 0 0) 0px 0px 80px, rgb(245 0 0) 0px 0px 90px, rgb(245 0 0) 0px 0px 100px, rgb(245 0 0) 0px 0px 150px`;

        playercount++;
        positions[index1][index2] = "X";

        if (checkwin("X")) {
          playerWon("X");
          blurloser("O");
          document.getElementsByClassName("p22")[0].style.boxShadow = "none";
          dash.style.boxShadow =
            "0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #ff0000, 0 0 0.8rem #ff0000, 0 0 2.8rem #ff0000, inset 0 0 1.3rem #ff0000";
          p1.innerText = "Congratulations! You Won";
          p2.innerText = "Try again Next time";
        } else if (Completed()) {
          document.getElementsByClassName("p11")[0].style.boxShadow = "none";
          document.getElementsByClassName("p22")[0].style.boxShadow = "none";
          p1.innerText = "Match Draw";
          p2.innerText = "Match Draw";
        }
      } else {
        e.target.innerText = "O";
        playercount++;
        positions[index1][index2] = "O";
        p2.innerText = "Wait for your turn";
        p1.innerText = "Your Turn";
        e.target.style.textShadow = `rgb(255 255 255) 0px 0px 4px, rgb(255 255 255) 0px 0px 11px, rgb(255 255 255) 0px 0px 19px, rgb(27 255 0) 0px 0px 40px, rgb(27 255 0) 0px 0px 80px, rgb(27 255 0) 0px 0px 90px, rgb(27 255 0) 0px 0px 100px, rgb(27 255 0) 0px 0px 150px`;

        if (checkwin("O")) {
          playerWon("O");
          blurloser("X");
          document.getElementsByClassName("p11")[0].style.boxShadow = "none";
          dash.style.boxShadow =
            "0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #4aff0f, 0 0 0.8rem#4aff0f, 0 0 2.8rem #4aff0f, inset 0 0 1.3rem #4aff0f";
          p2.innerText = "Congratulations! You Won";
          p1.innerText = "Try again Next time";
        } else if (Completed()) {
          p1.innerText = "Match Draw";
          p2.innerText = "Match Draw";
          document.getElementsByClassName("p11")[0].style.boxShadow = "none";
          document.getElementsByClassName("p22")[0].style.boxShadow = "none";
        }
      }
    }
  }
};
const optimisedPosn = () => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (positions[i][j] === 0) {
        positions[i][j] = "O";
        if (checkwin("O", true)) {
          positions[i][j] = 0;
          return [i, j];
        }
        positions[i][j] = 0;
      }
    }
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (positions[i][j] === 0) {
        positions[i][j] = "X";
        if (checkwin("X", true)) {
          positions[i][j] = 0;
          return [i, j];
        }
        positions[i][j] = 0;
      }
    }
  }
  return [-1, -1];
};
const setvaluePVC = (e) => {
  let index1 = Number(e.target.id[3]);
  let index2 = Number(e.target.id[4]);
  if (!complete) {
    if (!positions[index1][index2]) {
      if (playercount % 2 !== 0) {
        p1.innerText = "Wait for your turn";
        p2.innerText = "Your Turn";
        e.target.innerText = "X";
        e.target.style.textShadow = ` rgb(255 255 255) 0px 0px 4px, rgb(255 255 255) 0px 0px 11px, rgb(255 255 255) 0px 0px 19px, rgb(245 0 0) 0px 0px 40px, rgb(245 0 0) 0px 0px 80px, rgb(245 0 0) 0px 0px 90px, rgb(245 0 0) 0px 0px 100px, rgb(245 0 0) 0px 0px 150px`;
        playercount++;
        positions[index1][index2] = "X";

        if (checkwin("X")) {
          playerWon("X");
          blurloser("O");
          document.getElementsByClassName("p22")[0].style.boxShadow = "none";
          dash.style.boxShadow =
            "0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #ff0000, 0 0 0.8rem #ff0000, 0 0 2.8rem #ff0000, inset 0 0 1.3rem #ff0000";
          p1.innerText = "Congratulations! You Won";
          p2.innerText = "Try again Next time";
        } else if (Completed()) {
          p1.innerText = "Match Draw";
          p2.innerText = "Match Draw";

          document.getElementsByClassName("p11")[0].style.boxShadow = "none";
          document.getElementsByClassName("p22")[0].style.boxShadow = "none";
          return;
        } else {
          setTimeout(() => {
            // let random = Math.floor(Math.random() * 9);

            // while (positions[Math.floor(random / 3)][random % 3]) {
            //   random = Math.floor(Math.random() * 9);
            // }
            var opPos = optimisedPosn();
            // console.log(opPos);
            if (opPos[0] === -1) {
              var opPos = optimalPosition("O");
            }
            let box = document.getElementById(`box${opPos[0]}${opPos[1]}`);
            box.innerText = "O";
            box.style.textShadow = `rgb(255 255 255) 0px 0px 4px, rgb(255 255 255) 0px 0px 11px, rgb(255 255 255) 0px 0px 19px, rgb(27 255 0) 0px 0px 40px, rgb(27 255 0) 0px 0px 80px, rgb(27 255 0) 0px 0px 90px, rgb(27 255 0) 0px 0px 100px, rgb(27 255 0) 0px 0px 150px`;
            positions[opPos[0]][opPos[1]] = "O";

            playercount++;
            p2.innerText = "Wait for your turn";
            p1.innerText = "Your Turn";

            if (checkwin("O")) {
              playerWon("O");
              blurloser("X");
              document.getElementsByClassName("p11")[0].style.boxShadow =
                "none";
              dash.style.boxShadow =
                "0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #4aff0f, 0 0 0.8rem#4aff0f, 0 0 2.8rem #4aff0f, inset 0 0 1.3rem #4aff0f";
              p2.innerText = "Congratulations! You Won";
              p1.innerText = "Try again Next time";
            } else if (Completed()) {
              p1.innerText = "Match Draw";
              p2.innerText = "Match Draw";

              document.getElementsByClassName("p11")[0].style.boxShadow =
                "none";
              document.getElementsByClassName("p22")[0].style.boxShadow =
                "none";
            }
          }, 1000);
        }
      }
    }
  }
};

const checkWin = (char, check = false, tempPositions) => {
  let Won = false;
  for (let i = 0; i < 3; i++) {
    let oneRow = true;
    for (let j = 0; j < 3; j++) {
      if (tempPositions[i][j] !== char) {
        oneRow = false;
      }
    }
    if (oneRow) {
      winningrow = [0, i];
      if (!check) setdash(winningrow);
      Won = true;
      return Won;
    }
  }
  for (let i = 0; i < 3; i++) {
    let oneRow = true;
    for (let j = 0; j < 3; j++) {
      if (tempPositions[j][i] !== char) {
        oneRow = false;
      }
    }
    if (oneRow) {
      winningrow = [1, i];
      if (!check) setdash(winningrow);
      Won = true;
      return Won;
    }
  }
  let diagonal = true;
  for (let i = 0; i < 3; i++) {
    if (tempPositions[i][i] !== char) {
      diagonal = false;
    }
  }
  if (diagonal) {
    winningrow = [2, 0];
    if (!check) setdash(winningrow);
    Won = true;
    return Won;
  }
  // 02 11 20
  let oppdiagonal = true;
  for (let i = 0; i < 3; i++) {
    if (tempPositions[i][2 - i] !== char) {
      oppdiagonal = false;
    }
  }
  if (oppdiagonal) {
    winningrow = [2, 1];
    if (!check) setdash(winningrow);
    Won = true;
    return Won;
  }

  return Won;
};
const completed = (tempPositions) => {
  let bool = true;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (tempPositions[i][j] === 0) {
        bool = false;
      }
    }
  }
  return bool;
};

const possibleWins = (i, j, player, tempPositions, turn) => {
  tempPositions[i][j] = turn;
  if (checkWin(player, true, tempPositions)) {
    tempPositions[i][j] = 0;
    return [1, 0, 0];
  }
  if (checkWin(player === "X" ? "O" : "X", true, tempPositions)) {
    tempPositions[i][j] = 0;
    return [0, 1, 0];
  }
  if (Completed(tempPositions)) return [0, 0, 1];
  let ct = [0, 0, 0];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (tempPositions[i][j] === 0) {
        var a = possibleWins(
          i,
          j,
          player,
          tempPositions,
          turn === "X" ? "O" : "X"
        );
        ct[0] += a[0];
        ct[1] += a[1];
        ct[2] += a[2];
      }
    }
  }
  tempPositions[i][j] = 0;
  return ct;
};

const optimalPosition = (player) => {
  let tempPositions = JSON.parse(JSON.stringify(positions));
  console.log(tempPositions);
  console.log(positions);
  let max = -1,
    pos1 = -1,
    pos2 = -1;
  let arr = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (tempPositions[i][j] === 0) {
        let ct = possibleWins(
          i,
          j,
          player,
          tempPositions,
          player === "X" ? "X" : "O"
        );
        arr.push([ct, [i, j]]);
        // console.log(ct);
      }
    }
  }
  arr.sort((a, b) => {
    if (a[0][1] < b[0][1]) return -1;
    else if (a[0][1] > b[0][1]) return 1;
    else {
      if (a[0][0] > b[0][0]) return -1;
      else if (a[0][0] < b[0][0]) return 1;
      else {
        if (a[0][2] > b[0][2]) return -1;
        else if (a[0][2] < b[0][2]) return 1;
        else return 0;
      }
    }
  });
  console.log(arr);
  return [arr[0][1][0], arr[0][1][1]];
};
