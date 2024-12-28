import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
    try {
        res.status(200).json(
            {
                status: 'OK',
                message: 'Server is healthy'
            }
        )
    } catch (err) {
        res.status(500).json(
            {
                status: 'error',
                message: 'Server is not healthy',
                error: err.message
            }
        )
    }
})

export default router;