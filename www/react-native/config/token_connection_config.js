export class TokenConnectionConfig {
    url

    constructor(params) {
        this.url = params?.url
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new TokenConnectionConfig()
        result.url = jsonObject["url"]
        return result
    }

    toJson() {
        return {
            "url": this.url,
        }
    }
}
