const express = require('express')
const CactusController = require('../controllers/cactus-controller')
const CactusRepository = require('../../domain/repositories/cactus-repository')

const router = express.Router()
const cactusRepository = new CactusRepository()
const createCactusUseCase = new CreateCactusUseCase({ cactusRepository })
const cactusController = new CactusController({ createCactusUseCase })

router.post('/', cactusController.createCactus)