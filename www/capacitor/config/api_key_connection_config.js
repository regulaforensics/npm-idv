export class ApiKeyConnectionConfig {
    baseUrl
    apiKey
    ttl
    httpTimeoutMs

    constructor(params) {
        this.baseUrl = params?.baseUrl
        this.apiKey = params?.apiKey
        this.ttl = params?.ttl
        this.httpTimeoutMs = params?.httpTimeoutMs
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new ApiKeyConnectionConfig()
        result.baseUrl = jsonObject["baseUrl"]
        result.apiKey = jsonObject["apiKey"]
        result.ttl = jsonObject["ttl"]
        result.httpTimeoutMs = jsonObject["httpTimeoutMs"]
        return result
    }

    toJson() {
        return {
            "baseUrl": this.baseUrl,
            "apiKey": this.apiKey,
            "ttl": this.ttl,
            "httpTimeoutMs": this.httpTimeoutMs,
        }
    }
}
