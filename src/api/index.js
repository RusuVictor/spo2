import instance from "./instance";

import roomsModule from "./rooms";
import hearingsModule from "./hearings";
import createEventsModule from "./createEvents";
import hearingEventsModule from "./hearingEvents";
import callsModule from "./calls";
import rolesModule from "./roles";
import casesModule from "./cases";
import usersModule from "./users";

export default {
  rooms: roomsModule(instance),
  hearings: hearingsModule(instance),
  hearingEvents: hearingEventsModule(instance),
  createEvents: createEventsModule(instance),
  calls: callsModule(instance),
  roles: rolesModule(instance),
  cases: casesModule(instance),
  users: usersModule(instance),
};
