var request = require('request')

//var welcome = function(req, res, next) {
//  res.render('pages/welcome');
//};

var yachty = function(req, res, next) {
    var key = process.env.API_KEY
    
    request(`https://api.tumblr.com/v2/tagged?tag=lil+yachty&api_key=${key}`, function(err, response, body){
        if(!err && res.statusCode == 200) {
            var content = {
                photoPosts: [],
                audioPosts: [],
                videoPosts: []
            }
            
            JSON.parse(response.body).response.forEach((item, index, arr) => {
                if(item.type == 'photo') {
                    content.photoPosts.push({ 
                        url: item.short_url,
                        link: item.image_permalink,
                        photos: item.photos,
                        type: item.type,
                        blogName: item.blog_name
                    })
                }
                else if(item.type == 'audio') {
                    content.audioPosts.push({
                        url: item.short_url,
                        summary: item.summary,
                        audioUrl: item.audio_url,
                        track: item.track_name,
                        albumArt: item.album_art,
                        embed: item.embed,
                        blogName: item.blog_name
                    })
                }
                else if(item.type == 'video') {
                    content.videoPosts.push({
                        url: item.short_url,
                        summary: item.summary,
                        videoUrl: item.video_url,
                        player: item.player,
                        blogName: item.blog_name
                    })
                }
            })
            res.json(content)
        }
        else if(err) {
            res.json({error: err})
        }
    })
}

module.exports = {
    yachty: yachty
};
