// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

import {Tags} from "../index";

/**
 * Provides a Route53 Hosted Zone resource.
 */
export class Zone extends pulumi.CustomResource {
    /**
     * Get an existing Zone resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ZoneState): Zone {
        return new Zone(name, <any>state, { id });
    }

    /**
     * A comment for the hosted zone. Defaults to 'Managed by Terraform'.
     */
    public readonly comment: pulumi.Output<string>;
    /**
     * The ID of the reusable delegation set whose NS records you want to assign to the hosted zone.
     * Conflicts w/ `vpc_id` as delegation sets can only be used for public zones.
     */
    public readonly delegationSetId: pulumi.Output<string | undefined>;
    /**
     * Whether to destroy all records (possibly managed outside of Terraform)
     * in the zone when destroying the zone.
     */
    public readonly forceDestroy: pulumi.Output<boolean | undefined>;
    /**
     * This is the name of the hosted zone.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * A list of name servers in associated (or default) delegation set.
     * Find more about delegation sets in [AWS docs](https://docs.aws.amazon.com/Route53/latest/APIReference/actions-on-reusable-delegation-sets.html).
     */
    public /*out*/ readonly nameServers: pulumi.Output<string[]>;
    /**
     * A mapping of tags to assign to the zone.
     */
    public readonly tags: pulumi.Output<Tags | undefined>;
    /**
     * The VPC to associate with a private hosted zone. Specifying `vpc_id` will create a private hosted zone.
     * Conflicts w/ `delegation_set_id` as delegation sets can only be used for public zones.
     */
    public readonly vpcId: pulumi.Output<string | undefined>;
    /**
     * The VPC's region. Defaults to the region of the AWS provider.
     */
    public readonly vpcRegion: pulumi.Output<string>;
    /**
     * The Hosted Zone ID. This can be referenced by zone records.
     */
    public /*out*/ readonly zoneId: pulumi.Output<string>;

    /**
     * Create a Zone resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ZoneArgs, opts?: pulumi.ResourceOptions)
    constructor(name: string, argsOrState?: ZoneArgs | ZoneState, opts?: pulumi.ResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: ZoneState = argsOrState as ZoneState | undefined;
            inputs["comment"] = state ? state.comment : undefined;
            inputs["delegationSetId"] = state ? state.delegationSetId : undefined;
            inputs["forceDestroy"] = state ? state.forceDestroy : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["nameServers"] = state ? state.nameServers : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["vpcId"] = state ? state.vpcId : undefined;
            inputs["vpcRegion"] = state ? state.vpcRegion : undefined;
            inputs["zoneId"] = state ? state.zoneId : undefined;
        } else {
            const args = argsOrState as ZoneArgs | undefined;
            inputs["comment"] = args ? args.comment : undefined;
            inputs["delegationSetId"] = args ? args.delegationSetId : undefined;
            inputs["forceDestroy"] = args ? args.forceDestroy : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["vpcId"] = args ? args.vpcId : undefined;
            inputs["vpcRegion"] = args ? args.vpcRegion : undefined;
            inputs["nameServers"] = undefined /*out*/;
            inputs["zoneId"] = undefined /*out*/;
        }
        super("aws:route53/zone:Zone", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Zone resources.
 */
export interface ZoneState {
    /**
     * A comment for the hosted zone. Defaults to 'Managed by Terraform'.
     */
    readonly comment?: pulumi.Input<string>;
    /**
     * The ID of the reusable delegation set whose NS records you want to assign to the hosted zone.
     * Conflicts w/ `vpc_id` as delegation sets can only be used for public zones.
     */
    readonly delegationSetId?: pulumi.Input<string>;
    /**
     * Whether to destroy all records (possibly managed outside of Terraform)
     * in the zone when destroying the zone.
     */
    readonly forceDestroy?: pulumi.Input<boolean>;
    /**
     * This is the name of the hosted zone.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A list of name servers in associated (or default) delegation set.
     * Find more about delegation sets in [AWS docs](https://docs.aws.amazon.com/Route53/latest/APIReference/actions-on-reusable-delegation-sets.html).
     */
    readonly nameServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A mapping of tags to assign to the zone.
     */
    readonly tags?: pulumi.Input<Tags>;
    /**
     * The VPC to associate with a private hosted zone. Specifying `vpc_id` will create a private hosted zone.
     * Conflicts w/ `delegation_set_id` as delegation sets can only be used for public zones.
     */
    readonly vpcId?: pulumi.Input<string>;
    /**
     * The VPC's region. Defaults to the region of the AWS provider.
     */
    readonly vpcRegion?: pulumi.Input<string>;
    /**
     * The Hosted Zone ID. This can be referenced by zone records.
     */
    readonly zoneId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Zone resource.
 */
export interface ZoneArgs {
    /**
     * A comment for the hosted zone. Defaults to 'Managed by Terraform'.
     */
    readonly comment?: pulumi.Input<string>;
    /**
     * The ID of the reusable delegation set whose NS records you want to assign to the hosted zone.
     * Conflicts w/ `vpc_id` as delegation sets can only be used for public zones.
     */
    readonly delegationSetId?: pulumi.Input<string>;
    /**
     * Whether to destroy all records (possibly managed outside of Terraform)
     * in the zone when destroying the zone.
     */
    readonly forceDestroy?: pulumi.Input<boolean>;
    /**
     * This is the name of the hosted zone.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the zone.
     */
    readonly tags?: pulumi.Input<Tags>;
    /**
     * The VPC to associate with a private hosted zone. Specifying `vpc_id` will create a private hosted zone.
     * Conflicts w/ `delegation_set_id` as delegation sets can only be used for public zones.
     */
    readonly vpcId?: pulumi.Input<string>;
    /**
     * The VPC's region. Defaults to the region of the AWS provider.
     */
    readonly vpcRegion?: pulumi.Input<string>;
}
