// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides a static route between a VPN connection and a customer gateway.
 */
export class VpnConnectionRoute extends pulumi.Resource {
    /**
     * The CIDR block associated with the local subnet of the customer network.
     */
    public readonly destinationCidrBlock: pulumi.Computed<string>;
    /**
     * The ID of the VPN connection.
     */
    public readonly vpnConnectionId: pulumi.Computed<string>;

    /**
     * Create a VpnConnectionRoute resource with the given unique name, arguments, and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this VpnConnectionRoute instance
     * @param args A collection of arguments for creating this VpnConnectionRoute instance
     * @param dependsOn A optional array of additional resources this instance depends on
     */
    constructor(urnName: string, args: VpnConnectionRouteArgs, dependsOn?: pulumi.Resource[]) {
        if (args.destinationCidrBlock === undefined) {
            throw new Error("Missing required property 'destinationCidrBlock'");
        }
        if (args.vpnConnectionId === undefined) {
            throw new Error("Missing required property 'vpnConnectionId'");
        }
        super("aws:ec2/vpnConnectionRoute:VpnConnectionRoute", urnName, {
            "destinationCidrBlock": args.destinationCidrBlock,
            "vpnConnectionId": args.vpnConnectionId,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a VpnConnectionRoute resource.
 */
export interface VpnConnectionRouteArgs {
    /**
     * The CIDR block associated with the local subnet of the customer network.
     */
    readonly destinationCidrBlock: pulumi.ComputedValue<string>;
    /**
     * The ID of the VPN connection.
     */
    readonly vpnConnectionId: pulumi.ComputedValue<string>;
}

