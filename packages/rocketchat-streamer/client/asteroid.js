import { streamerClient } from './client';

const AsteroidMeteorStreamerMixin = () => {
    return {
        init: function() {
            streamerClient({
                Meteor:this,
                ddp:this.ddp,
                check:()=>{}
            });
        }
    }
};

export {
    AsteroidMeteorStreamerMixin
};
