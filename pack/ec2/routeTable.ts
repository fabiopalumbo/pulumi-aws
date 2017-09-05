// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class RouteTable extends fabric.Resource {
    public readonly propagatingVgws: fabric.Computed<string[]>;
    public readonly route: fabric.Computed<{ cidrBlock?: string, egressOnlyGatewayId?: string, gatewayId?: string, instanceId?: string, ipv6CidrBlock?: string, natGatewayId?: string, networkInterfaceId?: string, vpcPeeringConnectionId?: string }[]>;
    public readonly tags?: fabric.Computed<{[key: string]: any}>;
    public readonly vpcId: fabric.Computed<string>;

    constructor(urnName: string, args: RouteTableArgs) {
        if (args.vpcId === undefined) {
            throw new Error("Missing required property 'vpcId'");
        }
        super("aws:ec2/routeTable:RouteTable", urnName, {
            "propagatingVgws": args.propagatingVgws,
            "route": args.route,
            "tags": args.tags,
            "vpcId": args.vpcId,
        });
    }
}

export interface RouteTableArgs {
    readonly propagatingVgws?: fabric.MaybeComputed<fabric.MaybeComputed<string>>[];
    readonly route?: fabric.MaybeComputed<{ cidrBlock?: fabric.MaybeComputed<string>, egressOnlyGatewayId?: fabric.MaybeComputed<string>, gatewayId?: fabric.MaybeComputed<string>, instanceId?: fabric.MaybeComputed<string>, ipv6CidrBlock?: fabric.MaybeComputed<string>, natGatewayId?: fabric.MaybeComputed<string>, networkInterfaceId?: fabric.MaybeComputed<string>, vpcPeeringConnectionId?: fabric.MaybeComputed<string> }>[];
    readonly tags?: fabric.MaybeComputed<{[key: string]: any}>;
    readonly vpcId: fabric.MaybeComputed<string>;
}

