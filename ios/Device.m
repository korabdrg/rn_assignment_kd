#import "Device.h"
#import <UIKit/UIKit.h>
#import <React/RCTLog.h>
#include <stdlib.h>

@implementation Device

RCT_EXPORT_MODULE();
RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(calculate:(nonnull  NSNumber*)firstNumber withAge:(nonnull NSNumber*)secondNumber mathOp:(int)mathOperator                 errorCallback: (RCTResponseSenderBlock)errorCallback
    successCallback: (RCTResponseSenderBlock)successCallback)
{
    double options[4] = {
    [firstNumber doubleValue] + [secondNumber doubleValue],
    [firstNumber doubleValue] - [secondNumber doubleValue],
    [firstNumber doubleValue] * [secondNumber doubleValue],
    [firstNumber doubleValue] / [secondNumber doubleValue]};
  int result = options[mathOperator];

  @try {
     NSNumber *eventId = [NSNumber numberWithInt:result];
     successCallback(@[eventId]);
   }

   @catch ( NSException *e ) {
     errorCallback(@[e]);
   }
}

@end
