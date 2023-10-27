const CreateCactusDTO = require("../../application/dtos/create-cactus-dto")

class CactusController {
  constructor({ createCactusUseCase }) {
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