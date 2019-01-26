import * as express from 'express';
import * as bodyParser from 'body-parser';
import { actionRoute } from './routes/action.route';
import { eventsRoute } from './routes/events.router';
import { Bot } from './core/bot';

export class Application {
    
    public app: express.Application;

    constructor(){
        this.app = express();
        this.config();
        this.router();
        Bot.run();
    }

    public static bootstrap(): Application {
        return new Application();
    }

    public config(){
        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.use(bodyParser.json())
    }

    public router(){
        this.app.use('/slack/action', actionRoute);
        this.app.use('/slack/events', eventsRoute)
    }

}
