function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    //.then( (res) => {return res.json()}) outra possibilidade
    .then(res => res.json())
    .then(states => {
        
        for(state of states){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}/${state.sigla}</option>`
        }

    })

}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")
    
    const ufValue = event.target.value
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text
    
    
    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then(res => res.json())
    .then(cities => {
        
        for(city of cities){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false
    })

}


document
   .querySelector("select[name=uf]")
   .addEventListener("change", getCities)

// Itens de coleta
// Collection items
const itemsToCollect = document.querySelectorAll(".items-grid li")

for(const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

 const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event) {
    const itemLi = event.target

    // Adcionar ou remover uma classe com javascript
    // Add ou remove a javascript class
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    // verificar se existem itens selecionados, se sim
    // Check if there are selected items, if yes

    // Pegar os itens selecionados
    // Pick up selected items
    const alreadySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemId // isso será true ou false
        return itemFound
    })

    // Se já estiver selecionado, tirar da selecao
    // If already selected, uncheck
    if(alreadySelected >= 0) {
        // Tirar da selecao
        // Remove from selection
        const filteredItems = selectedItems.filter(item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })

        selectedItems = filteredItems
    } else {
        //Se nao estiver selecionado, adicionar à selecao
        //If not selected, add to selection
        selectedItems.push(itemId)
    }

    // Atualizar o campo escondido com os itens selecionados
    // Update the hidden field with the selected items
    collectedItems.value = selectedItems
}