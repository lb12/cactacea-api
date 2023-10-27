class CactusRepository {
  create (cactus) {
    // Implementación para guardar un cactus en la base de datos
    console.log('Crear un cactus en el repositorio', JSON.stringify(cactus))
  }

  update (cactus) {
    // Implementación para actualizar un cactus en la base de datos
  }

  getById (id) {
    // Implementación para obtener un cactus por id
  }

  // Otros metodos del repositorio
}

module.exports = CactusRepository