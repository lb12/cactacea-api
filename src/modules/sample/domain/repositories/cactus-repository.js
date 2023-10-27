class CactusRepository {
  list
  constructor () {
    this.list = []
  }
  create (cactus) {
    // Implementación para guardar un cactus en la base de datos
    console.log('Crear un cactus en el repositorio', JSON.stringify(cactus))
    const id = this.list.length + 1
    const doc = {
      id,
      ...cactus
    }
    this.list.push(doc)
    return doc
  }

  update (cactus) {
    // Implementación para actualizar un cactus en la base de datos
  }

  getById (id) {
    // Implementación para obtener un cactus por id
    return this.list.find(cactus => cactus.id === id)
  }

  // Otros metodos del repositorio
}

module.exports = CactusRepository