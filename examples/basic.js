const MiFlora = require('../index');

let flora = new MiFlora();

flora.startScanning();

flora.on('data', function (data) {
  console.log('data', data);
});


