//
//  RCTCalendarModule.m
//  rn_assignment_kd
//
//  Created by Korab Dragidella on 8.3.22.
//

#ifndef RCTCalendarModule_h
#define RCTCalendarModule_h


#endif /* RCTCalendarModule_h */
// RCTCalendarModule.m
#import "RCTCalendarModule.h"
#import <React/RCTLog.h>

@implementation RCTCalendarModule

// To export a module named RCTCalendarModule
RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

@end
