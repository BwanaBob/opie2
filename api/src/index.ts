
import express from 'express';
import healthRouter from './routes/health';
import { prisma } from './services/prisma';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use('/health', healthRouter);

// Example: test Prisma connection
app.get('/dbtest', async (req, res) => {
  try {
    const result = await prisma.$queryRaw`SELECT 1`;
    res.json({ ok: true, result });
  } catch (err) {
    res.status(500).json({ ok: false, error: err });
  }
});

app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});
