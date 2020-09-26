const router = require("express").Router();
const Workout = require("../models/Workout");

//ALL ROUTES IN HERE ARE ALREADY MOUNTED ON /api

router.get("/workouts", (req, res) => {
    Workout.find({})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.json(err);
    });
});

router.put("/workouts/:id", ({body, params}, res) => {
    Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } }, {new: true, runValidators: true})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.post("/workouts", (req, res) => {

    Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.post("/workouts/range",function (req,res){    
    Workout.create({})
    .then(data => res.json(data))
    .catch(err => { 
        res.json(err)
    })
});

router.get("/workouts/range", (req, res) => {
    Workout.find({})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.json(err);
    });
});

module.exports = router;