export class StartWorkflowConfig {
    locale
    metadata

    constructor(params) {
        this.locale = params?.locale
        this.metadata = params?.metadata
    }

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new StartWorkflowConfig()
        result.locale = jsonObject["locale"]
        result.metadata = jsonObject["metadata"]
        return result
    }

    toJson() {
        return {
            "locale": this.locale,
            "metadata": this.metadata,
        }
    }
}
