const router = require('express').Router();
const axios = require('axios');

router.get('/url', (req, res) => {
    axios
        .get('https://api.themoviedb.org/3/movie/now_playing?api_key=790900c617e6479ac4b5a63a914ee3c8&language=en-US&page=1')
        .then((results) => {
            let myData = results.data.results
            
            
            return res.render('main/url', {myData: myData})
        })
})

module.exports = router