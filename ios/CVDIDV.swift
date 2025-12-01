var eventCallbackIds: [String: String] = [:]
private var args: [Any?] = []
private var this: CVDIDV?

func sendEvent(_ event: String, _ data: Any? = nil) {
    var callbackId = event
    let eventId = eventCallbackIds[event]
    if eventId != nil { callbackId = eventId! }

    var sendable = data.toSendable() as Any?
    if sendable is NSNull { sendable = nil }
    let result = CDVPluginResult(status: CDVCommandStatus_OK, messageAs: sendable as! String?)!
    result.setKeepCallbackAs(true)
    
    this!.commandDelegate.send(result, callbackId: callbackId)
}

func args<T>(_ index: Int) -> T {
    return args[index] as! T
}

func argsNullable<T>(_ index: Int) -> T? {
    if (args[index] is NSNull) { return nil }
    return args[index] as! T?
}

@objc(CVDIDV)
class CVDIDV: CDVPlugin {
    @objc(exec:)
    func exec(_ command: CDVInvokedUrlCommand) {
        this = self
        let method = command.arguments.first as! String
        args = Array(command.arguments.dropFirst())

        if method == "setEvent" {
            eventCallbackIds[args.first as! String] = command.callbackId
            return
        }

        methodCall(method, { data in sendEvent(command.callbackId, data) })
    }
}

let rootViewController: () -> UIViewController? = {
    for window in UIApplication.shared.windows {
        if window.isKeyWindow {
            return window.rootViewController
        }
    }
    return nil
}
