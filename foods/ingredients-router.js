const express = require('express');

const foods = require('./foods-model.js');

const router = express.Router();


router.get('/:id/recipes', (req, res) => {
    const { id } = req.params;

    foods.getRecipesByIngredients(id)
      .then(foods => {
        res.json(foods);
      })
      .catch(err => {
          console.log(err)
        res.status(500).json({ message: 'problem with the db' });
      });
  });


// router.get("/:id/recipes", (req, res) => {
//     const { id } = req.params;
  
//     foods.getRecipesByIngredients(id)
//       .then((steps) => {
//         if (steps.length) {
//           res.json(steps);
//         } else {
//           res
//             .status(404)
//             .json({ message: "Could not find steps for given scheme" });
//         }
//       })
//       .catch((err) => {
//         res.status(500).json({ message: "Failed to get steps" });
//       });
//   });

module.exports = router;