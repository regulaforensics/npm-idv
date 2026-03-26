export var credentialsConnectionConfig = {
    "baseUrl": "test3",
    "userName": "test1",
    "password": "test2",
    "httpTimeoutMs": 1,
}
export var tokenConnectionConfig = {
    "url": "test1",
}
export var apiKeyConnectionConfig = {
    "baseUrl": "test1",
    "apiKey": "test2",
    "ttl": 1,
    "httpTimeoutMs": 2,
}
export var prepareWorkflowConfig = {
    "workflowId": "test1",
}
export var startWorkflowConfig = {
    "locale": "test1",
    "metadata": {
        "test2": "test3",
    },
}
export var startSessionConfig = {
  "workflowId": "test1",
  "metadata": {"test1": 0, "test2": "test3", "test4": true},
}
export var sendDataConfig = {
  "sessionId": "test1",
  "step": "test2",
  "data": {"test1": 0, "test2": "test3", "test4": true},
}

export var workflow = {
    "id": "test1",
    "name": "test2",
    "version": "test3",
    "description": "test4",
    "defaultLocale": "test5",
}
export var workflowStep = {
    "id": "test1",
    "name": "test2",
}
export var workflowResult = {
    "sessionId": "test1",
    "finalStep": workflowStep,
}