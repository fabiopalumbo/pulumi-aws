// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class DefaultSubnet extends fabric.Resource {
    public /*out*/ readonly assignIpv6AddressOnCreation: fabric.Computed<boolean>;
    public readonly availabilityZone: fabric.Computed<string>;
    public /*out*/ readonly cidrBlock: fabric.Computed<string>;
    public /*out*/ readonly ipv6CidrBlock: fabric.Computed<string>;
    public /*out*/ readonly ipv6CidrBlockAssociationId: fabric.Computed<string>;
    public /*out*/ readonly mapPublicIpOnLaunch: fabric.Computed<boolean>;
    public readonly tags?: fabric.Computed<{[key: string]: any}>;
    public /*out*/ readonly vpcId: fabric.Computed<string>;

    constructor(urnName: string, args: DefaultSubnetArgs) {
        if (args.availabilityZone === undefined) {
            throw new Error("Missing required property 'availabilityZone'");
        }
        super("aws:ec2/defaultSubnet:DefaultSubnet", urnName, {
            "availabilityZone": args.availabilityZone,
            "tags": args.tags,
            "assignIpv6AddressOnCreation": undefined,
            "cidrBlock": undefined,
            "ipv6CidrBlock": undefined,
            "ipv6CidrBlockAssociationId": undefined,
            "mapPublicIpOnLaunch": undefined,
            "vpcId": undefined,
        });
    }
}

export interface DefaultSubnetArgs {
    readonly availabilityZone: fabric.MaybeComputed<string>;
    readonly tags?: fabric.MaybeComputed<{[key: string]: any}>;
}

