// const express = require('express')
// const router = express.Router();
// const fs = require('fs');

// const commentsFilePath = './data/video-details.json';

// const readComments = () => {
//     const fileContent = fs.readFileSync(commentsFilePath)
//     const parsedFileContent = JSON.parse(fileContent)
//     return parsedFileContent;
// }

// router.get('/', (_req, res) => {
//     try {
//         const comments = readComments().map((video) => {
//             return video.comments;
//         })
//     return res.status(200).json(comments)
//     } catch(err) {
//         return res.status(500).json({error: 'file cant be read'})
//     }
// })

// module.exports = router;