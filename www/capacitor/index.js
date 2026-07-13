import { exec, serializeInterface, setDidStartSessionCompletion, setDidEndSessionCompletion, setDidStartRestoreSessionCompletion, setDidContinueRemoteSessionCompletion } from './internal/bridge'

import { TokenConnectionConfig } from './config/token_connection_config'
import { CredentialsConnectionConfig } from './config/credentials_connection_config'
import { ApiKeyConnectionConfig } from './config/api_key_connection_config'
import { PrepareWorkflowConfig } from './config/prepare_workflow_config'
import { StartWorkflowConfig } from './config/start_workflow_config'
import { StartSessionConfig } from './config/start_session_config'
import { SendDataConfig } from './config/send_data_config'
import { LoginConfig } from './config/login_config'
import { Workflow } from './model/workflow'
import { WorkflowResult } from './model/workflow_result'
import { WorkflowStep } from './model/workflow_step'

export { TokenConnectionConfig, CredentialsConnectionConfig, ApiKeyConnectionConfig, PrepareWorkflowConfig, StartWorkflowConfig, StartSessionConfig, SendDataConfig, LoginConfig, Workflow, WorkflowResult, WorkflowStep }

export class IDV {
    static get instance() { return IDV._instance }
    static _instance = new IDV()

    setListener(options) {
        const value = options ?? {}
        setDidStartSessionCompletion(value.didStartSession)
        setDidEndSessionCompletion(value.didEndSession)
        setDidStartRestoreSessionCompletion(value.didStartRestoreSession)
        setDidContinueRemoteSessionCompletion(value.didContinueRemoteSession)
        setDidReceiveLogEventCompletion(value.didReceiveLogEvent)
    }

    set sessionRestoreMode(val) {
        exec('setSessionRestoreMode', [val])
    }

    set logLevel(val) {
        exec('setLogLevel', [val])
    }

    async getCurrentSessionId() {
        return await exec('getCurrentSessionId', [])
    }

    async initialize() {
        const response = await exec('initialize', [])
        return completionFromResponse(response)
    }

    async deinitialize() {
        const response = await exec('deinitialize', [])
        return completionFromResponse(response)
    }

    async configureWithToken(config) {
        const response = await exec('configureWithToken', [serializeInterface(config, TokenConnectionConfig)])
        return completionFromResponse(response, success => success?.map(item => String(item)))
    }

    async configureWithCredentials(config) {
        const response = await exec('configureWithCredentials', [serializeInterface(config, CredentialsConnectionConfig)])
        return completionFromResponse(response)
    }

    async configureWithApiKey(config) {
        const response = await exec('configureWithApiKey', [serializeInterface(config, ApiKeyConnectionConfig)])
        return completionFromResponse(response)
    }

    async prepareWorkflow(config) {
        const response = await exec('prepareWorkflow', [serializeInterface(config, PrepareWorkflowConfig)])
        return completionFromResponse(response, json => Workflow.fromJson(json))
    }

    async startWorkflow(config) {
        const response = await exec('startWorkflow', [serializeInterface(config, StartWorkflowConfig)])
        return completionFromResponse(response, json => WorkflowResult.fromJson(json))
    }

    async getWorkflows() {
        const response = await exec('getWorkflows', [])
        return completionFromResponse(response, json => {
            const result = []
            if (json != null) for (const item of json) {
                const workflow = Workflow.fromJson(item)
                if (workflow != null) result.push(workflow)
            }
            return result
        })
    }

    async startSession(config) {
        const response = await exec('startSession', [serializeInterface(config, StartSessionConfig)])
        return completionFromResponse(response)
    }

    async sendData(config) {
        const response = await exec('sendData', [serializeInterface(config, SendDataConfig)])
        return completionFromResponse(response)
    }

    async startLogin(config) {
        const response = await exec('startLogin', [serializeInterface(config, LoginConfig)])
        return completionFromResponse(response)
    }
}

export const SessionRestoreMode = {
    ENABLED: 0,
    DISABLED: 1,
}

export const IdvLogLevel = {
    DEBUG: 0,
    INFO: 1,
    WARNING: 2,
    ERROR: 3,
}

function completionFromResponse(response, transform) {
    const jsonObject = JSON.parse(response)
    let success = jsonObject['success']
    const error = jsonObject['error']
    if (transform != null && success != null) success = transform(success)
    return [success, error]
}
