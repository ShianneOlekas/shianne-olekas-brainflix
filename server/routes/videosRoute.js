const express = require('express')
const router = express.Router();
const fs = require('fs');
const uniqid = require('uniqid'); 

const commentsFilePath = './data/video-details.json';

const getVideoData = () => {
    const fileContent = fs.readFileSync(commentsFilePath)
    const parsedFileContent = JSON.parse(fileContent)
    return parsedFileContent;
    
}

router.get('/', (_req, res) => {
    try {
        const videoData = getVideoData().map((video) => {
            return {
                id: video.id,
                title: video.title,
                channel: video.channel,
                image: video.image,
            }
        })
    return res.status(200).json(videoData)
    } catch(err) {
        return res.status(500).json({error: 'file cant be read'})
    }
})

router.get('/:id', (req, res) => {
    console.log(req.params.id);
    try {
        const videoData = getVideoData().find(video => video.id === req.params.id)
    return res.status(200).json(videoData)
    } catch(err) {
        return res.status(500).json({error: 'file cant be read'})
    }
})

router.post('/', (req, res) => {
    const uploadVideo = {
        id: uniqid(),
        title: req.body.title,
        channel: 'AnaBanana',
        image: '',
        description: req.body.description,
        views: '702',
        likes: '3',
        duration: '1:26',
        video: '',
        timestamp: Date.now(),
        comments: [],
    };

    const updatedVideoList = getVideoData();

    updatedVideoList.push(uploadVideo);

    res.json(updatedVideoList);
})

module.exports = router;