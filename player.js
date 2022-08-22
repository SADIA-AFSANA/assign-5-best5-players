const array = [];


function display(selectPlayers) {
    console.log(selectPlayers);

    const tableBody = document.getElementById('players-list');
    tableBody.innerHTML = '';
    for (let i = 0; i < selectPlayers.length; i++) {

        // console.log(array[i].playersName);

        const footballPlayer = array[i].playersName;

        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${footballPlayer}</td>
        
        `;
        if (selectPlayers.length > 5) {
            alert('can not select other players');
            return;
        }

        tableBody.appendChild(tr);
    }

}
function addToPlayer(element) {
    const playersName = element.parentNode.parentNode.children[0].innerText;
    // console.log(pdName);
    element.disabled = true;
    const playerObject = {
        playersName: playersName,

    }

    array.push(playerObject);
    // console.log(array);
    // console.log(array.length);
    document.getElementById('total-added-players').innerText = array.length;
    display(array);
}
document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayer = document.getElementById('per-player-input');
    const perPlayerString = perPlayer.value;
    const perPlayerRate = parseFloat(perPlayerString);
    perPlayer.value = '';

    const playerExpences = document.getElementById('player-Expenses');
    const playerExpencesString = playerExpences.innerText;
    const playerExpencesTotal = parseFloat(playerExpencesString);

    const currentExpenceMoney = array.length * perPlayerRate;
    playerExpences.innerText = currentExpenceMoney;

})

document.getElementById('calculate-total-btn').addEventListener('click', function () {

    const managerExpences = document.getElementById('manager-input');
    const managerExpencesString = managerExpences.value;
    const managerExpenceTotal = parseFloat(managerExpencesString);
    managerExpences.value = '';

    const coachExpences = document.getElementById('coach-input');
    const coachExpencesString = coachExpences.value;
    const coachExpencesTotal = parseFloat(coachExpencesString);
    coachExpences.value = '';

    const calculateTotal = document.getElementById('final-total');
    const calculateTotalString = calculateTotal.innerText;
    const calculateTotalMoney = parseFloat(calculateTotalString);

    const playerExpences = document.getElementById('player-Expenses');
    const playerExpencesString = playerExpences.innerText;
    const playerExpencesTotal = parseFloat(playerExpencesString);


    const totalCost = playerExpencesTotal + coachExpencesTotal + managerExpenceTotal + calculateTotalMoney;
    calculateTotal.innerText = totalCost;
})