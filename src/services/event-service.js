import { globalVars } from '../global';

class EventService {

    async fetchBatch(batchNum){

        let retval = await fetch(
            `http://${globalVars.server}/events/get/${batchNum}`
        )

        return retval.json()

    }

}

export default (new EventService());