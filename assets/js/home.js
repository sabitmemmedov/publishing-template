let db
let page = 1
let limit = 3
let products = document.getElementById("products")
function getData() {
    axios.get(`https://6569b50bde53105b0dd78115.mockapi.io/products?limit=${limit}&page=${page}`)
        .then(res => {
            db = res.data
            db.forEach(element => {
                let cardBox = document.createElement("div")
                cardBox.className = "cartBox"
                cardBox.innerHTML = `
            
            <div class="divImg">
                <img src=${element.avatar} alt="">
            </div>
            <div class="divText">
                <h5>
                    ${element.name}
                </h5>
                <p>$ ${element.price}</p>
                <button  onclick="ad(${element.id})"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>    
            
            `
                products.appendChild(cardBox)
            });
            page++
        })
}


document.getElementById("loadMore").addEventListener("click", getData)

window.onload = () => {
    getData()
}

////////////////////////////////////////////  search name
let inp = document.getElementById("inp")
function searchName() {
    products.innerHTML = ""
    axios.get(`https://6569b50bde53105b0dd78115.mockapi.io/products?name=${inp.value}`)
        .then(res => {
            db = res.data
            db.forEach(element => {
                let cardBox = document.createElement("div")
                cardBox.className = "cartBox"
                cardBox.innerHTML = `
            
            <div class="divImg">
                <img src=${element.avatar} alt="">
            </div>
            <div class="divText">
                <h5>
                    ${element.name}
                </h5>
                <p>$ ${element.price}</p>
                <button  onclick="ad(${element.id})"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>    
            
            `
                products.appendChild(cardBox)
            });
        })
}

document.getElementById("axtar").addEventListener("click", searchName)


//////////////////////// sort 


function sortName() {
    products.innerHTML = ""
    axios.get(`https://6569b50bde53105b0dd78115.mockapi.io/products`)
        .then(res => {
            db = res.data
            let sortedData = db.sort((a, b) => a.name.localeCompare(b.name))
            sortedData.forEach(element => {
                let cardBox = document.createElement("div")
                cardBox.className = "cartBox"
                cardBox.innerHTML = `
            
            <div class="divImg">
                <img src=${element.avatar} alt="">
            </div>
            <div class="divText">
                <h5>
                    ${element.name}
                </h5>
                <p>$ ${element.price}</p>
                <button  onclick="ad(${element.id})"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>    
            
            `
                products.appendChild(cardBox)
            });
        })
}

document.getElementById("sort").addEventListener("click", sortName)


///////////////ad To cart

async function ad(id) {
   let datalar = []
    datalar.push(db.find(element => element.id == id))
    await axios.post(`https://6569b50bde53105b0dd78115.mockapi.io/adCart/`,datalar)
}