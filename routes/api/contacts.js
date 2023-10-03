const express = require('express');

const ctrl = require('../../controllers');

const router = express.Router();

const { validates, isValidId } = require("../../middlewares");

const { schemas } = require("../../models/contact");
 
router.get('/', ctrl.getAll);

router.get('/:contactId', isValidId, ctrl.getById);

router.post('/', validates.validateBody(schemas.addSchema), ctrl.add);

router.delete('/:contactId', isValidId, ctrl.deleteById);

router.put('/:contactId', isValidId, validates.validateBody(schemas.addSchema), ctrl.updateById);

router.patch('/:contactId/favorite', isValidId, validates.validateFavorite(schemas.updateFavoriteSchema), ctrl.updateStatusContact);

module.exports = router;
