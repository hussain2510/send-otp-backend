module.exports=(app)=>{
    const messageController=require('../controller/message');
    app.route('/sendMessage').post(messageController.sendMessage);
}