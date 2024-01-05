let db
let products = document.getElementById("products")
function getData() {
    products.innerHTML = ''
    axios.get(`https://6569b50bde53105b0dd78115.mockapi.io/adCart`)
        .then(res => {
            db = res.data
            db.forEach(element => {
                let cardBox = document.createElement("div")
                cardBox.className = "cartBox"
                cardBox.innerHTML = `
            
            <div class="divImg">
                <img src=${element['0'].avatar} alt="">
            </div>
            <div class="divText">
                <h5>
                    ${element['0'].name}
                </h5>
                <p>$ ${element['0'].price}</p>
                <button  onclick="sil(${element.id})"><i class="fa-solid fa-trash"></i></button>
            </div>    
            
            `
                products.appendChild(cardBox)
            });
        })
}



window.onload = () => {
    getData()
}





async function sil(id) {
    await axios.delete(`https://6569b50bde53105b0dd78115.mockapi.io/adCart/${id}`)
    getData()
}