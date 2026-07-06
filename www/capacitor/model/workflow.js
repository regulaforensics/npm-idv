export class Workflow {
    id
    name
    description
    version
    defaultLocale

    static fromJson(jsonObject) {
        if (jsonObject == null) return null
        const result = new Workflow()
        result.id = jsonObject["id"]
        result.name = jsonObject["name"]
        result.description = jsonObject["description"]
        result.version = jsonObject["version"]
        result.defaultLocale = jsonObject["defaultLocale"]
        return result
    }

    toJson() {
        return {
            "id": this.id,
            "name": this.name,
            "description": this.description,
            "version": this.version,
            "defaultLocale": this.defaultLocale,
        }
    }
}
