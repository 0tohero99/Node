const buffer =require("buffer")

buf =Buffer.alloc(256)
var data =buf.write("hello everyone !")
console.log(data)

var buff1 = Buffer.from("1234567890") //targetstart =>index
console.log(buff1)
//      1234567890
//index 0123456789
var buff2 =Buffer.from("hello") //sourcestart =>index
console.log(buff2)
//      hello
//index 0123456789


buff2.copy(buff1, 2, 2) //buffer targetstart,sourcestart
console.log(buff1.toString()) //12lloo7890
console.log(Buffer.concat([buff1, buff2]).toString())
console.log()