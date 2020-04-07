import { globalVars } from '../global';

class NotificationService {
    
    async fetchLatest(){

        let retval = await fetch(`http://${globalVars.server}/notifications/get`);

        return retval.json();

    }

}

export default (new NotificationService());