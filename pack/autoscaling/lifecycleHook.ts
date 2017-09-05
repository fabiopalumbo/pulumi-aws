// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class LifecycleHook extends fabric.Resource {
    public readonly autoscalingGroupName: fabric.Computed<string>;
    public readonly defaultResult: fabric.Computed<string>;
    public readonly heartbeatTimeout?: fabric.Computed<number>;
    public readonly lifecycleTransition: fabric.Computed<string>;
    public readonly name: fabric.Computed<string>;
    public readonly notificationMetadata?: fabric.Computed<string>;
    public readonly notificationTargetArn?: fabric.Computed<string>;
    public readonly roleArn?: fabric.Computed<string>;

    constructor(urnName: string, args: LifecycleHookArgs) {
        if (args.autoscalingGroupName === undefined) {
            throw new Error("Missing required property 'autoscalingGroupName'");
        }
        if (args.lifecycleTransition === undefined) {
            throw new Error("Missing required property 'lifecycleTransition'");
        }
        super("aws:autoscaling/lifecycleHook:LifecycleHook", urnName, {
            "autoscalingGroupName": args.autoscalingGroupName,
            "defaultResult": args.defaultResult,
            "heartbeatTimeout": args.heartbeatTimeout,
            "lifecycleTransition": args.lifecycleTransition,
            "name": args.name,
            "notificationMetadata": args.notificationMetadata,
            "notificationTargetArn": args.notificationTargetArn,
            "roleArn": args.roleArn,
        });
    }
}

export interface LifecycleHookArgs {
    readonly autoscalingGroupName: fabric.MaybeComputed<string>;
    readonly defaultResult?: fabric.MaybeComputed<string>;
    readonly heartbeatTimeout?: fabric.MaybeComputed<number>;
    readonly lifecycleTransition: fabric.MaybeComputed<string>;
    readonly name?: fabric.MaybeComputed<string>;
    readonly notificationMetadata?: fabric.MaybeComputed<string>;
    readonly notificationTargetArn?: fabric.MaybeComputed<string>;
    readonly roleArn?: fabric.MaybeComputed<string>;
}

