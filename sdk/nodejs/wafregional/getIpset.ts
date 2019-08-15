// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * `aws.wafregional.IpSet` Retrieves a WAF Regional IP Set Resource Id.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = aws.wafregional.getIpset({
 *     name: "tfWAFRegionalIPSet",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/wafregional_ipset.html.markdown.
 */
export function getIpset(args: GetIpsetArgs, opts?: pulumi.InvokeOptions): Promise<GetIpsetResult> & GetIpsetResult {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    const promise: Promise<GetIpsetResult> = pulumi.runtime.invoke("aws:wafregional/getIpset:getIpset", {
        "name": args.name,
    }, opts);

    return pulumi.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getIpset.
 */
export interface GetIpsetArgs {
    /**
     * The name of the WAF Regional IP set.
     */
    readonly name: string;
}

/**
 * A collection of values returned by getIpset.
 */
export interface GetIpsetResult {
    readonly name: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
