#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_REMAP_MODULE(TestConnectNative, TestConnectNativeModule, NSObject)

RCT_EXTERN_METHOD(sendMessageToNative: (NSString)rnMessage)
RCT_EXTERN_METHOD(sendCallbackToNative: (RCTResponseSenderBlock)rnCallback)
RCT_EXTERN_METHOD(goToSecondViewController:(nonnull NSNumber *)reactTag message:(NSString *)message)
RCT_EXTERN_METHOD(dismissViewController: (nonnull NSNumber *)reactTag)

@end
