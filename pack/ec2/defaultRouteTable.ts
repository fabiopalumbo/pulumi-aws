// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class DefaultRouteTable extends fabric.Resource {
    public readonly defaultRouteTableId: fabric.Computed<string>;
    public readonly propagatingVgws?: fabric.Computed<string[]>;
    public readonly route: fabric.Computed<{ cidrBlock?: string, egressOnlyGatewayId?: string, gatewayId?: string, instanceId?: string, ipv6CidrBlock?: string, natGatewayId?: string, networkInterfaceId?: string, vpcPeeringConnectionId?: string }[]>;
    public readonly tags?: fabric.Computed<{[key: string]: any}>;
    public /*out*/ readonly vpcId: fabric.Computed<string>;

    constructor(urnName: string, args: DefaultRouteTableArgs) {
        if (args.defaultRouteTableId === undefined) {
            throw new Error("Missing required property 'defaultRouteTableId'");
        }
        super("aws:ec2/defaultRouteTable:DefaultRouteTable", urnName, {
            "defaultRouteTableId": args.defaultRouteTableId,
            "propagatingVgws": args.propagatingVgws,
            "route": args.route,
            "tags": args.tags,
            "vpcId": undefined,
        });
    }
}

export interface DefaultRouteTableArgs {
    readonly defaultRouteTableId: fabric.MaybeComputed<string>;
    readonly propagatingVgws?: fabric.MaybeComputed<fabric.MaybeComputed<string>>[];
    readonly route?: fabric.MaybeComputed<{ cidrBlock?: fabric.MaybeComputed<string>, egressOnlyGatewayId?: fabric.MaybeComputed<string>, gatewayId?: fabric.MaybeComputed<string>, instanceId?: fabric.MaybeComputed<string>, ipv6CidrBlock?: fabric.MaybeComputed<string>, natGatewayId?: fabric.MaybeComputed<string>, networkInterfaceId?: fabric.MaybeComputed<string>, vpcPeeringConnectionId?: fabric.MaybeComputed<string> }>[];
    readonly tags?: fabric.MaybeComputed<{[key: string]: any}>;
}

