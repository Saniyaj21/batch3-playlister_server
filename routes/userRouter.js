import express from 'express';


const router = express.Router(); 

router.get('/', (req, res) => {
  res.send('Main user');
});
router.get('/login', (req, res) => {
  res.send('login');
});

export default router;


