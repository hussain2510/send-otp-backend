require('dotenv').config();
const { Vonage } = require('@vonage/server-sdk')
const { SMS } = require('@vonage/messages/dist/classes/SMS/SMS');



exports.sendMessage = (req, res) => {
     const vonage = new Vonage({
   apiKey:process.env.APIKEY,
   apiSecret:process.env.APISECRET,
  applicationId:process.env.APPLICATIONID,
  privateKey:process.env.PRIVATE_KEY

})
         console.log(req.body);
    const phone=req.body.phoneNumber;
    const message=req.body.message;
    console.log('phone',phone);
    console.log('message',message);
 

vonage.messages.send(
  new SMS(message, parseInt(phone),"Test")
)
  .then((resp) => {
    console.log(resp);
    res.status(201).json({
                success:true,
                time:new Date(),
                otp:message.split(':').pop()
            })
    console.log(resp.message_uuid)
    
    })

  .catch((err) => {
    console.error(err)
     res.send({
                        msg:'opt is not send',
                        success:false
                    })
});

}