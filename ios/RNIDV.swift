import React

@objc(RNIDV)
public class RNIDV: RCTEventEmitter {
    override public func startObserving() { hasListeners = true }
    override public func stopObserving() { hasListeners = false }
    override public func supportedEvents() -> [String] {
        return [didStartSessionEvent,
                didEndSessionEvent,
                didStartRestoreSessionEvent,
                didContinueRemoteSessionEvent,
                didReceiveLogEventEvent]
    }

    @objc
    func exec(
        _ method: String,
        newArgs: [Any],
        resolve: @escaping RCTPromiseResolveBlock,
        reject: @escaping RCTPromiseRejectBlock
    ) {
        plugin = self
        args = newArgs
        var didResolve = false
        let lock = NSLock()
        methodCall(method) { data in
            lock.lock()
            let alreadyResolved = didResolve
            didResolve = true
            lock.unlock()
            if !alreadyResolved { resolve(data.toSendable()) }
        }
    }
}

private var hasListeners = false
private weak var plugin: RNIDV?

func sendEvent(_ event: String, _ data: Any? = nil) {
    guard let plugin, hasListeners else { return }
    DispatchQueue.main.async { plugin.sendEvent(withName: event, body: data.toSendable()) }
}

func withPresenter(_ action: @escaping (UIViewController) -> Void) {
    DispatchQueue.main.async {
        if let presenter = RCTPresentedViewController() {
            action(presenter)
            return
        }
        print("REGULA: Cannot present IDV UI: no presenter available.")
    }
}
