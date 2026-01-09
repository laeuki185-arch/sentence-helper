/***********************
 * 공통 유틸
 ***********************/
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

/***********************
 * GB 영어 문장 도움
 ***********************/
let enWords = [];
let enSelected = [];

function helpEn() {
  const input = document.getElementById("words-en");
  const cards = document.getElementById("cards-en");
  const result = document.getElementById("result-en");
  const selectedBox = document.getElementById("selected-en");

  enWords = input.value.split("/").map(w => w.trim());
  enSelected = [];

  cards.innerHTML = "";
  selectedBox.innerHTML = "";
  result.innerHTML = "";

  shuffle(enWords).forEach(word => {
    const btn = document.createElement("button");
    btn.textContent = word;
    btn.onclick = () => selectEn(word, btn);
    cards.appendChild(btn);
  });
}

function selectEn(word, btn) {
  const selectedBox = document.getElementById("selected-en");
  const result = document.getElementById("result-en");

  btn.disabled = true;
  enSelected.push(word);

  const span = document.createElement("span");
  span.textContent = word + " ";
  selectedBox.appendChild(span);

  if (enSelected.length === 1) {
    result.textContent = "💡 힌트: 보통 주어부터 시작해요";
  }
}

function resetEn() {
  document.getElementById("cards-en").innerHTML = "";
  document.getElementById("selected-en").innerHTML = "";
  document.getElementById("result-en").innerHTML = "";
}

/***********************
 * KR 한국어 문장 도움
 ***********************/
let koWords = [];
let koSelected = [];

function helpKo() {
  const input = document.getElementById("words-ko");
  const cards = document.getElementById("cards-ko");
  const result = document.getElementById("result-ko");
  const selectedBox = document.getElementById("selected-ko");

  koWords = input.value.split("/").map(w => w.trim());
  koSelected = [];

  cards.innerHTML = "";
  selectedBox.innerHTML = "";
  result.innerHTML = "";

  shuffle(koWords).forEach(word => {
    const btn = document.createElement("button");
    btn.textContent = word;
    btn.onclick = () => selectKo(word, btn);
    cards.appendChild(btn);
  });
}

function selectKo(word, btn) {
  const selectedBox = document.getElementById("selected-ko");
  const result = document.getElementById("result-ko");

  btn.disabled = true;
  koSelected.push(word);

  const span = document.createElement("span");
  span.textContent = word + " ";
  selectedBox.appendChild(span);

  if (koSelected.length === 1) {
    result.textContent = "💡 힌트: 보통 주어부터 선택해요";
  }
}

function resetKo() {
  document.getElementById("cards-ko").innerHTML = "";
  document.getElementById("selected-ko").innerHTML = "";
  document.getElementById("result-ko").innerHTML = "";
}
