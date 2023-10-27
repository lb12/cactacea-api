/**
 * Clase que representa un cactus.
 * @class
 */
class Cactus {
  /**
   * Creates a new instance of the constructor.
   *
   * @param {number} id - the id of the object
   * @param {string} name - the name of the object
   * @param {array<string>} species - the species of the object
   * @param {number} age - the age of the object
   * @param {string} description - the description of the object
   * @param {string} image - the image of the object
   */
  constructor(id, name, species, age, description, image) {
    this.id = id
    this.name = name
    this.species = species
    this.age = age
    this.description = description
    this.image = image
  }
}

module.exports = Cactus