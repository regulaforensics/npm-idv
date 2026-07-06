import { WorkflowStep } from './workflow_step'

export class WorkflowResult {
    sessionId
    finalStep

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new WorkflowResult()
        result.sessionId = jsonObject["sessionId"]
        result.finalStep = WorkflowStep.fromJson(jsonObject["finalStep"])
        return result
    }

    toJson() {
        return {
            "sessionId": this.sessionId,
            "finalStep": this.finalStep?.toJson(),
        }
    }
}
