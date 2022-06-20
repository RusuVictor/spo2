export default function(instance) {
  return {
    getRoles() {
      return instance.get("member/roles");
    },
    createRole(payload) {
      return instance.post("member/role", payload);
    },
    deleteRole(payload) {
      return instance.delete("member/role", payload);
    }
  };
}
