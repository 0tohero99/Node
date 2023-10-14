const os =require("os") //inbuilt pakeges //
console.log("free memory" , os.freemem() / 1024 / 1024 / 1024)
console.log("total memory" , os.totalmem() / 1024 / 1024 / 1024)

//1kb => 1024 bytes => 1 mb => 1024 kb => 1 gb = 1024 mb

console.log("Version", os.version())
console.log("Processor", os.cpus())
console.log("Arch", os.arch())
console.log("uptime", os.uptime())
console.log("userInfo", os.userInfo())