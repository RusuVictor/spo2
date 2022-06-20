export default function(instance) {
  return {
    getRooms() {
      return instance.get("rooms");
    },
    createRoom(payload) {
      return instance.post("room", payload);
    },
    removeRooms(payload) {
    	return instance.delete("room", payload)
    }
  };
}
