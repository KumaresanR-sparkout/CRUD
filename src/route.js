import express from 'express'
import users from './model'
const router = express.Router()
router.use(express.json())

router.post('/postdata', async (req, res) => {
    try {
        const data = new users(req.body)

        const userData = await users.find({ email: req.body.email })

        if (userData[0]) {

            res.send("Data has been already present")
        }

        else {
            try {

                const t = await data.save();

                if (t) {
                    console.log("Data saved")
                    res.status(201).send(t)
                }
            }
            catch (e) {
                res.send(e.message)
            }

        }
    }
    catch (e) {
        res.send(e.message)
    }

})

router.get('/getdata/:name', async (req, res) => {
    try {
        const par = req.params.name
        const data = await users.find({ name: par })
        console.log(data)
        res.status(200).send(data)
    }
    catch (e) {
        res.send(e.message)
    }
})
router.put('/updatedata/:name', async (req, res) => {
    const r = req.params.name
    try {
        const userData = await users.find({ name: req.params.name })

        if (userData[0]) {
            const id = userData[0]._id.toString()
            try {
                const update = await users.updateOne({ _id: id }, { $set: { name: req.body.name } })
                res.send(update)
            }
            catch (e) {
                res.send(e.message)
            }
        }
        else {
            res.send("no data present")
        }
    }
    catch (e) {
        res.send(e.message)
    }
})

router.delete('/deletedata/:email', async (req, res) => {
    try {
        console.log(req.params.email)
        const userData = await users.find({ email: req.params.email })

        if (userData[0]) {
            try {
                const data = await users.deleteOne({ email: req.params.email })
                res.send(data)
            }
            catch (e) {
                res.send(e.message)
            }

        }
        else {
            res.send("No data found")
        }
    }
    catch (e) {
        res.send(e.message)
    }
})

export default router