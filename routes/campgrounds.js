const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const Campground = require('../models/campground');
const {isLoggedIn , isAuthor, validateCampground} = require('../middleware')

const campgrounds = require('../controllers/campgrounds')

const {storage} = require('../cloudinary')
const multer  = require('multer')
const upload = multer({ storage })
// ======================
// Index page
router.get('/', catchAsync(campgrounds.index));

// ======================
// Create new campground page (must be signed in)
router.get('/new', isLoggedIn, campgrounds.renderNewForm)

router.post('/', isLoggedIn, upload.array('image'), validateCampground, catchAsync(campgrounds.createCampground))

// ======================
// Campgrounds' show page
router.get('/:id', catchAsync(campgrounds.showCampground));

// ======================
// Campgrounds' Edit page
router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgrounds.renderEditForm))
router.put('/:id', isLoggedIn, isAuthor, upload.array('image'),validateCampground, catchAsync(campgrounds.updateCampground));

// ======================
// Deleting campgrounds
router.delete('/:id', isLoggedIn, isAuthor, catchAsync(campgrounds.deleteCampground));

// ======================
module.exports = router;