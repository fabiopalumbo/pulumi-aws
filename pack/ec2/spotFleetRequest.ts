// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class SpotFleetRequest extends fabric.Resource {
    public readonly allocationStrategy?: fabric.Computed<string>;
    public /*out*/ readonly clientToken: fabric.Computed<string>;
    public readonly excessCapacityTerminationPolicy?: fabric.Computed<string>;
    public readonly iamFleetRole: fabric.Computed<string>;
    public readonly launchSpecification: fabric.Computed<{ ami: string, associatePublicIpAddress?: boolean, availabilityZone: string, ebsBlockDevice: { deleteOnTermination?: boolean, deviceName: string, encrypted: boolean, iops: number, snapshotId: string, volumeSize: number, volumeType: string }[], ebsOptimized?: boolean, ephemeralBlockDevice: { deviceName: string, virtualName: string }[], iamInstanceProfile?: string, instanceType: string, keyName: string, monitoring?: boolean, placementGroup: string, placementTenancy?: string, rootBlockDevice: { deleteOnTermination?: boolean, iops: number, volumeSize: number, volumeType: string }[], spotPrice?: string, subnetId: string, userData?: string, vpcSecurityGroupIds: string[], weightedCapacity?: string }[]>;
    public readonly replaceUnhealthyInstances?: fabric.Computed<boolean>;
    public readonly spotPrice: fabric.Computed<string>;
    public /*out*/ readonly spotRequestState: fabric.Computed<string>;
    public readonly targetCapacity: fabric.Computed<number>;
    public readonly terminateInstancesWithExpiration?: fabric.Computed<boolean>;
    public readonly validFrom?: fabric.Computed<string>;
    public readonly validUntil?: fabric.Computed<string>;

    constructor(urnName: string, args: SpotFleetRequestArgs) {
        if (args.iamFleetRole === undefined) {
            throw new Error("Missing required property 'iamFleetRole'");
        }
        if (args.launchSpecification === undefined) {
            throw new Error("Missing required property 'launchSpecification'");
        }
        if (args.spotPrice === undefined) {
            throw new Error("Missing required property 'spotPrice'");
        }
        if (args.targetCapacity === undefined) {
            throw new Error("Missing required property 'targetCapacity'");
        }
        super("aws:ec2/spotFleetRequest:SpotFleetRequest", urnName, {
            "allocationStrategy": args.allocationStrategy,
            "excessCapacityTerminationPolicy": args.excessCapacityTerminationPolicy,
            "iamFleetRole": args.iamFleetRole,
            "launchSpecification": args.launchSpecification,
            "replaceUnhealthyInstances": args.replaceUnhealthyInstances,
            "spotPrice": args.spotPrice,
            "targetCapacity": args.targetCapacity,
            "terminateInstancesWithExpiration": args.terminateInstancesWithExpiration,
            "validFrom": args.validFrom,
            "validUntil": args.validUntil,
            "clientToken": undefined,
            "spotRequestState": undefined,
        });
    }
}

export interface SpotFleetRequestArgs {
    readonly allocationStrategy?: fabric.MaybeComputed<string>;
    readonly excessCapacityTerminationPolicy?: fabric.MaybeComputed<string>;
    readonly iamFleetRole: fabric.MaybeComputed<string>;
    readonly launchSpecification: fabric.MaybeComputed<{ ami: fabric.MaybeComputed<string>, associatePublicIpAddress?: fabric.MaybeComputed<boolean>, availabilityZone?: fabric.MaybeComputed<string>, ebsBlockDevice?: fabric.MaybeComputed<{ deleteOnTermination?: fabric.MaybeComputed<boolean>, deviceName: fabric.MaybeComputed<string>, encrypted?: fabric.MaybeComputed<boolean>, iops?: fabric.MaybeComputed<number>, snapshotId?: fabric.MaybeComputed<string>, volumeSize?: fabric.MaybeComputed<number>, volumeType?: fabric.MaybeComputed<string> }>[], ebsOptimized?: fabric.MaybeComputed<boolean>, ephemeralBlockDevice?: fabric.MaybeComputed<{ deviceName: fabric.MaybeComputed<string>, virtualName: fabric.MaybeComputed<string> }>[], iamInstanceProfile?: fabric.MaybeComputed<string>, instanceType: fabric.MaybeComputed<string>, keyName?: fabric.MaybeComputed<string>, monitoring?: fabric.MaybeComputed<boolean>, placementGroup?: fabric.MaybeComputed<string>, placementTenancy?: fabric.MaybeComputed<string>, rootBlockDevice?: fabric.MaybeComputed<{ deleteOnTermination?: fabric.MaybeComputed<boolean>, iops?: fabric.MaybeComputed<number>, volumeSize?: fabric.MaybeComputed<number>, volumeType?: fabric.MaybeComputed<string> }>[], spotPrice?: fabric.MaybeComputed<string>, subnetId?: fabric.MaybeComputed<string>, userData?: fabric.MaybeComputed<string>, vpcSecurityGroupIds?: fabric.MaybeComputed<fabric.MaybeComputed<string>>[], weightedCapacity?: fabric.MaybeComputed<string> }>[];
    readonly replaceUnhealthyInstances?: fabric.MaybeComputed<boolean>;
    readonly spotPrice: fabric.MaybeComputed<string>;
    readonly targetCapacity: fabric.MaybeComputed<number>;
    readonly terminateInstancesWithExpiration?: fabric.MaybeComputed<boolean>;
    readonly validFrom?: fabric.MaybeComputed<string>;
    readonly validUntil?: fabric.MaybeComputed<string>;
}

