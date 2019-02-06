// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides an AWS App Mesh route resource.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const serviceb = new aws.appmesh.Route("serviceb", {
 *     meshName: "simpleapp",
 *     name: "serviceB-route",
 *     spec: {
 *         httpRoute: {
 *             action: {
 *                 weightedTargets: [
 *                     {
 *                         virtualNode: "serviceBv1",
 *                         weight: 90,
 *                     },
 *                     {
 *                         virtualNode: "serviceBv2",
 *                         weight: 10,
 *                     },
 *                 ],
 *             },
 *             match: {
 *                 prefix: "/",
 *             },
 *         },
 *     },
 *     virtualRouterName: "serviceB",
 * });
 * ```
 */
export class Route extends pulumi.CustomResource {
    /**
     * Get an existing Route resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RouteState, opts?: pulumi.CustomResourceOptions): Route {
        return new Route(name, <any>state, { ...opts, id: id });
    }

    /**
     * The ARN of the route.
     */
    public /*out*/ readonly arn: pulumi.Output<string>;
    /**
     * The creation date of the route.
     */
    public /*out*/ readonly createdDate: pulumi.Output<string>;
    /**
     * The last update date of the route.
     */
    public /*out*/ readonly lastUpdatedDate: pulumi.Output<string>;
    /**
     * The name of the service mesh in which to create the route.
     */
    public readonly meshName: pulumi.Output<string>;
    /**
     * The name to use for the route.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * The route specification to apply.
     */
    public readonly spec: pulumi.Output<{ httpRoute?: { action: { weightedTargets: { virtualNode: string, weight: number }[] }, match: { prefix: string } } }>;
    public readonly virtualRouterName: pulumi.Output<string>;

    /**
     * Create a Route resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RouteArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RouteArgs | RouteState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: RouteState = argsOrState as RouteState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["createdDate"] = state ? state.createdDate : undefined;
            inputs["lastUpdatedDate"] = state ? state.lastUpdatedDate : undefined;
            inputs["meshName"] = state ? state.meshName : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["spec"] = state ? state.spec : undefined;
            inputs["virtualRouterName"] = state ? state.virtualRouterName : undefined;
        } else {
            const args = argsOrState as RouteArgs | undefined;
            if (!args || args.meshName === undefined) {
                throw new Error("Missing required property 'meshName'");
            }
            if (!args || args.spec === undefined) {
                throw new Error("Missing required property 'spec'");
            }
            if (!args || args.virtualRouterName === undefined) {
                throw new Error("Missing required property 'virtualRouterName'");
            }
            inputs["meshName"] = args ? args.meshName : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["spec"] = args ? args.spec : undefined;
            inputs["virtualRouterName"] = args ? args.virtualRouterName : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["createdDate"] = undefined /*out*/;
            inputs["lastUpdatedDate"] = undefined /*out*/;
        }
        super("aws:appmesh/route:Route", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Route resources.
 */
export interface RouteState {
    /**
     * The ARN of the route.
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * The creation date of the route.
     */
    readonly createdDate?: pulumi.Input<string>;
    /**
     * The last update date of the route.
     */
    readonly lastUpdatedDate?: pulumi.Input<string>;
    /**
     * The name of the service mesh in which to create the route.
     */
    readonly meshName?: pulumi.Input<string>;
    /**
     * The name to use for the route.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The route specification to apply.
     */
    readonly spec?: pulumi.Input<{ httpRoute?: pulumi.Input<{ action: pulumi.Input<{ weightedTargets: pulumi.Input<pulumi.Input<{ virtualNode: pulumi.Input<string>, weight: pulumi.Input<number> }>[]> }>, match: pulumi.Input<{ prefix: pulumi.Input<string> }> }> }>;
    readonly virtualRouterName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Route resource.
 */
export interface RouteArgs {
    /**
     * The name of the service mesh in which to create the route.
     */
    readonly meshName: pulumi.Input<string>;
    /**
     * The name to use for the route.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The route specification to apply.
     */
    readonly spec: pulumi.Input<{ httpRoute?: pulumi.Input<{ action: pulumi.Input<{ weightedTargets: pulumi.Input<pulumi.Input<{ virtualNode: pulumi.Input<string>, weight: pulumi.Input<number> }>[]> }>, match: pulumi.Input<{ prefix: pulumi.Input<string> }> }> }>;
    readonly virtualRouterName: pulumi.Input<string>;
}
