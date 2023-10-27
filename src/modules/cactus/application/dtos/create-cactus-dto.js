class CreateCactusDTO {
  constructor({ name, species, age, description, image }) {
    this.name = name || ''
    this.species = species || []
    this.age = age || 0
    this.description = description || ''
    this.image = image || ''
  }
}

module.exports = CreateCactusDTO