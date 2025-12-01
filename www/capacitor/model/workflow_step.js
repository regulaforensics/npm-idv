export class WorkflowStep {
    id
    name

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new WorkflowStep()
        result.id = jsonObject["id"]
        result.name = jsonObject["name"]
        return result
    }

    toJson() {
        return {
            "id": this.id,
            "name": this.name,
        }
    }
}
