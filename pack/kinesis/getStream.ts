// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Use this data source to get information about a Kinesis Stream for use in other
 * resources.
 * 
 * For more details, see the [Amazon Kinesis Documentation][1].
 */
export function getStream(args: GetStreamArgs): Promise<GetStreamResult> {
    return pulumi.runtime.invoke("aws:kinesis/getStream:getStream", {
        "name": args.name,
    });
}

/**
 * A collection of arguments for invoking getStream.
 */
export interface GetStreamArgs {
    /**
     * The name of the Kinesis Stream.
     */
    name: pulumi.ComputedValue<string>;
}

/**
 * A collection of values returned by getStream.
 */
export interface GetStreamResult {
    /**
     * The Amazon Resource Name (ARN) of the Kinesis Stream (same as id).
     */
    arn: string;
    /**
     * The list of shard ids in the CLOSED state. See [Shard State][2] for more.
     */
    closedShards: string[];
    /**
     * The approximate UNIX timestamp that the stream was created.
     */
    creationTimestamp: number;
    /**
     * The list of shard ids in the OPEN state. See [Shard State][2] for more.
     */
    openShards: string[];
    /**
     * Length of time (in hours) data records are accessible after they are added to the stream.
     */
    retentionPeriod: number;
    /**
     * A list of shard-level CloudWatch metrics which are enabled for the stream. See [Monitoring with CloudWatch][3] for more.
     */
    shardLevelMetrics: string[];
    /**
     * The current status of the stream. The stream status is one of CREATING, DELETING, ACTIVE, or UPDATING.
     */
    status: string;
    /**
     * A mapping of tags to assigned to the stream.
     */
    tags: {[key: string]: any};
}

