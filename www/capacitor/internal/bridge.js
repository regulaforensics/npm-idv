import { NativeModules, NativeEventEmitter } from './cordova'

const { RNIDV } = NativeModules
var eventManager = new NativeEventEmitter(RNIDV)

export async function exec(name, params) {
    return RNIDV.exec(name, params)
}

function setEvent(id, completion, transform) {
    eventManager.removeAllListeners(id)
    if (transform === undefined) transform = func => func
    if (completion !== undefined) eventManager.addListener(id, transform(completion))
}

export function setDidStartSessionCompletion(completion) {
    setEvent('didStartSessionEvent', completion)
}

export function setDidEndSessionCompletion(completion) {
    setEvent('didEndSessionEvent', completion)
}

export function setDidStartRestoreSessionCompletion(completion) {
    setEvent('didStartRestoreSessionEvent', completion)
}

export function setDidContinueRemoteSessionCompletion(completion) {
    setEvent('didContinueRemoteSessionEvent', completion)
}
