const express = require('express')

const CactusValidators = require('../validators/cactus-validators')
const CactusController = require('../controllers/cactus-controller')
const CreateCactusUseCase = require('../../application/use-cases/create-cactus-use-case')
const CactusRepository = require('../../domain/repositories/cactus-repository')

const router = express.Router()
const cactusRepository = new CactusRepository()
const createCactusUseCase = new CreateCactusUseCase(cactusRepository)
const cactusController = new CactusController(createCactusUseCase)

router.post('/', CactusValidators.validateCreateCactus, cactusController.createCactus)

module.exports = router