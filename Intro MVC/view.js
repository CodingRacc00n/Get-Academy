//buttons for the word choices?
//return?
updateView()
function updateView(){
 document.getElementById('app').innerHTML = /*HTML*/`
 Once, there was a ${blank1}  ${blank2} that ${blank3} in the ${blank4} - and great things happened. The End.
    <br>
    <button onclick = "selectedAdjective(this)">Green</button>
    <button onclick = "selectedAdjective(this)">Purple</button>
    <button onclick = "selectedNoun(this)">Man</button>
    <button onclick = "selectedNoun(this)">Raccoon</button>
    <button onclick = "selectedVerb(this)">Digged</button>
    <button onclick = "selectedVerb(this)">Jumped</button>
    <button onclick = "selectedNoun(this)">Trashcan</button>
    <button onclick = "selectedNoun(this)">Wall</button>

 `
}
