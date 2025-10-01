import { NativeModules, NativeEventEmitter } from 'react-native'

const { RNIDV } = NativeModules
var eventManager = new NativeEventEmitter(RNIDV)

export async function exec(name, params) {
    return RNIDV.exec(name, params)
}

function _setEvent(id, completion, fromJson) {
    eventManager.removeAllListeners(id)
    if (completion == null) return
    if (fromJson == null) eventManager.addListener(id, completion)
    else eventManager.addListener(id, data => {
        data = fromJson(data)
        if (data !== null && typeof data[Symbol.iterator] === 'function') completion(...data)
        else completion(data)
    })
}
