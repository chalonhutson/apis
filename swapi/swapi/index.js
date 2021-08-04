const button = document.querySelector('button');
const container = document.querySelector('#resident-container')

let getResidents = (e) => {console.log("Button clicked, yo!")};

let swapiCall = () => {
    axios.get("https://swapi.dev/api/planets/?search=Alderaan")
    .then (res => {
        let residents = res.data.results[0].residents
        console.log(residents)
        

        residents.forEach(el => {
        axios.get(el)
            .then (res => {
                const residentCard = document.createElement('h2')

    
                residentCard.innerHTML = `${res.data.name}`

                container.appendChild(residentCard)
        })
    })
    
    }).catch(err => console.log(err))
}



button.addEventListener("click", swapiCall);