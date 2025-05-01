// index.js
const os = require('os');

// USER INFO
const username = os.userInfo().username;
const hostname = os.hostname();

// OS INFO
const platform = os.platform();
const osType = os.type();
const arch = os.arch();
const kernelVersion = os.release();

// UPTIME
const uptimeSeconds = os.uptime();
const uptimeFormatted = formatUptime(uptimeSeconds);

// MEMORY
const totalMem = os.totalmem();
const freeMem = os.freemem();
const usedMem = totalMem - freeMem;
const memUsagePercent = ((usedMem / totalMem) * 100).toFixed(2);

// CPU
const cpuInfo = os.cpus()[0].model;
const cpuCores = os.cpus().length;
const loadAvg = os.loadavg(); // [1min, 5min, 15min]

// DISPLAY
function SystemInfo () {
console.clear();
console.log(`${username}@${hostname}`);
console.log('------------------------');
console.log(`OS         : ${osType} (${platform})`);
console.log(`Kernel     : ${kernelVersion}`);
console.log(`Arch       : ${arch}`);
console.log(`Uptime     : ${uptimeFormatted}`);
console.log(`CPU        : ${cpuInfo} (${cpuCores} cores)`);
console.log(`Load Avg   : ${loadAvg.map(n => n.toFixed(2)).join(', ')}`);
console.log(`Memory     : ${(usedMem / 1e9).toFixed(2)} GB / ${(totalMem / 1e9).toFixed(2)} GB (${memUsagePercent}%)`);
console.log(`Shell      : ${process.env.SHELL || 'unknown'}`);
console.log(`Terminal   : ${process.env.TERM || 'unknown'}`);
console.log(`Node.js    : ${process.version}`);
console.log(`NPM        : ${require('child_process').execSync('npm -v').toString().trim()}`);
}

// SYSTEM INFO
setInterval(SystemInfo, 1000);

// FORMAT UPTIME
function formatUptime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return `${h}h ${m}m ${s}s`;
}
