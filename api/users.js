const { PrismaClient } = require('@prisma/client');
const cors = require('cors');

const prisma = new PrismaClient();

module.exports = cors()(async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});