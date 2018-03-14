import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { streamerClient } from './client';


streamerClient({
    Meteor,
    ddp: Meteor.connection,
    check
});
