//this function makes a list of every update button
//and assigns each one an event listener that appends the update form inputs the div that the user wants to change,
//this also populates the input fields with the item information for easier entry


const chooseUpdate = document.querySelector('.choose-update')
const updateForm = document.querySelector('#update-form')
const updateButton = document.querySelector('#update-button.parentElement')
// const itemEntry = document.querySelector('.item-entry')
const chooseUpdateList = document.querySelectorAll('.choose-update')
// console.log(chooseUpdateList.length)

let selectedItemId

for (let i = 0; i < chooseUpdateList.length; i++)
{
    chooseUpdateList[i].addEventListener('click', () => {
        const itemInfo = chooseUpdateList[i].parentNode.parentElement
        chooseUpdateList[i].parentNode.appendChild(updateForm)
        const selectedId = itemInfo.querySelector('.item-id')
        const selectedProductName = itemInfo.querySelector('.product-name')
        const selectedProductType = itemInfo.querySelector('.product-type')
        const selectedQuantity = itemInfo.querySelector('.quantity')
        const selectedExpiration = itemInfo.querySelector('.expiration-date')
        const selectedLastOrdered = itemInfo.querySelector('.last-ordered')

        selectedItemId = selectedId.innerHTML
        document.querySelector('.update-id').value = selectedId.textContent
        document.querySelector('.update-name').value = selectedProductName.textContent
        document.querySelector('.update-type').value = selectedProductType.textContent
        document.querySelector('.update-quantity').value = selectedQuantity.textContent
        document.querySelector('.update-expiration').value = selectedExpiration.textContent
        document.querySelector('.update-last-ordered').value = selectedLastOrdered.textContent
        console.log('Selected Item Id: ' + selectedItemId)
        // console.log(selectedId, selectedProductName, selectedProductType,
        //     selectedQuantity, selectedExpiration, selectedLastOrdered
        // )

})
}