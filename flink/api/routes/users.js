const router = require("express").Router();
const User = require("../models/user").router;
const bcrypt = require("bcrypt")


//update user
router.get("/:id", async (req, res) => {
  const userId = req.params.userId;
  try {
    await User.findById(req.params.id)
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});
 

router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json("first error");
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Account has been updated");
    } catch (err) {
      return res.status(500).json("second error");
    }
  } else {
    return res.status(403).json("You can update only your account!");
  }
});

//delete user
//get a user
//follow user
//unfollow user


module.exports = router