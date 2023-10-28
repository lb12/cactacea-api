const CreateCactusDTO = require("../../application/dtos/create-cactus-dto")
const CreateCactusUseCase = require("../../application/use-cases/create-cactus-use-case")


class CactusController {
  /**
   * Initializes the constructor with the provided dependencies.
   *
   * @param {CreateCactusUseCase} createCactusUseCase - The createCactusUseCase object.
   */
  constructor(createCactusUseCase) {
    this.createCactusUseCase = createCactusUseCase
  }

  createCactus = async (req, res) => {
    try {
      const createCactusDTO = new CreateCactusDTO(req.body)
      const cactus = await this.createCactusUseCase.execute(createCactusDTO)
      res.status(201).json(cactus)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  // Otros metodos del controlador
}

module.exports = CactusController