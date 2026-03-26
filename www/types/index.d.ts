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

/**
 * Entry point of the Regula IDV.
 */
export class IDV {
    /**
     * The only instance of singleton class {@link IDV}.
     */
    static get instance(): IDV
    private constructor()

    setListener(options?: IDVListenerOptions): void

    set sessionRestoreMode(value: SessionRestoreMode)

    getCurrentSessionId(): Promise<string | null>

    initialize(): Promise<[boolean, string | null]>

    deinitialize(): Promise<[boolean, string | null]>

    configureWithToken(config: TokenConnectionConfig): Promise<[string[] | null, string | null]>

    configureWithCredentials(config: CredentialsConnectionConfig): Promise<[boolean, string | null]>

    configureWithApiKey(config: ApiKeyConnectionConfig): Promise<[boolean, string | null]>

    prepareWorkflow(config: PrepareWorkflowConfig): Promise<[Workflow | null, string | null]>

    startWorkflow(config?: StartWorkflowConfig): Promise<[WorkflowResult | null, string | null]>

    getWorkflows(): Promise<[Workflow[] | null, string | null]>

    startSession(config: StartSessionConfig): Promise<[string | null, string | null]>

    sendData(config: SendDataConfig): Promise<[boolean, string | null]>
}

export enum SessionRestoreMode {
    ENABLED = 0,
    DISABLED = 1,
}

export interface IDVListenerOptions {
    didStartSession?: () => void
    didEndSession?: () => void
    didStartRestoreSession?: () => void
    didContinueRemoteSession?: () => void
}
