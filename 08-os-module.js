const os = require('os');
const user = os.userInfo();
console.log(user);

console.log(`System uptime: ${os.uptime()} seconds`);

const osInfo = {
    name: os.type(),
    version: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
};
console.log(osInfo);