import { NativeModules, NativeEventEmitter } from 'react-native'

const { RNIDV } = NativeModules
var eventManager = new NativeEventEmitter(RNIDV)

export async function exec(name, params) {
    return RNIDV.exec(name, params)
}

export function serializeInterface(value, ctor) {
    if (value == null) return null
    if (value instanceof ctor) return value.toJson()
    return (new ctor(value)).toJson()
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

export function setDidReceiveLogEventCompletion(completion) {
    setEvent('didReceiveLogEventEvent', completion, json => {
        var jsonObject = JSON.parse(json)
        var level = jsonObject["level"];
        var message = jsonObject["message"];
        return [level, message]
    })
}
