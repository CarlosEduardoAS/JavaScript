// retorna um valor único, e não outro array

const videos = [{
    views: 37208
},
{
    views: 22510
},
{
    views: 34732
}]

const totalViews = videos.reduce((sum, video) => {
    return sum + video.views
}, 0)

console.log(totalViews)