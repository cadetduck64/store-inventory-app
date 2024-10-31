const chooseUpdate = document.querySelector('.choose-update')
const updateForm = document.querySelector('#update-form')
const updateButton = document.querySelector('#update-button.parentElement')
// const itemEntry = document.querySelector('.item-entry')
const chooseUpdateList = document.querySelectorAll('.choose-update')
console.log(chooseUpdateList.length)

let selectedItemId

for (let i = 0; i < chooseUpdateList.length; i++)
{
    chooseUpdateList[i].addEventListener('click', () => {
        chooseUpdateList[i].parentNode.appendChild(updateForm)
        const selectedId = chooseUpdateList[i].parentNode.querySelector('.item-id')
        const selectedProductName = chooseUpdateList[i].parentNode.querySelector('.product-name')
        const selectedProductType = chooseUpdateList[i].parentNode.querySelector('.product-type')
        const selectedQuantity = chooseUpdateList[i].parentNode.querySelector('.quantity')
        const selectedExpiration = chooseUpdateList[i].parentNode.querySelector('.expiration-date')
        const selectedLastOrdered = chooseUpdateList[i].parentNode.querySelector('.last-ordered')

        selectedItemId = selectedId.innerHTML
        document.querySelector('.update-id').value = selectedId.textContent
        document.querySelector('.update-name').value = selectedProductName.textContent
        document.querySelector('.update-type').value = selectedProductType.textContent
        document.querySelector('.update-quantity').value = selectedQuantity.textContent
        document.querySelector('.update-expiration').value = selectedExpiration.textContent
        document.querySelector('.update-last-ordered').value = selectedLastOrdered.textContent
        console.log(selectedItemId)
        // console.log(selectedId, selectedProductName, selectedProductType,
        //     selectedQuantity, selectedExpiration, selectedLastOrdered
        // )

})
}