const Joi = require('joi')

class CactusValidators {
  static validateCreateCactus = (req, res, next) => {
    const schema = Joi.object({
      name: Joi.string().required(),
      species: Joi.array().required(),
      age: Joi.number().required(),
      description: Joi.string().required(),
      image: Joi.string().required()
    })
    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    next();
  }
}

module.exports = CactusValidators