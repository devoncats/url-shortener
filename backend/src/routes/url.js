const express = require('express')
const PrismaClient = require('@prisma/client').PrismaClient

const router = express.Router()
const prisma = new PrismaClient()

router.post('/', async (req, res) => {
  await prisma.url.create({ data: req.body })
  res.send('Created a new url!')
})

router.get('/', async (req, res) => {
  const urls = await prisma.url.findMany()
  res.json(urls)
})

router.get('/:short', async (req, res) => {
  const url = await prisma.url.findUnique({ where: { short: req.params.short } })

  if (url) res.redirect(url.long)
  else res.send('URL not found!')
})

module.exports = router
