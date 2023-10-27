class CreateCactusUseCase {
  constructor({ cactusRepository }) {
    this.cactusRepository = cactusRepository;
  }

  async execute(createCactusDTO) {
    // Validaciones y lógica de negocio
    const newCactus = null /* Crear una instancia de Cactus usando createCactusDTO */
    return this.cactusRepository.create(createCactusDTO)
  }
}

module.exports = CreateCactusUseCase