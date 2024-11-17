
const namesInput = document.getElementById("namesInput");
const randomizeBtn = document.getElementById("randomizeBtn");
const clearBtn = document.getElementById("clearBtn");
const randomizedResult = document.getElementById("randomizedResult");
const resultList = document.getElementById("resultList");
const historyList = document.getElementById("historyList");


let history = [];


function randomizeArray(array) {
  return array
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ item }) => item);
}


function getCurrentTimestamp() {
  const now = new Date();
  return now.toLocaleString(); 
}


randomizeBtn.addEventListener("click", () => {
  const names = namesInput.value.split(",").map(name => name.trim()).filter(name => name);
  if (names.length === 0) {
    alert("Please enter at least one name!");
    return;
  }

  
  const randomizedNames = randomizeArray(names);


  resultList.innerHTML = "";
  randomizedNames.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    resultList.appendChild(li);
  });
  randomizedResult.classList.remove("hidden");


  
  history.push({ names: randomizedNames, timestamp: getCurrentTimestamp() });
  updateHistory();


  namesInput.value = "";
});


clearBtn.addEventListener("click", () => {
  namesInput.value = "";
});


function updateHistory() {
  historyList.innerHTML = "";
  history.forEach((entry, index) => {
    const li = document.createElement("li");
    li.textContent = `Set ${index + 1} (${entry.timestamp}): ${entry.names.join(", ")}`;
    historyList.appendChild(li);
  });
}
