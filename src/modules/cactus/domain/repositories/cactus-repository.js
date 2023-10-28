const Cactus = require("../entities/cactus")


/**
 * Class that represents a cactus repository.
 * @class
 */
class CactusRepository {
  /**
   * The list of cactuses.
   * @type {Array<Cactus>}
   */
  list
  constructor () {
    this.list = []
  }
  /**
   * Creates a new cactus in the database.
   *
   * @param {Cactus} cactus - The cactus object to be saved.
   * @return {Cactus} The newly created cactus object.
   */
  create (cactus) {
    // Implementación para guardar un cactus en la base de datos
    const id = this.list.length + 1
    const doc = new Cactus(id, cactus.name, cactus.species, cactus.age, cactus.description, cactus.image)
    this.list.push(doc)
    return doc
  }

  update (cactus) {
    // Implementación para actualizar un cactus en la base de datos
  }

  /**
   * Obtains a cactus by id.
   *
   * @param {number} id - the id of the cactus to retrieve
   * @return {Cactus} the cactus with the specified id
   */
  getById (id) {
    // Implementación para obtener un cactus por id
    return this.list.find(cactus => cactus.id === id)
  }

  // Otros metodos del repositorio
}

module.exports = CactusRepository