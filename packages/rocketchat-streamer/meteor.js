import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { streamerClient } from './client/client';
import { streamerServer } from './server/server';

if (Meteor.isClient) {
    streamerClient({
        Meteor,
        ddp:Meteor.connection,
        check
    });
}

if (Meteor.Server) {
    streamerServer({
        Meteor,
        check
    });
}
