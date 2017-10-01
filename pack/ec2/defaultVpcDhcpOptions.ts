// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides a resource to manage the [default AWS DHCP Options Set](http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_DHCP_Options.html#AmazonDNS)
 * in the current region.
 * 
 * Each AWS region comes with a default set of DHCP options.
 * **This is an advanced resource**, and has special caveats to be aware of when
 * using it. Please read this document in its entirety before using this resource.
 * 
 * The `aws_default_vpc_dhcp_options` behaves differently from normal resources, in that
 * Terraform does not _create_ this resource, but instead "adopts" it
 * into management. 
 */
export class DefaultVpcDhcpOptions extends pulumi.Resource {
    public /*out*/ readonly domainName: pulumi.Computed<string>;
    public /*out*/ readonly domainNameServers: pulumi.Computed<string>;
    /**
     * List of NETBIOS name servers.
     */
    public readonly netbiosNameServers?: pulumi.Computed<string[]>;
    /**
     * The NetBIOS node type (1, 2, 4, or 8). AWS recommends to specify 2 since broadcast and multicast are not supported in their network. For more information about these node types, see [RFC 2132](http://www.ietf.org/rfc/rfc2132.txt).
     */
    public readonly netbiosNodeType?: pulumi.Computed<string>;
    public /*out*/ readonly ntpServers: pulumi.Computed<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags?: pulumi.Computed<{[key: string]: any}>;

    /**
     * Create a DefaultVpcDhcpOptions resource with the given unique name, arguments, and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this DefaultVpcDhcpOptions instance
     * @param args A collection of arguments for creating this DefaultVpcDhcpOptions instance
     * @param dependsOn A optional array of additional resources this instance depends on
     */
    constructor(urnName: string, args?: DefaultVpcDhcpOptionsArgs, dependsOn?: pulumi.Resource[]) {
        args = args || {};
        super("aws:ec2/defaultVpcDhcpOptions:DefaultVpcDhcpOptions", urnName, {
            "netbiosNameServers": args.netbiosNameServers,
            "netbiosNodeType": args.netbiosNodeType,
            "tags": args.tags,
            "domainName": undefined,
            "domainNameServers": undefined,
            "ntpServers": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a DefaultVpcDhcpOptions resource.
 */
export interface DefaultVpcDhcpOptionsArgs {
    /**
     * List of NETBIOS name servers.
     */
    readonly netbiosNameServers?: pulumi.ComputedValue<pulumi.ComputedValue<string>>[];
    /**
     * The NetBIOS node type (1, 2, 4, or 8). AWS recommends to specify 2 since broadcast and multicast are not supported in their network. For more information about these node types, see [RFC 2132](http://www.ietf.org/rfc/rfc2132.txt).
     */
    readonly netbiosNodeType?: pulumi.ComputedValue<string>;
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.ComputedValue<{[key: string]: any}>;
}

