#import <React/RCTEventEmitter.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(RNIDV, RCTEventEmitter)

RCT_EXTERN_METHOD(exec: (NSString*)method
                  args:(NSArray*)args
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)

@end
