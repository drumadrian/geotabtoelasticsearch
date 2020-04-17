const router = require('express').Router()
const { Client } = require('elasticsearch');

const host = 'localhost:9200'

router.post('/elasticsearch', (req, res) => {
    const { geotagUpload } = req.body

    var client = new Client({
      host,
      log: 'trace',
      apiVersion: '7.6' // use the same version of your Elasticsearch instance
    });

    client.ping({
      // ping usually has a 3000ms timeout
      requestTimeout: 1000
    }, function (error) {
      if (error) {
        return res
          .status(400)
          .json({ message: 'elasticsearch cluster is down!' })
      } else {
        return res
          .status(200)
          .json({ message: 'Uploaded to elastic search' })
      }
    });

    // upload geotagUpload
})

module.exports = router
