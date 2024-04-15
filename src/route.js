const express = require('express')
const user = require('./model')
const router = express.Router()
router.use(express.json())

router.post('/postdata', async (req, res) => {
    const data = new user(req.body)

    const obj = await user.find({ email: req.body.email })

    if (obj[0]) {

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

})

router.get('/getdata/:name', async (req, res) => {
    try {
        const par = req.params.name
        const data = await user.find({ name: par })
        console.log(data)
        res.status(200).send(data)
    }
    catch (e) {
        res.send(e.message)
    }
})
router.put('/updatedata/:name', async (req, res) => {
    const r = req.params.name
    const obj = await user.find({ name: req.params.name })

    if (obj[0]) {
        const id = obj[0]._id.toString()
        try {
            const update = await user.updateOne({ _id: id }, { $set: { name: req.body.name } })
            res.send(update)
        }
        catch (e) {
            res.send(e.message)
        }
    }
    else {
        res.send("no data present")
    }
})

router.delete('/deletedata/:email', async (req, res) => {
    try {
        console.log(req.params.email)
        const obj = await user.find({ email: req.params.email })
        
        if(obj[0]){
            try{
                const data=await user.deleteOne({email:req.params.email})
                res.send(data)
            }
            catch(e){
                res.send(e.message)
            }
            
        }
        else{
            res.send("No data found")
        }
    }
    catch(e){
        res.send(e.message)
    }
})

module.exports = router