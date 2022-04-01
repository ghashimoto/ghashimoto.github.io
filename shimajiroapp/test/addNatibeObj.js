const NativeObj = {
    postMessage : (json) => {
        onReceiveMessage({
            "methodName" : "get_initial_data",
            "params" : {
                "child_id" : "16349"
            }
        });
    }
}
