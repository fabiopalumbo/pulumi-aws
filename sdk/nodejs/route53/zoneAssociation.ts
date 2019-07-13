// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/route53_zone_association.html.markdown.
 */
export class ZoneAssociation extends pulumi.CustomResource {
    /**
     * Get an existing ZoneAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ZoneAssociationState, opts?: pulumi.CustomResourceOptions): ZoneAssociation {
        return new ZoneAssociation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:route53/zoneAssociation:ZoneAssociation';

    /**
     * Returns true if the given object is an instance of ZoneAssociation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ZoneAssociation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ZoneAssociation.__pulumiType;
    }

    /**
     * The VPC to associate with the private hosted zone.
     */
    public readonly vpcId!: pulumi.Output<string>;
    /**
     * The VPC's region. Defaults to the region of the AWS provider.
     */
    public readonly vpcRegion!: pulumi.Output<string>;
    /**
     * The private hosted zone to associate.
     */
    public readonly zoneId!: pulumi.Output<string>;

    /**
     * Create a ZoneAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ZoneAssociationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ZoneAssociationArgs | ZoneAssociationState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ZoneAssociationState | undefined;
            inputs["vpcId"] = state ? state.vpcId : undefined;
            inputs["vpcRegion"] = state ? state.vpcRegion : undefined;
            inputs["zoneId"] = state ? state.zoneId : undefined;
        } else {
            const args = argsOrState as ZoneAssociationArgs | undefined;
            if (!args || args.vpcId === undefined) {
                throw new Error("Missing required property 'vpcId'");
            }
            if (!args || args.zoneId === undefined) {
                throw new Error("Missing required property 'zoneId'");
            }
            inputs["vpcId"] = args ? args.vpcId : undefined;
            inputs["vpcRegion"] = args ? args.vpcRegion : undefined;
            inputs["zoneId"] = args ? args.zoneId : undefined;
        }
        super(ZoneAssociation.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ZoneAssociation resources.
 */
export interface ZoneAssociationState {
    /**
     * The VPC to associate with the private hosted zone.
     */
    readonly vpcId?: pulumi.Input<string>;
    /**
     * The VPC's region. Defaults to the region of the AWS provider.
     */
    readonly vpcRegion?: pulumi.Input<string>;
    /**
     * The private hosted zone to associate.
     */
    readonly zoneId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ZoneAssociation resource.
 */
export interface ZoneAssociationArgs {
    /**
     * The VPC to associate with the private hosted zone.
     */
    readonly vpcId: pulumi.Input<string>;
    /**
     * The VPC's region. Defaults to the region of the AWS provider.
     */
    readonly vpcRegion?: pulumi.Input<string>;
    /**
     * The private hosted zone to associate.
     */
    readonly zoneId: pulumi.Input<string>;
}
