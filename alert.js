const Discord = require("discord.js")
var alz = 0

var bot = new Discord.Client()

var channelName = "general"
var channelID = '574551663474507777' //storz



bot.on("ready",function(){
    console.log('List GUilds : '+bot.guilds.array())
    console.log('Name Channel : '+channelName)
    console.log("Ready.....................")
})

//setInterval(()=>status(), 30000);
setInterval(()=>alertz(), 30000);

bot.on("message", (msg) => {

  
     
  if (msg.content.startsWith("qqqq")){
    timestart()
    console.log(h+" : "+m)
      sendEmbedBoss()
      sendEmbedTd()
      sendEmbedPk()
  }   

  if (msg.content.startsWith("บอส")){
        const embed = new Discord.RichEmbed()
       // .setTitle(titel)  //หัวข้อ
        //.setAuthor("Boss Timer ThBDO", "https://www.picz.in.th/images/2018/06/22/48XhJt.png")  //icon หัวขอ
        .setColor(0xFF00FF)   //ใส่สี
        .setDescription("```yaml\n ประกาศๆ : บอสโลกจะเกิดแล้วววว```")   //รายละเอียด
       //.addField("ผแแฟ","```yaml ประกาศๆ : บอสโลกจะเกิดแล้วววว```")
       // .setFooter("Boss Timer ThBDO "+botconfig.version+" พิมพ์ info", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Twemoji_1f437.svg/2000px-Twemoji_1f437.svg.png") //รูป ข้อความล่างสุด
       //.setImage("https://www.shining-moon.com/helheim/images/thumb/e/e5/WBB.png/800px-WBB.png")     //รูปใหญ่
       // .setThumbnail(chkboss().imgboss)   //รูปเล็กขวาบนผ
        //.setTimestamp()  //เวลาด้านล่างสุดผ
      msg.channel.send({embed})
      msg.channel.send({embed})
      msg.channel.send({embed})
      const role = msg.guild.roles.find(role => role.name === "A3");
      msg.channel.send(`${role} `+msg.content)
      
     
  }  
 
   if (msg.content.startsWith("aaa")){
   
        const embed = new Discord.RichEmbed()
       // .setTitle(titel)  //หัวข้อ
        //.setAuthor("Boss Timer ThBDO", "https://www.picz.in.th/images/2018/06/22/48XhJt.png")  //icon หัวขอ
        .setColor(0x112263)   //ใส่สี
        //.setDescription("```cs\n วัน '"+dayz+"'  เวลา '"+chkboss().t+"' น. \n\n ####  "+chkboss().boss+"  ####```")   //รายละเอียด
       // .addField("วัน "+dayz+" เวลา "+chkboss().t,"```cs\n"+"บอสตัวต่อไป #"+chkboss().boss+"```")
       // .setFooter("Boss Timer ThBDO "+botconfig.version+" พิมพ์ info", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Twemoji_1f437.svg/2000px-Twemoji_1f437.svg.png") //รูป ข้อความล่างสุด
       .setImage("https://cdn.discordapp.com/attachments/574551663474507777/779687618387902475/2.png")     //รูปใหญ่
       // .setThumbnail(chkboss().imgboss)   //รูปเล็กขวาบนผ
        .setTimestamp()  //เวลาด้านล่างสุดผ
         msg.channel.send({embed})
     
  }  

    
})



 function alertz(){

   timestart()
            
        if (h == 11  && m == 55){
          ++alz
                  
          if (alz === 1 ){
              console.log("AlertBoss")
              sendEmbedBoss()
            }
          
          if (alz === 2 ){
             alz = 0
          }
        }

        if (h == 12  && m == 25){
          ++alz
                  
          if (alz === 1 ){
              console.log("AlertPk")
              sendEmbedPk()
            }
          
          if (alz === 2 ){
             alz = 0
          }
        }
     
        if (h == 15  && m == 25){
          ++alz
                  
          if (alz === 1 ){
              console.log("AlertBoss")
              sendEmbedBoss()
            }
          
          if (alz === 2 ){
             alz = 0
          }
        }

        if (h == 19  && m == 25){
          ++alz
                  
          if (alz === 1 ){
              console.log("AlertTD")
              sendEmbedTd()
            }
          
          if (alz === 2 ){
             alz = 0
          }
        }     

        if (h == 20  && m == 25){
          ++alz
                  
          if (alz === 1 ){
              console.log("AlertPk")
              sendEmbedPk()
            }
          
          if (alz === 2 ){
             alz = 0
          }
        }     
     
        if (h == 22  && m == 55){
          ++alz
                  
          if (alz === 1 ){
              console.log("AlertBoss")
              sendEmbedBoss()
            }
          
          if (alz === 2 ){
             alz = 0
          }
        }
         
        if (h == 23  && m == 25){
          ++alz
                  
          if (alz === 1 ){
              console.log("AlertTD")
              sendEmbedTd()
            }
          
          if (alz === 2 ){
             alz = 0
          }
        }
     
 
 }


 function sendEmbedBoss(){

    const embed = new Discord.RichEmbed()
    .setColor(0xff0000)   //ใส่สี
    //.setDescription("```css\n#"+alertz+"```")   //รายละเอียด
    .addField("```World boss #```","```yaml\n อีก 5 นาที : บอสโลกเกิด```")
    .setTimestamp()  //เวลาด้านล่างสุดผ
     bot.channels.get(channelID).send({embed})
 }

 function sendEmbedTd(){

    const embed = new Discord.RichEmbed()
    .setColor(0xff0000)   //ใส่สี
    //.setDescription("```css\n#"+alertz+"```")   //รายละเอียด
    .addField("```Dark Invasion #```","```yaml\n อีก 5 นาที : การรุกรานเงามืด(TD)```")
    .setTimestamp()  //เวลาด้านล่างสุดผ
     bot.channels.get(channelID).send({embed})
 }

 function sendEmbedPk(){

    const embed = new Discord.RichEmbed()
    .setColor(0xff0000)   //ใส่สี
    //.setDescription("```css\n#"+alertz+"```")   //รายละเอียด
    .addField("```Dark Presence #```","```yaml\n อีก 5 นาที : อุบัติเงามืด(PK)```")
    .setTimestamp()  //เวลาด้านล่างสุดผ
     bot.channels.get(channelID).send({embed})
 }

 function timestart(){
  currentUtcTime = new Date(); // This is in UTC
  thTimeZone = new Date(currentUtcTime.toLocaleString('en-US', { timeZone: 'Asia/Bangkok' }))
 
  countz = new Date(currentUtcTime.toLocaleString('en-US', { timeZone: 'Asia/Bangkok' })).getTime()

  day= thTimeZone.getDay()   
  d = thTimeZone.getDate()
  month = thTimeZone.getMonth()
  year = thTimeZone.getFullYear()
  h = thTimeZone.getHours()
  m = thTimeZone.getMinutes()   
  s = thTimeZone.getSeconds()
 //days = new Array('Sun', 'Monร์', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat')
 //months = new Array('Jan', 'feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec')
}


function status(){     
  
    // ดึงเวลาปัจจุบัน
    var currentUtcTimez = new Date();
    var now = new Date(currentUtcTimez.toLocaleString('en-US', { timeZone: 'Asia/Bangkok' })).getTime();
    // เวลาที่จะถึง-เวลาปัจจุบัน
    var distance = now ;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
   
       //**แต่งเวลาให้สวย
      if (hours < 10) {
        hours = "0" + hours;
       }
      if (minutes < 10) {
        minutes = "0" + minutes;
       }

     bot.user.setGame(hours + ":"+ minutes+ " น.")
    
        
}

bot.login(process.env.BOT_TOKEN)
