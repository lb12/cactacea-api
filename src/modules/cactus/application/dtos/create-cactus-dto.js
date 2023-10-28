
/**
 * Class that represents a create cactus DTO.
 * @class
 */
class CreateCactusDTO {
  /**
   * Creates a new instance of the Cactus class.
   *
   * @param {Object} data - The data of the cactus.
   * @param {string} data.name - The name of the cactus.
   * @param {Array<string>} data.species - The species of the cactus.
   * @param {number} data.age - The age of the cactus.
   * @param {string} data.description - The description of the cactus.
   * @param {string} data.image - The image of the cactus.
   */
  constructor({name, species, age, description, image}) {
    this.name = name || ''
    this.species = species || []
    this.age = age || 0
    this.description = description || ''
    this.image = image || ''
  }
}

module.exports = CreateCactusDTO