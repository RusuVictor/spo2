export default function(instance) {
  return {
    getEvents() {
      return instance.get("/hearing/events");
    },
    createEvent(payload) {
      return instance.post("/hearing/event", payload);
    },
    updateEvent(payload) {
      return instance.put("/hearing/event", payload);
    },
    removeEvent(payload) {
      return instance.delete("/hearing/event", payload);
    }
  };
}
