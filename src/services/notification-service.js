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

    saveNotification(notification){
        
        return new Promise((resolve, reject) => {

            notificationModel.create({
                title: notification.title,
                text: notification.text,
                date: notification.date
            }).then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            });

        });
    }

    async deleteNotification(notificationId){

        let notif = await notificationModel.findOne({
            where: {
                id: notificationId
            }
        });

        notif.destroy();

    }

}

module.exports = new NotificationService();