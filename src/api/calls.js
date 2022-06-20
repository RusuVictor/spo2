export default function(instance) {
	return {
		getCall() {
			return instance.get("calls");
		},
		storeCall(payload) {
			return instance.post("calls", payload);
		},
		deleteCall(payload) {
			return instance.delete("calls", payload);
		}
	};
}
