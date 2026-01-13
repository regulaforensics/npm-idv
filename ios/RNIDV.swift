import React

func sendEvent(_ event: String, _ data: Any? = nil) {
    guard let plugin = this, hasListeners else { return }
    DispatchQueue.main.async {
        plugin.sendEvent(withName: event, body: data.toSendable())
    }
}

func args<T>(_ index: Int) -> T {
    return mArgs[index] as! T
}

func argsNullable<T>(_ index: Int) -> T? {
    if (mArgs[index] is NSNull) { return nil }
    return mArgs[index] as! T?
}

private var firedCallbacks: [RCTResponseSenderBlock] = []
private var hasListeners: Bool = false
private var this: RNIDV?
private var mArgs: [Any?] = []

@objc(RNIDV)
public class RNIDV: RCTEventEmitter {
    override public func startObserving() { hasListeners = true }
    override public func stopObserving() { hasListeners = false }
    override public func supportedEvents()->[String] {
        return [didStartSessionEvent,
                didEndSessionEvent,
                didStartRestoreSessionEvent,
                didContinueRemoteSessionEvent];
    }
    
    @objc
    func exec(_ method: String, args: [Any], resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
        this = self
        mArgs = args
        methodCall(method, { data in
            if firedCallbacks.contains(where: { ($0 as AnyObject) === (resolve as AnyObject) }) { return }
            firedCallbacks.append(resolve)
            resolve(data.toSendable())
        })
    }
}

let rootViewController: () -> UIViewController? = { return RCTPresentedViewController() }
