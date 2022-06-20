export default function(instance) {
  return {
    getUSers() {
      return instance.get("users");
    },
  };
}
