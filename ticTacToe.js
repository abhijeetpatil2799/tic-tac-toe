let textFlag = true;

function gapOf3(arr) {
  const firstele = arr[0];
  return arr.includes(firstele + 3) && arr.includes(firstele + 6)
    ? true
    : false;
}

function gapOf4(arr) {
  const firstele = arr[0];
  return arr.includes(firstele + 4) && arr.includes(firstele + 8)
    ? true
    : false;
}

function gapOf1(arr) {
  return (arr.includes(1) && arr.includes(2) && arr.includes(3)) ||
    (arr.includes(4) && arr.includes(5) && arr.includes(6)) ||
    (arr.includes(7) && arr.includes(8) && arr.includes(9))
    ? true
    : false;
}

function checkWinCondition() {
  const one = document.getElementById("first-1").textContent;
  const two = document.getElementById("first-2").textContent;
  const three = document.getElementById("first-3").textContent;
  const four = document.getElementById("second-1").textContent;
  const five = document.getElementById("second-2").textContent;
  const six = document.getElementById("second-3").textContent;
  const seven = document.getElementById("third-1").textContent;
  const eight = document.getElementById("third-2").textContent;
  const nine = document.getElementById("third-3").textContent;
  const detailObj = [
    {
      key: 1,
      text: one,
    },
    {
      key: 2,
      text: two,
    },
    {
      key: 3,
      text: three,
    },
    {
      key: 4,
      text: four,
    },
    {
      key: 5,
      text: five,
    },
    {
      key: 6,
      text: six,
    },
    {
      key: 7,
      text: seven,
    },
    {
      key: 8,
      text: eight,
    },
    {
      key: 9,
      text: nine,
    },
  ];

  const arrX = detailObj.filter((obj) => {
    if (obj.text != undefined || obj.text != "") {
      return obj.text === "X";
    }
  });

  const arrO = detailObj.filter((obj) => {
    if (obj.text != undefined || obj.text != "") {
      return obj.text === "O";
    }
  });

  const XKeys = arrX.map((x) => x.key);
  const Okeys = arrO.map((o) => o.key);

  console.log("Xkeys ", XKeys);
  console.log("Okeys", Okeys);

  if (gapOf3(XKeys) || gapOf4(XKeys) || gapOf1(XKeys)) {
    document.getElementById("main").style.pointerEvents = "none";
    document.getElementById("main").style.opacity = " 50%";
    alert("X is a winner");
  }

  if (gapOf3(Okeys) || gapOf4(Okeys) || gapOf1(Okeys)) {
    document.getElementById("main").style.pointerEvents = "none";
    document.getElementById("main").style.opacity = "50%";
    alert("O is a winner");
  }
}

function onChildClick(child) {
  const textCon = document.getElementById(child).textContent;
  if (textCon == "" || textCon == undefined) {
    document.getElementById(child).textContent = textFlag ? "X" : "O";
    textFlag = !textFlag;
  } else {
    alert("not here");
  }
  checkWinCondition();
}
