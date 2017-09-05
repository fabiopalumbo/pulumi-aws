// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class InstanceGroup extends fabric.Resource {
    public readonly clusterId: fabric.Computed<string>;
    public readonly ebsConfig?: fabric.Computed<{ iops?: number, size: number, type: string, volumesPerInstance?: number }[]>;
    public readonly ebsOptimized?: fabric.Computed<boolean>;
    public readonly instanceCount?: fabric.Computed<number>;
    public readonly instanceType: fabric.Computed<string>;
    public readonly name: fabric.Computed<string>;
    public /*out*/ readonly runningInstanceCount: fabric.Computed<number>;
    public /*out*/ readonly status: fabric.Computed<string>;

    constructor(urnName: string, args: InstanceGroupArgs) {
        if (args.clusterId === undefined) {
            throw new Error("Missing required property 'clusterId'");
        }
        if (args.instanceType === undefined) {
            throw new Error("Missing required property 'instanceType'");
        }
        super("aws:emr/instanceGroup:InstanceGroup", urnName, {
            "clusterId": args.clusterId,
            "ebsConfig": args.ebsConfig,
            "ebsOptimized": args.ebsOptimized,
            "instanceCount": args.instanceCount,
            "instanceType": args.instanceType,
            "name": args.name,
            "runningInstanceCount": undefined,
            "status": undefined,
        });
    }
}

export interface InstanceGroupArgs {
    readonly clusterId: fabric.MaybeComputed<string>;
    readonly ebsConfig?: fabric.MaybeComputed<{ iops?: fabric.MaybeComputed<number>, size: fabric.MaybeComputed<number>, type: fabric.MaybeComputed<string>, volumesPerInstance?: fabric.MaybeComputed<number> }>[];
    readonly ebsOptimized?: fabric.MaybeComputed<boolean>;
    readonly instanceCount?: fabric.MaybeComputed<number>;
    readonly instanceType: fabric.MaybeComputed<string>;
    readonly name?: fabric.MaybeComputed<string>;
}

