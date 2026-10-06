import { IDV, Workflow } from '@regulaforensics/idv'

enum Configuration { credentials, token, apiKey }

const loginType: Configuration = Configuration.credentials
const baseUrl = "https://app.idv-platform.com"
const username = "username_placeholder"
const password = "password_placeholder"
const tokenUrl = "token_placeholder"
const apiKey = "api_key_placeholder"

var selectedWorkflow = ""

var idv = IDV.instance
var workflowFilter: string[] = []

async function init() {
    setStatus("Initializing...")
    var [_, iError] = await idv.initialize()
    if (handleException(iError, "initialize")) return

    var login = ({
        [Configuration.credentials]: async () => await configureWithCredentials(),
        [Configuration.token]: async () => await configureWithToken(),
        [Configuration.apiKey]: async () => await configureApiKey(),
    })[loginType]!
    if (!await login()) return

    if (selectedWorkflow.length > 0) {
        workflowFilter = [] // Reset the filter in case both workflow and filter are specified.
        // Show a list of 1 element just to show the workflow name.
        var workflow = await prepareSelectedWorkflow()
        if (workflow != null) setWorkflows([workflow])
        return
    }
    if (workflowFilter.length > 0) {
        showWorkflowList()
        return
    }
    setStatus("No workflow selected!")
    setDescription("Manually set `selectedWorkflow` to your workflow ID")
}

async function showWorkflowList() {
    setStatus("Fetching workflows...")
    let [wfs, error] = await idv.getWorkflows()
    if (handleException(error, "getWorkflows")) return
    wfs = workflowFilter.flatMap(id => wfs!.filter(wf => wf.id === id))
    if (wfs.length > 0) {
        setWorkflows(wfs)
        return
    }
    setStatus("Empty workflow list!")
    setDescription("No workflows remain after filtration")
}

async function prepareSelectedWorkflow() {
    setStatus("Preparing Workflow...")
    const [workflow, prepareError] = await idv.prepareWorkflow({ workflowId: selectedWorkflow })
    handleException(prepareError, "prepareWorkflow")
    return workflow
}

async function startWorkflow(): Promise<void> {
    // If workflow is chosen from the list then it's not prepared yet.
    if (workflowFilter.length > 0 && await prepareSelectedWorkflow() == null) return
    var [result, error] = await idv.startWorkflow()
    if (handleException(error, "startWorkflow")) return
    setStatus("Success")
    setDescription(`SessionID: ${result?.sessionId}`)
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
    var [workflowIds, error] = await idv.configureWithToken({ url: tokenUrl })
    if (handleException(error, "configureWithToken")) return false
    // Filter the IDs to the ones allowed by the token.
    workflowFilter = workflowFilter.filter(wf => workflowIds!.includes(wf))
    return true
}

async function configureApiKey(): Promise<boolean> {
    var [success, error] = await idv.configureWithApiKey({ baseUrl, apiKey })
    handleException(error, "configureWithApiKey")
    return success
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
    selectedWorkflow = workflows[0].id
    setStatus("Ready")

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
