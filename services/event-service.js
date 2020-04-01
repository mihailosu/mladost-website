const eventModel = require('../models/event');
const genreModel = require('../models/genre');

class EventService {

    async getBatch(batchNum, batchSize){

        return eventModel.findAll({
            offset: batchNum * batchSize,
            limit: batchSize,
            order: [
                ['date', 'DESC']
            ],
            include: {
                model: genreModel,
                through: {
                    attributes: [] // Remove the gerund
                }
            }
        })

    }

}

module.exports = new EventService();