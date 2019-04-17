// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Use this data source to get information about a Workspaces Bundle.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = pulumi.output(aws.workspaces.getBundle({
 *     bundleId: "wsb-b0s22j3d7",
 * }));
 * ```
 */
export function getBundle(args: GetBundleArgs, opts?: pulumi.InvokeOptions): Promise<GetBundleResult> {
    return pulumi.runtime.invoke("aws:workspaces/getBundle:getBundle", {
        "bundleId": args.bundleId,
    }, opts);
}

/**
 * A collection of arguments for invoking getBundle.
 */
export interface GetBundleArgs {
    /**
     * The ID of the bundle.
     */
    readonly bundleId: string;
}

/**
 * A collection of values returned by getBundle.
 */
export interface GetBundleResult {
    readonly bundleId: string;
    /**
     * The compute type. See supported fields below.
     */
    readonly computeTypes: { name: string }[];
    /**
     * The description of the bundle.
     */
    readonly description: string;
    /**
     * The name of the compute type.
     */
    readonly name: string;
    /**
     * The owner of the bundle.
     */
    readonly owner: string;
    /**
     * The root volume. See supported fields below.
     */
    readonly rootStorages: { capacity: string }[];
    /**
     * The user storage. See supported fields below.
     */
    readonly userStorages: { capacity: string }[];
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
