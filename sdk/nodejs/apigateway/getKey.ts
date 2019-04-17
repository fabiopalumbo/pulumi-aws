// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Use this data source to get the name and value of a pre-existing API Key, for
 * example to supply credentials for a dependency microservice.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const myApiKey = pulumi.output(aws.apigateway.getKey({
 *     id: "ru3mpjgse6",
 * }));
 * ```
 */
export function getKey(args: GetKeyArgs, opts?: pulumi.InvokeOptions): Promise<GetKeyResult> {
    return pulumi.runtime.invoke("aws:apigateway/getKey:getKey", {
        "id": args.id,
    }, opts);
}

/**
 * A collection of arguments for invoking getKey.
 */
export interface GetKeyArgs {
    /**
     * The ID of the API Key to look up.
     */
    readonly id: string;
}

/**
 * A collection of values returned by getKey.
 */
export interface GetKeyResult {
    /**
     * Set to the ID of the API Key.
     */
    readonly id: string;
    /**
     * Set to the name of the API Key.
     */
    readonly name: string;
    /**
     * Set to the value of the API Key.
     */
    readonly value: string;
}
