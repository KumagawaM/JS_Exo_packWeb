import 'babel-polyfill';
import dragons from"./dragons.js";
import relationships from "./relationships.js";
import forces from "./forces.js";


let asc = 0;




const addDragons = (data) => {

    const list = document.querySelector('.dragons');
    for(const dragon of data){

        const li = document.createElement("li");

        const forceById = forces.find(a => a.id === dragon.id);
        const average = forceById.notes.reduce((a,b) =>(a + b)) / forceById.notes.length

        li.id = dragon.id;
        li.innerHTML =  `name : ${dragon.name}, element: ${dragon?.element ? dragon.element : ''}, force: ${average}`
        list.appendChild(li);

        const ul =document.createElement("ul");
        const li2 = document.createElement('li');

        const relationById = relationships.find(a => a.id === dragon.id);

        li2.innerHTML = `relation : ${relationById.relations} `;
        ul.appendChild(li2);
        list.appendChild(ul);

    }
}

const sortList = () => {
    const list = document.querySelector('.dragons')

    while (list.firstChild) {
        list.firstChild.remove()
    }

    asc++;

     /*if(asc % 2 == 0 ) {
        const sort_asc = dragons.names.sort((a, b) => b.id - a.id)
        addDragons(sort_asc)
    }else {
        const sort_asc =  dragons.names.sort((a,b) => a.id - b.id)
        addDragons(sort_asc)
    }*/

    (asc % 2 == 0)?  addDragons(dragons.names.sort((a, b) => b.id - a.id))
        : addDragons(dragons.names.sort((a,b) => a.id - b.id))

}

const sortDragons = () =>{

    const buttonElement = document.querySelector('.sort');

    buttonElement.addEventListener('click', function(event){
       sortList()

    })

}

document.body.onload = () => {
    sortDragons();
    addDragons(dragons.names);

}



