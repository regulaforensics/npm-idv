export class SendDataConfig {
    sessionId
    step
    data

    constructor(params) {
        this.sessionId = params?.sessionId
        this.step = params?.step
        this.data = params?.data
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new SendDataConfig()
        result.sessionId = jsonObject["sessionId"]
        result.step = jsonObject["step"]
        result.data = jsonObject["data"]
        return result
    }

    toJson() {
        return {
            "sessionId": this.sessionId,
            "step": this.step,
            "data": this.data,
        }
    }
}
