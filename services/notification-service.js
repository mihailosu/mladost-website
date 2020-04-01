const notificationModel = require('../models/notification');

class NotificationService {

    /*
     * Get the 3 most recent notifications
     */
    async getLatest(){

        return notificationModel.findAll({ 
            limit: 3,
            order: [
                ['date', 'DESC']
            ] 
        });

    }    

    async saveNotification(notification){
        
        notificationModel.create({
            title: notification.title,
            text: notification.text,
            date: notification.date
        });


    }

}

module.exports = new NotificationService();