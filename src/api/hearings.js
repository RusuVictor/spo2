const date = new Date()
const [onlyDate] = date.toISOString().split('T')

export default function(instance) {
  return {
    getHearings(payload = {date: onlyDate}) {
      return instance.get("hearings", { params: payload });
    },
    createHearing(payload) {
      return instance.post("hearing", payload);
    },
    updateHearing(payload) {
      return instance.put("hearing", payload);
    },
    deleteHearing(payload) {
      return instance.delete("hearing", payload);
    }
  };
}
