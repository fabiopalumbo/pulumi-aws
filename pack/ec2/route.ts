// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class Route extends fabric.Resource {
    public readonly destinationCidrBlock?: fabric.Computed<string>;
    public readonly destinationIpv6CidrBlock?: fabric.Computed<string>;
    public /*out*/ readonly destinationPrefixListId: fabric.Computed<string>;
    public readonly egressOnlyGatewayId: fabric.Computed<string>;
    public readonly gatewayId: fabric.Computed<string>;
    public readonly instanceId: fabric.Computed<string>;
    public /*out*/ readonly instanceOwnerId: fabric.Computed<string>;
    public readonly natGatewayId: fabric.Computed<string>;
    public readonly networkInterfaceId: fabric.Computed<string>;
    public /*out*/ readonly origin: fabric.Computed<string>;
    public readonly routeTableId: fabric.Computed<string>;
    public /*out*/ readonly state: fabric.Computed<string>;
    public readonly vpcPeeringConnectionId?: fabric.Computed<string>;

    constructor(urnName: string, args: RouteArgs) {
        if (args.routeTableId === undefined) {
            throw new Error("Missing required property 'routeTableId'");
        }
        super("aws:ec2/route:Route", urnName, {
            "destinationCidrBlock": args.destinationCidrBlock,
            "destinationIpv6CidrBlock": args.destinationIpv6CidrBlock,
            "egressOnlyGatewayId": args.egressOnlyGatewayId,
            "gatewayId": args.gatewayId,
            "instanceId": args.instanceId,
            "natGatewayId": args.natGatewayId,
            "networkInterfaceId": args.networkInterfaceId,
            "routeTableId": args.routeTableId,
            "vpcPeeringConnectionId": args.vpcPeeringConnectionId,
            "destinationPrefixListId": undefined,
            "instanceOwnerId": undefined,
            "origin": undefined,
            "state": undefined,
        });
    }
}

export interface RouteArgs {
    readonly destinationCidrBlock?: fabric.MaybeComputed<string>;
    readonly destinationIpv6CidrBlock?: fabric.MaybeComputed<string>;
    readonly egressOnlyGatewayId?: fabric.MaybeComputed<string>;
    readonly gatewayId?: fabric.MaybeComputed<string>;
    readonly instanceId?: fabric.MaybeComputed<string>;
    readonly natGatewayId?: fabric.MaybeComputed<string>;
    readonly networkInterfaceId?: fabric.MaybeComputed<string>;
    readonly routeTableId: fabric.MaybeComputed<string>;
    readonly vpcPeeringConnectionId?: fabric.MaybeComputed<string>;
}

