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