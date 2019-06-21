
// LIGHTNING EXERCISE ONE

const createDoctorData = (name, specialty, address) => {
    return {
        Name: name,
        Specialty: specialty,
        Address: address
    }
}

let docOne = createDoctorData("Dr.Jones", "General Practitioner", "3256 Medical Lane")


// LIGHTNING EXERCISE TWO


const BowWowKennels = []

const createMyPet = (name, breed) => {
    let newPet = {
        Pet_Name: name,
        Pet_Breed: breed
    }
    BowWowKennels.push(newPet)
}

let animalOne = createMyPet("Charlie", "German Sheperd")
let animalTwo = createMyPet("Ramses", "Orange Tabby")
let animalThree = createMyPet("Fido", "Iguana")


