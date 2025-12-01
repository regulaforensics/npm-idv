export class CredentialsConnectionConfig {
    baseUrl
    userName
    password
    httpTimeoutMs

    constructor(params) {
        this.baseUrl = params?.baseUrl
        this.userName = params?.userName
        this.password = params?.password
        this.httpTimeoutMs = params?.httpTimeoutMs
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new CredentialsConnectionConfig()
        result.baseUrl = jsonObject["baseUrl"]
        result.userName = jsonObject["userName"]
        result.password = jsonObject["password"]
        result.httpTimeoutMs = jsonObject["httpTimeoutMs"]
        return result
    }

    toJson() {
        return {
            "baseUrl": this.baseUrl,
            "userName": this.userName,
            "password": this.password,
            "httpTimeoutMs": this.httpTimeoutMs,
        }
    }
}
