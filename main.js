let todoList = null;
let todoForm = null;
let todoSearch = null;

function addTask(text) {
    console.log('Dodaję zadanie do listy')
}

document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.querySelector('#pokemonForm');
    const formData = new FormData();

    const name = null;
    const type = null;
    const strength = null;
    const agility = null;

    try {
        todoForm.addEventListener('submit', function(e) {
            console.log("Inside event listener");
            e.preventDefault();
            const  name = this.querySelector('input[name="name"]');
            const  type = this.querySelector('type');
            const  strength = this.querySelector('strength');
            const  agility = this.querySelector('agility');
            console.log("name:",name);
            console.log("type:",type);

            sendCreateData(name,type,strength,agility);
        });

        sendCreateData(formData);
    } catch (error) {
        console.log("Blad", error);
    }
   
});

function sendCreateData(name,type, strength, agility) {
    let pokemonObject;
    console.log("Sending submit");
    fetch("http://localhost:8000/api/pokemons/create?name=" + name.toString() + "&type=" + type.toString() + "&strength=" + strength.toString() + "&agility=" + agility.toString(), {
           method:"get",
            mode:"no-cors"
        })
        .then(res => res.json())
        .then(data => pokemonObject = data)

    return pokemonObject;
}
