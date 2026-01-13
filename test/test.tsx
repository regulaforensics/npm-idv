import { compare } from './utils'
import { CredentialsConnectionConfig, TokenConnectionConfig, ApiKeyConnectionConfig, PrepareWorkflowConfig, StartWorkflowConfig, Workflow, WorkflowStep, WorkflowResult, StartSessionConfig, SendDataConfig } from '@regulaforensics/idv/www/capacitor'
import { apiKeyConnectionConfig, credentialsConnectionConfig, prepareWorkflowConfig, startWorkflowConfig, tokenConnectionConfig, workflow, workflowStep, workflowResult, startSessionConfig, sendDataConfig } from './json'

compare('credentialsConnectionConfig', credentialsConnectionConfig, CredentialsConnectionConfig.fromJson)
compare('tokenConnectionConfig', tokenConnectionConfig, TokenConnectionConfig.fromJson)
compare('apiKeyConnectionConfig', apiKeyConnectionConfig, ApiKeyConnectionConfig.fromJson)
compare('prepareWorkflowConfig', prepareWorkflowConfig, PrepareWorkflowConfig.fromJson)
compare('startWorkflowConfig', startWorkflowConfig, StartWorkflowConfig.fromJson)
compare('startSessionConfig', startSessionConfig, StartSessionConfig.fromJson)
compare('sendDataConfig', sendDataConfig, SendDataConfig.fromJson)

compare('workflow', workflow, Workflow.fromJson);
compare('workflowStep', workflowStep, WorkflowStep.fromJson);
compare('workflowResult', workflowResult, WorkflowResult.fromJson);
