const { nanoid } = require('nanoid')
const animalPoints = require('../data/animalPoints.json')
const inform = console.log


const create = (animals, animalName) => {
    const animal = {
        name: animalName,
        id: nanoid(4),
        points: animalPoints[animalName] || Math.floor(Math.random() * 50)
    }
    animals.push(animal)
    return animals
}


const index = (animals) => {
    return animals.map((animal) => `${animal.id}: ${animal.name}`).join('\n')
}


const show = (animals, animalId) => {
    const animal = animals.find((animal) => animal.id === animalId)
    return `${animal.id}: ${animal.name} has ${animal.points} points`
}

const destroy = (animals, animalId) => {
    const index = animals.findIndex((animal) => animal.id === animalId)
    if(index > -1){
        animals.splice(index, 1)
        inform("Animal successfully removed from the collection")
        return animals
    } else {
        inform("Animal not found. No action taken.")
        return animals
    }
}

const edit = (animals, animalId, updatedAnimal) => {
    const index = animals.findIndex((animal) => animal.id === animalId)
    if(index > -1){
        animals[index].name = updatedAnimal
        animals[index].points = animalPoints[updatedAnimal] || Math.floor(Math.random() * 50)
        inform("Animal successfully updated")
    } else { 
        inform("Animal not found. No action taken")
    }
    return animals
}


module.exports = { 
    create, 
    index, 
    show, 
    destroy,
    edit
}