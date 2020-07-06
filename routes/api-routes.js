const router = require("express").Router();
const Workout = require("../public/workout.js");

router.get("/api/workouts", async (req, res) => {
    try {
        let workouts = await Workout.find({});
        res.json(workouts);
    }

    catch (err) {
        res.status(400).json(err);
    }
});

router.post("/api/workouts", async (req, res) => {
    try {
        const workout = await Workout.create(req.body);
        res.json(workout);
    }

    catch (err) {
        res.status(400).json(err);
    }
});

router.put("/api/workouts/:id", async (req, res) => {
    try {
        const workout = await Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } });
        res.json(workout);
    }

    catch (err) {
        res.status(400).json(err);
    }
});

router.get("/api/workouts/range", async (req, res) => {
    try {
        let workouts = await Workout.find({});
        res.json(workouts);
    }

    catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;