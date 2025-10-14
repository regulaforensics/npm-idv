export class PrepareWorkflowConfig {
    workflowId

    constructor(params) {
        this.workflowId = params?.workflowId
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new PrepareWorkflowConfig()
        result.workflowId = jsonObject["workflowId"]
        return result
    }

    toJson() {
        return {
            "workflowId": this.workflowId,
        }
    }
}
