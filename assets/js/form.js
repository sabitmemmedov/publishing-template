let Name = document.getElementById("name")
let Surname = document.getElementById("surname")
let Uname = document.getElementById("uname")
let upName = document.getElementById("upname")
let upSurname = document.getElementById("upsurname")
let upUname = document.getElementById("upuname")
let idd  = document.getElementById("idd")

async function postApi(e) {
    e.preventDefault()
    let data = {
        name: Name.value,
        surname: Surname.value,
        email: Uname.value
    }
    await axios.post(`https://655e4b479f1e1093c59add07.mockapi.io/users/`, data)
    console.log(data);
}

document.getElementById("postForm").addEventListener("submit", postApi)


//////////////////////////////////// update


async function updateApi(e) {
    e.preventDefault()
    let data = {
        name: upName.value,
        surname: upSurname.value,
        email: upUname.value
    }
    await axios.put(`https://655e4b479f1e1093c59add07.mockapi.io/users/${idd.value}`, data)
    console.log(data);
}

document.getElementById("updateForm").addEventListener("submit" , updateApi)
