/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"GhjhqaVOvPGuY3WCWkhGk79BPJEDLwfZ"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"qsVcJPxet1ugVStUlyLhgkrd0jeOzQw9"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"l1P7jCQVag1uQ8S2SOQ98piHjxJO0Hbo"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"EiK6O5TVPPhaCfKTjPUhYIrwE7SsptIG"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"K7aaq1p6vuv9TWwg65ikhUC3KZmibv2A"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"KKuYYAbCSQvR4z0uqeirckmQ53e21qXj"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
