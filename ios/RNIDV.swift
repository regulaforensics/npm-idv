func sendEvent(_ event: String, _ data: Any? = nil) {

}

func args<T>(_ index: Int) -> T {
    return index as! T
}

func argsNullable<T>(_ index: Int) -> T? {
    return nil
}

public class RNIDVPlugin: NSObject {

}

let rootViewController: () -> UIViewController? = {
    for window in UIApplication.shared.windows {
        if window.isKeyWindow {
            return window.rootViewController
        }
    }
    return nil
}
