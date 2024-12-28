import rateLimit from 'express-rate-limit';

const rateLimitConfig = rateLimit({
    windowMs: 1000 * 60 * 15,
    max: 100,
    message: 'Too many requests from this IP'
});

export default rateLimitConfig;