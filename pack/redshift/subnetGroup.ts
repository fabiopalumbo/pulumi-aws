// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Creates a new Amazon Redshift subnet group. You must provide a list of one or more subnets in your existing Amazon Virtual Private Cloud (Amazon VPC) when creating Amazon Redshift subnet group.
 */
export class SubnetGroup extends pulumi.Resource {
    /**
     * The description of the Redshift Subnet group. Defaults to "Managed by Terraform".
     */
    public readonly description?: pulumi.Computed<string>;
    /**
     * The name of the Redshift Subnet group.
     */
    public readonly name: pulumi.Computed<string>;
    /**
     * An array of VPC subnet IDs.
     */
    public readonly subnetIds: pulumi.Computed<string[]>;
    /**
     * A mapping of tags to assign to the resource.
     */
    public readonly tags?: pulumi.Computed<{[key: string]: any}>;

    /**
     * Create a SubnetGroup resource with the given unique name, arguments, and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this SubnetGroup instance
     * @param args A collection of arguments for creating this SubnetGroup instance
     * @param dependsOn A optional array of additional resources this instance depends on
     */
    constructor(urnName: string, args: SubnetGroupArgs, dependsOn?: pulumi.Resource[]) {
        if (args.subnetIds === undefined) {
            throw new Error("Missing required property 'subnetIds'");
        }
        super("aws:redshift/subnetGroup:SubnetGroup", urnName, {
            "description": args.description,
            "name": args.name,
            "subnetIds": args.subnetIds,
            "tags": args.tags,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a SubnetGroup resource.
 */
export interface SubnetGroupArgs {
    /**
     * The description of the Redshift Subnet group. Defaults to "Managed by Terraform".
     */
    readonly description?: pulumi.ComputedValue<string>;
    /**
     * The name of the Redshift Subnet group.
     */
    readonly name?: pulumi.ComputedValue<string>;
    /**
     * An array of VPC subnet IDs.
     */
    readonly subnetIds: pulumi.ComputedValue<pulumi.ComputedValue<string>>[];
    /**
     * A mapping of tags to assign to the resource.
     */
    readonly tags?: pulumi.ComputedValue<{[key: string]: any}>;
}

