import { IDV, Workflow } from '@regulaforensics/idv'

enum Configuration { credentials, token, apiKey }

const loginType: Configuration = Configuration.credentials
const baseUrl = "https://idv.regula.app"
const username = "username_placeholder"
const password = "password_placeholder"
const tokenUrl = "token_placeholder"
const apiKey = "api_key_placeholder"

var idv = IDV.instance
var selectedWorkflow = ""
var workflowIds: string[] = []

async function init() {
    var [_, iError] = await idv.initialize()
    if (handleException(iError, "initialize")) return

    var success = ({
        [Configuration.credentials]: async () => await configureWithCredentials(),
        [Configuration.token]: async () => await configureWithToken(),
        [Configuration.apiKey]: async () => await configureApiKey(),
    })[loginType]!
    if (!await success()) return

    var [wfs, error] = await idv.getWorkflows()
    if (handleException(error, "getWorkflows")) return
    if (loginType == Configuration.token) {
        wfs = wfs!.filter((wf: any) => workflowIds.includes(wf.id))
    }

    setWorkflows(wfs!)
    setStatus("Ready")
}

async function configureWithCredentials(): Promise<boolean> {
    var [success, error] = await idv.configureWithCredentials({
        baseUrl: baseUrl,
        userName: username,
        password: password
    })
    handleException(error, "configureWithCredentials")
    return success
}

async function configureWithToken(): Promise<boolean> {
    var [wfIds, error] = await idv.configureWithToken({ url: tokenUrl })
    if (handleException(error, "configureWithToken")) return false
    workflowIds = wfIds!
    return true
}

async function configureApiKey(): Promise<boolean> {
    var [success, error] = await idv.configureWithApiKey({ baseUrl, apiKey })
    handleException(error, "configureWithApiKey")
    return success
}

async function startWorkflow(): Promise<void> {
    if (selectedWorkflow.length == 0) return
    setStatus("Preparing Workflow...")

    var [_, prepareError] = await idv.prepareWorkflow({ workflowId: selectedWorkflow })
    if (handleException(prepareError, "prepareWorkflow")) return

    var [result, error] = await idv.startWorkflow()
    if (handleException(error, "startWorkflow")) return

    setStatus("Success")
    setDescription(`SessionID: ${result?.sessionId}`)
}

function handleException(error?: string | null, tag?: string): boolean {
    if (error == null) return false
    setStatus(`Error - IDV.${tag}()`)
    setDescription(error)
    console.log(error)
    return true
}

// --------------------------------------------------------------------------------------------------------------------

export function main() {
    document.getElementById("start-workflow")!.onclick = () => startWorkflow()

    init()
}

var setStatus = (data: string) => document.getElementById("status")!.innerHTML = data
var setDescription = (data: string) => {
    document.getElementById("description")!.innerHTML = data
    document.getElementById("sub-header")!.style.display = data.length > 0 ? "block" : "none"
}

var workflows: Workflow[] = []
function setWorkflows(data: Workflow[]) {
    var radioGroup = document.getElementById("radio-group")!
    workflows = data
    if (workflows.length != 0) {
        selectedWorkflow = workflows[0].id
    }

    data.forEach(item => {
        var checked = selectedWorkflow == item.id ? "checked" : ""
        var radioElement = `
        <div class="row radio">
            <input type="radio" name="radio" id="${item.id}" value="${item.id}" ${checked}>
            <span id="${item.id}-caption" style="width: 200px; padding-left: 5px;">${item.name}</span>
        </div>`
        radioGroup.insertAdjacentHTML("beforeend", radioElement)
    })

    data.forEach(item => {
        var element = document.getElementById(item.id) as HTMLInputElement
        var elementCaption = document.getElementById(item.id + "-caption")!
        var onclick = () => {
            selectedWorkflow = item.id
            element.checked = true
        }
        element.onclick = onclick
        elementCaption.onclick = onclick
    })
}
