export default function(instance) {
  return {
    getEvents() {
      return instance.get("events");
    },
    createEvent(payload) {
      return instance.post("event", payload);
    },
    deleteEvent(payload) {
      return instance.delete("event", payload);
    }
  };
}
