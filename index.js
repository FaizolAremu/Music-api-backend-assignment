const express = require('express');
const app = express()
const port = 6280;
const music = [
    {
        id: 1,
        artist: "Asake",
        songTitle: "Gratitude",
        songUrl: "https://res.cloudinary.com/wqog2nd8/video/upload/v1784121051/Asake-Gratitude-_CeeNaija.com_nik9ns.mp3",
        imageUrl: "https://res.cloudinary.com/wqog2nd8/image/upload/v1784122025/images_bwfdus.jpg",
    },
    {
        id: 2,
        artist: "Davido",
        songUrl: "https://res.cloudinary.com/wqog2nd8/video/upload/v1784120624/Davido-feat-Scotts-Maphuma-Shoday-And-TxC-Al-Xapo-Zlatan-Nakupenda-_CeeNaija.com_uox2py.mp3",
        imageUrl: "https://res.cloudinary.com/wqog2nd8/image/upload/v1784122149/images_qezvim.jpg",
    },
    {
        id: 3,
        artist: "Mr Money",
        songUrl: "https://res.cloudinary.com/wqog2nd8/video/upload/v1784118600/Asake_-_Omo_Ope__feat._Olamide___Official_Video_128k_qpqttq.mp3",
        imageUrl: "https://res.cloudinary.com/wqog2nd8/image/upload/v1784122025/images_bwfdus.jpg",
    }
]

app.get('/', (req, res) => {
    res.send("Music api")
});

app.get('/musicapi', (req, res) => {
    res.send(music)
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})