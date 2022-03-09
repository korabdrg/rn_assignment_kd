#import "Device.h"
#import <UIKit/UIKit.h>
#import <React/RCTLog.h>
@implementation Device

//export the name of the native module as 'Device' since no explicit name is mentioned
RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(calculate:(nonnull  NSNumber*)string withAge:(nonnull NSNumber*)age mathOp: (NSString*)mathOperator){
  int c = ([string doubleValue] ,mathOperator, [age doubleValue]);
  NSLog(@"%d %@", c, mathOperator);
}

@end
