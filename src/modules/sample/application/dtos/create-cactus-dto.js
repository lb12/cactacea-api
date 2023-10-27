class CreateCactusDTO {
  constructor({ name, species, age, description, image }) {
    this.name = name
    this.species = species
    this.age = age
    this.description = description
    this.image = image
  }
}

module.exports = CreateCactusDTO