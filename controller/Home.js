
const os = require('os');

const homeFunction = (req, res) => {

    res.render('Home', {
        requestCount: 1,
        taskId: 'LOCAL-TEST',
        availabilityZone: 'Local Environment',
        hostname: os.hostname()
    });

};

module.exports = homeFunction;
