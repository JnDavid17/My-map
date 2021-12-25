const express = require('express');
const router = express.Router();

const storeSchema = require('../schema/stores.schema')


router.get('/', async (req, res) => {
  try {
    const store = await storeSchema.find()
    res.json(store);
  } catch (error) {
    res.status(500).json({message : error.message})
  }
})


router.post('/', async (req, res) => {
  const store = new storeSchema ({
    store_id: req.body.store_id,
    lat: req.body.lat,
    lng: req.body.lng,
    name: req.body.name,
    type: req.body.type,
    calification: req.body.calification
  })
  try {
    const newStore = await store.save()
    res.status(201).json(newStore)
  } catch (error) {
    res.status(400).json({message: error.message})
  }


})

router.put('/:id', async(req,res) => {

  await storeSchema.findOneAndUpdate({
    store_id: req.params.id
  }, {
    calification: req.body.calification
  },{
    useFindAndModify: false
  })
  res.send(true)
})

router.delete('/:id', async (req,res) => {

  await storeSchema.findOneAndDelete({store_id: req.params.id})
  res.send(true)
})




module.exports = router;