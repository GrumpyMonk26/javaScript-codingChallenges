let myRef = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myRef") )
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myRef = leadsFromLocalStorage
    render(myRef)
}

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myRef.push(tabs[0].url)
        localStorage.setItem("myRef", JSON.stringify(myRef) )
        render(myRef)
    })
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myRef = []
    render(myRef)
})

inputBtn.addEventListener("click", function() {
    myRef.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myRef", JSON.stringify(myRef) )
    render(myRef)
})