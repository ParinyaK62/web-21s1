const { getVideo,getSuggestions } = require('../_services/fakeapi')

const videoDetails1 = (req, res) => {
  const videoId = req.params.code
  const video = getVideo(videoId)
  const teases = getSuggestions(6)
res.render('video-player', { video: video, teases: teases })
}

const videoDetails2 = (req, res) => {
  const videoId = req.params.code
  const video = getVideo(videoId)
  const teases = getSuggestions(30)
res.render('video-home', { video: video, teases: teases })
}



module.exports = {videoDetails1,videoDetails2}

