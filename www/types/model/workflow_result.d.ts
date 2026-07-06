import { WorkflowStep } from './workflow_step'

export class WorkflowResult {
    readonly sessionId: string
    readonly finalStep: WorkflowStep

    private constructor()
}
