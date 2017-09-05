// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class EipAssociation extends fabric.Resource {
    public readonly allocationId: fabric.Computed<string>;
    public readonly allowReassociation?: fabric.Computed<boolean>;
    public readonly instanceId: fabric.Computed<string>;
    public readonly networkInterfaceId: fabric.Computed<string>;
    public readonly privateIpAddress: fabric.Computed<string>;
    public readonly publicIp: fabric.Computed<string>;

    constructor(urnName: string, args: EipAssociationArgs) {
        super("aws:ec2/eipAssociation:EipAssociation", urnName, {
            "allocationId": args.allocationId,
            "allowReassociation": args.allowReassociation,
            "instanceId": args.instanceId,
            "networkInterfaceId": args.networkInterfaceId,
            "privateIpAddress": args.privateIpAddress,
            "publicIp": args.publicIp,
        });
    }
}

export interface EipAssociationArgs {
    readonly allocationId?: fabric.MaybeComputed<string>;
    readonly allowReassociation?: fabric.MaybeComputed<boolean>;
    readonly instanceId?: fabric.MaybeComputed<string>;
    readonly networkInterfaceId?: fabric.MaybeComputed<string>;
    readonly privateIpAddress?: fabric.MaybeComputed<string>;
    readonly publicIp?: fabric.MaybeComputed<string>;
}

