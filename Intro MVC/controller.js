function selectedAdjective(el){
    let word = el.innerText
     blank1 = word
     updateView()
    console.log(word)
}

function selectedVerb(el){
    let word = el.innerText
     blank3 = word
updateView()
}

function selectedNoun(el){
    let word = el.innerText
     if (blank2 == "_____" ){
        blank2 = word
     } else {
        blank4 = word
     }
updateView()
}