export interface LoginConfig {
    applicationId: string
    baseUrl: string
    locale?: string
    metadata?: Record<string, any>
    httpTimeoutMs?: number
}
