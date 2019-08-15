// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Use this data source to get the IP ranges of various AWS products and services. For more information about the contents of this data source and required JSON syntax if referencing a custom URL, see the [AWS IP Address Ranges documention][1].
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const europeanEc2 = aws.getIpRanges({
 *     regions: [
 *         "eu-west-1",
 *         "eu-central-1",
 *     ],
 *     services: ["ec2"],
 * });
 * const fromEurope = new aws.ec2.SecurityGroup("fromEurope", {
 *     ingress: [{
 *         cidrBlocks: europeanEc2.cidrBlocks,
 *         fromPort: 443,
 *         ipv6CidrBlocks: europeanEc2.ipv6CidrBlocks,
 *         protocol: "tcp",
 *         toPort: 443,
 *     }],
 *     tags: {
 *         CreateDate: europeanEc2.createDate,
 *         SyncToken: europeanEc2.syncToken,
 *     },
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/d/ip_ranges.html.markdown.
 */
export function getIpRanges(args: GetIpRangesArgs, opts?: pulumi.InvokeOptions): Promise<GetIpRangesResult> & GetIpRangesResult {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    const promise: Promise<GetIpRangesResult> = pulumi.runtime.invoke("aws:index/getIpRanges:getIpRanges", {
        "regions": args.regions,
        "services": args.services,
        "url": args.url,
    }, opts);

    return pulumi.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getIpRanges.
 */
export interface GetIpRangesArgs {
    /**
     * Filter IP ranges by regions (or include all regions, if
     * omitted). Valid items are `global` (for `cloudfront`) as well as all AWS regions
     * (e.g. `eu-central-1`)
     */
    readonly regions?: string[];
    /**
     * Filter IP ranges by services. Valid items are `amazon`
     * (for amazon.com), `cloudfront`, `codebuild`, `ec2`, `route53`, `route53Healthchecks` and `S3`.
     */
    readonly services: string[];
    /**
     * Custom URL for source JSON file. Syntax must match [AWS IP Address Ranges documention][1]. Defaults to `https://ip-ranges.amazonaws.com/ip-ranges.json`.
     */
    readonly url?: string;
}

/**
 * A collection of values returned by getIpRanges.
 */
export interface GetIpRangesResult {
    /**
     * The lexically ordered list of CIDR blocks.
     */
    readonly cidrBlocks: string[];
    /**
     * The publication time of the IP ranges (e.g. `2016-08-03-23-46-05`).
     */
    readonly createDate: string;
    /**
     * The lexically ordered list of IPv6 CIDR blocks.
     */
    readonly ipv6CidrBlocks: string[];
    readonly regions?: string[];
    readonly services: string[];
    /**
     * The publication time of the IP ranges, in Unix epoch time format
     * (e.g. `1470267965`).
     */
    readonly syncToken: number;
    readonly url?: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
