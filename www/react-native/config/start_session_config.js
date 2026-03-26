export class StartSessionConfig {
    workflowId
    metadata

    constructor(params) {
        this.workflowId = params?.workflowId
        this.metadata = params?.metadata
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new StartSessionConfig()
        result.workflowId = jsonObject["workflowId"]
        result.metadata = jsonObject["metadata"]
        return result
    }

    toJson() {
        return {
            "workflowId": this.workflowId,
            "metadata": this.metadata,
        }
    }
}
