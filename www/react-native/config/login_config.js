export class LoginConfig {
    applicationId
    baseUrl
    locale
    metadata
    httpTimeoutMs

    constructor(params) {
        this.applicationId = params?.applicationId
        this.baseUrl = params?.baseUrl
        this.locale = params?.locale
        this.metadata = params?.metadata
        this.httpTimeoutMs = params?.httpTimeoutMs
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new LoginConfig()
        result.applicationId = jsonObject["applicationId"]
        result.baseUrl = jsonObject["baseUrl"]
        result.locale = jsonObject["locale"]
        result.metadata = jsonObject["metadata"]
        result.httpTimeoutMs = jsonObject["httpTimeoutMs"]
        return result
    }

    toJson() {
        return {
            "applicationId": this.applicationId,
            "baseUrl": this.baseUrl,
            "locale": this.locale,
            "metadata": this.metadata,
            "httpTimeoutMs": this.httpTimeoutMs,
        }
    }
}
