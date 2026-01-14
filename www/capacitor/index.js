import { exec, setDidStartSessionCompletion, setDidEndSessionCompletion, setDidStartRestoreSessionCompletion, setDidContinueRemoteSessionCompletion } from './internal/bridge'

import { TokenConnectionConfig } from './config/token_connection_config'
import { CredentialsConnectionConfig } from './config/credentials_connection_config'
import { ApiKeyConnectionConfig } from './config/api_key_connection_config'
import { PrepareWorkflowConfig } from './config/prepare_workflow_config'
import { StartWorkflowConfig } from './config/start_workflow_config'
import { StartSessionConfig } from './config/start_session_config'
import { SendDataConfig } from './config/send_data_config'
import { Workflow } from './model/workflow'
import { WorkflowResult } from './model/workflow_result'
import { WorkflowStep } from './model/workflow_step'

export { TokenConnectionConfig, CredentialsConnectionConfig, ApiKeyConnectionConfig, PrepareWorkflowConfig, StartWorkflowConfig, StartSessionConfig, SendDataConfig, Workflow, WorkflowResult, WorkflowStep }

export class IDV {
    static get instance() { return IDV._instance }
    static _instance = new IDV()

    setListener(options) {
        const value = options ?? {}
        setDidStartSessionCompletion(value.didStartSession)
        setDidEndSessionCompletion(value.didEndSession)
        setDidStartRestoreSessionCompletion(value.didStartRestoreSession)
        setDidContinueRemoteSessionCompletion(value.didContinueRemoteSession)
    }

    set sessionRestoreMode(val) {
        exec('setSessionRestoreMode', [val])
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
        config = ensureInstance(config, TokenConnectionConfig)
        const response = await exec('configureWithToken', [config?.toJson()])
        return completionFromResponse(response, success => success?.map(item => String(item)))
    }

    async configureWithCredentials(config) {
        config = ensureInstance(config, CredentialsConnectionConfig)
        const response = await exec('configureWithCredentials', [config?.toJson()])
        return completionFromResponse(response)
    }

    async configureWithApiKey(config) {
        config = ensureInstance(config, ApiKeyConnectionConfig)
        const response = await exec('configureWithApiKey', [config?.toJson()])
        return completionFromResponse(response)
    }

    async prepareWorkflow(config) {
        config = ensureInstance(config, PrepareWorkflowConfig)
        const response = await exec('prepareWorkflow', [config?.toJson()])
        return completionFromResponse(response, json => Workflow.fromJson(json))
    }

    async startWorkflow(config) {
        config = ensureInstance(config, StartWorkflowConfig)
        const response = await exec('startWorkflow', [config?.toJson()])
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
        config = ensureInstance(config, StartSessionConfig)
        const response = await exec('startSession', [config.toJson()])
        return completionFromResponse(response)
    }

    async sendData(config) {
        config = ensureInstance(config, SendDataConfig)
        const response = await exec('sendData', [config.toJson()])
        return completionFromResponse(response)
    }
}

export const SessionRestoreMode = {
    ENABLED: 0,
    DISABLED: 1,
}

function completionFromResponse(response, transform) {
    const jsonObject = JSON.parse(response)
    let success = jsonObject['success']
    const error = jsonObject['error']
    if (transform != null && success != null) success = transform(success)
    return [success, error]
}

function ensureInstance(value, ctor) {
    if (value == null) return null
    if (value instanceof ctor) return value
    return new ctor(value)
}
