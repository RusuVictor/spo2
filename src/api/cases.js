export default function(instance) {
  return {
    getCase(payload) {
      return instance.get("case", { params: payload });
    },
    getCases(payload) {
      return instance.get("cases", { params: payload });
    },
  };
}
