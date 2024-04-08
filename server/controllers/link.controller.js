const redis = require('redis');
const Link = require("../models/url.model");
const errorHandler = require("../utils/error");
const generateHashedString = require("../utils/generateLink");

async function shortenLink(req, res, next) {
    const { url, back_half, title, id, username } = req.body;
    if (!url || !title) {
        next(errorHandler(400, 'All fields are required'));
    }
    // const { id, username } = req.user;
    try {
        const existingLink = await Link.findOne({ url });
        if (existingLink) {
            next(errorHandler(400, 'Link already exists'));
        }
        if (back_half) {
            const existingBackHalf = await Link.findOne({ back_half });
            if (existingBackHalf) {
                next(errorHandler(400, 'Back half already exists'));
            }

            const newLink = new Link({
                url,
                shortUrl: back_half,
                title,
                user: id
            });
            await newLink.save();
            res.status(201).json({ message: 'Link created successfully' });
        } else {

            const shortUrl = generateHashedString(username);
            const newLink = new Link({
                url,
                shortUrl,
                title,
                user: id
            });
            await newLink.save();
            res.status(201).json({ message: 'Link created successfully' });
        }

    }
    catch (error) {
        console.log(error);
        next(errorHandler(400, error.message));
    }
}

async function redirectToOriginalLink(req, res, next) {
    const { shortUrl } = req.params;
    const client = redis.createClient({ url: 'redis://127.0.0.1:6379' }); // Create Redis client
    await client.connect(); // Connect to Redis server
    try {
        // Check Redis cache for short URL
        const cachedUrl = await client.get(shortUrl);

        if (cachedUrl) {
            console.log('Link retrieved from Redis cache');
            res.redirect(cachedUrl);
            const link = await Link.findOne({ shortUrl });
            link.clicks++;
            await link.save();
            return;
            // next();
        } else {
            const link = await Link.findOne({ shortUrl });

            if (!link) {
                return next(errorHandler(404, 'Link not found'));
            }

            // Update link object in database (consider background updates)
            link.clicks++;
            await link.save(); // Update database for better consistency

            // Cache the retrieved link in Redis
            await client.set(shortUrl, link.url, { EX: 3600 }); // Set expiry for 1 hour
            console.log('Link retrieved from database and cached in Redis');

            return res.redirect(link.url);

        }

    } catch (error) {
        console.error(error);
        next(errorHandler(400, error.message));
    }
}

module.exports = {
    shortenLink,
    redirectToOriginalLink,
    // incrementClicks
};