const Cactus = require("../../domain/entities/cactus");
const CactusRepository = require("../../domain/repositories/cactus-repository");
const CreateCactusDTO = require("../dtos/create-cactus-dto");

/**
 * Class that represents a create cactus use case.
 * @class
 */
class CreateCactusUseCase {
  /**
   * Initializes a new instance of the class.
   *
   * @param {CactusRepository} cactusRepository - The cactus repository.
   */
  constructor(cactusRepository) {
    this.cactusRepository = cactusRepository;
  }

  /**
   * Executes the createCactus function.
   * @param {CreateCactusDTO} createCactusDTO - description of the parameter
   * @return {Promise<Cactus>} description of the return value
   */
  execute = async (createCactusDTO) => {
    // Validaciones y lógica de negocio
    const newCactus = null /* Crear una instancia de Cactus usando createCactusDTO */
    return this.cactusRepository.create(createCactusDTO)
  }
}

module.exports = CreateCactusUseCase