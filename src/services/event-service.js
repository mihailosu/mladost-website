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
                    attributes: [] // Remove the gerund (join column)
                }
            }
        })

    }

    addEvent(newEvent){
        return new Promise((resolve, reject) => {
            eventModel.create({
                title: newEvent.title,
                text: newEvent.text,
                price: parseInt(newEvent.price),
                date: new Date(parseInt(newEvent.date))
            }).then(result => {
    
                let genres = newEvent.genres;
                console.log("HERE");
                
                (async () => {
                    for (let key in genres){
                        let genre = await genreModel.findOne({
                            where: {
                                id: genres[key]
                            }
                        });
                        result.addGenre(genre);
                    }
                })();
    
                resolve(result);
                
            }).catch(err => {
                console.log("ERROR")
                console.log(err)
                reject(err);
            });
        })

    }

    
    async deleteEvent(eventId){

        let evt = await eventModel.findOne({
            where: {
                id: eventId
            }
        });

        evt.destroy();

    }

}

module.exports = new EventService();