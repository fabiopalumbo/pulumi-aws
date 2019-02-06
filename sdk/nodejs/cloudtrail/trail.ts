// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a CloudTrail resource.
 * 
 * > *NOTE:* For a multi-region trail, this resource must be in the home region of the trail.
 * 
 * > *NOTE:* For an organization trail, this resource must be in the master account of the organization.
 * 
 * ## Example Usage
 * 
 * ### Basic
 * 
 * Enable CloudTrail to capture all compatible management events in region.
 * For capturing events from services like IAM, `include_global_service_events` must be enabled.
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const foo = new aws.s3.Bucket("foo", {
 *     bucket: "tf-test-trail",
 *     forceDestroy: true,
 *     policy: `{
 *     "Version": "2012-10-17",
 *     "Statement": [
 *         {
 *             "Sid": "AWSCloudTrailAclCheck",
 *             "Effect": "Allow",
 *             "Principal": {
 *               "Service": "cloudtrail.amazonaws.com"
 *             },
 *             "Action": "s3:GetBucketAcl",
 *             "Resource": "arn:aws:s3:::tf-test-trail"
 *         },
 *         {
 *             "Sid": "AWSCloudTrailWrite",
 *             "Effect": "Allow",
 *             "Principal": {
 *               "Service": "cloudtrail.amazonaws.com"
 *             },
 *             "Action": "s3:PutObject",
 *             "Resource": "arn:aws:s3:::tf-test-trail/*",
 *             "Condition": {
 *                 "StringEquals": {
 *                     "s3:x-amz-acl": "bucket-owner-full-control"
 *                 }
 *             }
 *         }
 *     ]
 * }
 * `,
 * });
 * const foobar = new aws.cloudtrail.Trail("foobar", {
 *     includeGlobalServiceEvents: false,
 *     name: "tf-trail-foobar",
 *     s3BucketName: foo.id,
 *     s3KeyPrefix: "prefix",
 * });
 * ```
 * ### Data Event Logging
 * 
 * CloudTrail can log [Data Events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-and-data-events-with-cloudtrail.html#logging-data-events) for certain services such as S3 bucket objects and Lambda function invocations. Additional information about data event configuration can be found in the [CloudTrail API DataResource documentation](https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_DataResource.html).
 * 
 * ### Logging All Lambda Function Invocations
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = new aws.cloudtrail.Trail("example", {
 *     eventSelectors: [{
 *         dataResources: [{
 *             type: "AWS::Lambda::Function",
 *             values: ["arn:aws:lambda"],
 *         }],
 *         includeManagementEvents: true,
 *         readWriteType: "All",
 *     }],
 * });
 * ```
 * ### Logging All S3 Bucket Object Events
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const example = new aws.cloudtrail.Trail("example", {
 *     eventSelectors: [{
 *         dataResources: [{
 *             type: "AWS::S3::Object",
 *             values: ["arn:aws:s3:::"],
 *         }],
 *         includeManagementEvents: true,
 *         readWriteType: "All",
 *     }],
 * });
 * ```
 * ### Logging Individual S3 Bucket Events
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const important_bucket = pulumi.output(aws.s3.getBucket({
 *     bucket: "important-bucket",
 * }));
 * const example = new aws.cloudtrail.Trail("example", {
 *     eventSelectors: [{
 *         dataResources: [{
 *             type: "AWS::S3::Object",
 *             // Make sure to append a trailing '/' to your ARN if you want
 *             // to monitor all objects in a bucket.
 *             values: [important_bucket.apply(__arg0 => `${__arg0.arn}/`)],
 *         }],
 *         includeManagementEvents: true,
 *         readWriteType: "All",
 *     }],
 * });
 * ```
 */
export class Trail extends pulumi.CustomResource {
    /**
     * Get an existing Trail resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TrailState, opts?: pulumi.CustomResourceOptions): Trail {
        return new Trail(name, <any>state, { ...opts, id: id });
    }

    /**
     * The Amazon Resource Name of the trail.
     */
    public /*out*/ readonly arn: pulumi.Output<string>;
    /**
     * Specifies a log group name using an Amazon Resource Name (ARN),
     * that represents the log group to which CloudTrail logs will be delivered.
     */
    public readonly cloudWatchLogsGroupArn: pulumi.Output<string | undefined>;
    /**
     * Specifies the role for the CloudWatch Logs
     * endpoint to assume to write to a user’s log group.
     */
    public readonly cloudWatchLogsRoleArn: pulumi.Output<string | undefined>;
    /**
     * Specifies whether log file integrity validation is enabled.
     * Defaults to `false`.
     */
    public readonly enableLogFileValidation: pulumi.Output<boolean | undefined>;
    /**
     * Enables logging for the trail. Defaults to `true`.
     * Setting this to `false` will pause logging.
     */
    public readonly enableLogging: pulumi.Output<boolean | undefined>;
    /**
     * Specifies an event selector for enabling data event logging. Fields documented below. Please note the [CloudTrail limits](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/WhatIsCloudTrail-Limits.html) when configuring these.
     */
    public readonly eventSelectors: pulumi.Output<{ dataResources?: { type: string, values: string[] }[], includeManagementEvents?: boolean, readWriteType?: string }[] | undefined>;
    /**
     * The region in which the trail was created.
     */
    public /*out*/ readonly homeRegion: pulumi.Output<string>;
    /**
     * Specifies whether the trail is publishing events
     * from global services such as IAM to the log files. Defaults to `true`.
     */
    public readonly includeGlobalServiceEvents: pulumi.Output<boolean | undefined>;
    /**
     * Specifies whether the trail is created in the current
     * region or in all regions. Defaults to `false`.
     */
    public readonly isMultiRegionTrail: pulumi.Output<boolean | undefined>;
    /**
     * Specifies whether the trail is an AWS Organizations trail. Organization trails log events for the master account and all member accounts. Can only be created in the organization master account. Defaults to `false`.
     */
    public readonly isOrganizationTrail: pulumi.Output<boolean | undefined>;
    /**
     * Specifies the KMS key ARN to use to encrypt the logs delivered by CloudTrail.
     */
    public readonly kmsKeyId: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the trail.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * Specifies the name of the S3 bucket designated for publishing log files.
     */
    public readonly s3BucketName: pulumi.Output<string>;
    /**
     * Specifies the S3 key prefix that precedes
     * the name of the bucket you have designated for log file delivery.
     */
    public readonly s3KeyPrefix: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the Amazon SNS topic
     * defined for notification of log file delivery.
     */
    public readonly snsTopicName: pulumi.Output<string | undefined>;
    /**
     * A mapping of tags to assign to the trail
     */
    public readonly tags: pulumi.Output<{[key: string]: any} | undefined>;

    /**
     * Create a Trail resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TrailArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TrailArgs | TrailState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: TrailState = argsOrState as TrailState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["cloudWatchLogsGroupArn"] = state ? state.cloudWatchLogsGroupArn : undefined;
            inputs["cloudWatchLogsRoleArn"] = state ? state.cloudWatchLogsRoleArn : undefined;
            inputs["enableLogFileValidation"] = state ? state.enableLogFileValidation : undefined;
            inputs["enableLogging"] = state ? state.enableLogging : undefined;
            inputs["eventSelectors"] = state ? state.eventSelectors : undefined;
            inputs["homeRegion"] = state ? state.homeRegion : undefined;
            inputs["includeGlobalServiceEvents"] = state ? state.includeGlobalServiceEvents : undefined;
            inputs["isMultiRegionTrail"] = state ? state.isMultiRegionTrail : undefined;
            inputs["isOrganizationTrail"] = state ? state.isOrganizationTrail : undefined;
            inputs["kmsKeyId"] = state ? state.kmsKeyId : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["s3BucketName"] = state ? state.s3BucketName : undefined;
            inputs["s3KeyPrefix"] = state ? state.s3KeyPrefix : undefined;
            inputs["snsTopicName"] = state ? state.snsTopicName : undefined;
            inputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as TrailArgs | undefined;
            if (!args || args.s3BucketName === undefined) {
                throw new Error("Missing required property 's3BucketName'");
            }
            inputs["cloudWatchLogsGroupArn"] = args ? args.cloudWatchLogsGroupArn : undefined;
            inputs["cloudWatchLogsRoleArn"] = args ? args.cloudWatchLogsRoleArn : undefined;
            inputs["enableLogFileValidation"] = args ? args.enableLogFileValidation : undefined;
            inputs["enableLogging"] = args ? args.enableLogging : undefined;
            inputs["eventSelectors"] = args ? args.eventSelectors : undefined;
            inputs["includeGlobalServiceEvents"] = args ? args.includeGlobalServiceEvents : undefined;
            inputs["isMultiRegionTrail"] = args ? args.isMultiRegionTrail : undefined;
            inputs["isOrganizationTrail"] = args ? args.isOrganizationTrail : undefined;
            inputs["kmsKeyId"] = args ? args.kmsKeyId : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["s3BucketName"] = args ? args.s3BucketName : undefined;
            inputs["s3KeyPrefix"] = args ? args.s3KeyPrefix : undefined;
            inputs["snsTopicName"] = args ? args.snsTopicName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["homeRegion"] = undefined /*out*/;
        }
        super("aws:cloudtrail/trail:Trail", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Trail resources.
 */
export interface TrailState {
    /**
     * The Amazon Resource Name of the trail.
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * Specifies a log group name using an Amazon Resource Name (ARN),
     * that represents the log group to which CloudTrail logs will be delivered.
     */
    readonly cloudWatchLogsGroupArn?: pulumi.Input<string>;
    /**
     * Specifies the role for the CloudWatch Logs
     * endpoint to assume to write to a user’s log group.
     */
    readonly cloudWatchLogsRoleArn?: pulumi.Input<string>;
    /**
     * Specifies whether log file integrity validation is enabled.
     * Defaults to `false`.
     */
    readonly enableLogFileValidation?: pulumi.Input<boolean>;
    /**
     * Enables logging for the trail. Defaults to `true`.
     * Setting this to `false` will pause logging.
     */
    readonly enableLogging?: pulumi.Input<boolean>;
    /**
     * Specifies an event selector for enabling data event logging. Fields documented below. Please note the [CloudTrail limits](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/WhatIsCloudTrail-Limits.html) when configuring these.
     */
    readonly eventSelectors?: pulumi.Input<pulumi.Input<{ dataResources?: pulumi.Input<pulumi.Input<{ type: pulumi.Input<string>, values: pulumi.Input<pulumi.Input<string>[]> }>[]>, includeManagementEvents?: pulumi.Input<boolean>, readWriteType?: pulumi.Input<string> }>[]>;
    /**
     * The region in which the trail was created.
     */
    readonly homeRegion?: pulumi.Input<string>;
    /**
     * Specifies whether the trail is publishing events
     * from global services such as IAM to the log files. Defaults to `true`.
     */
    readonly includeGlobalServiceEvents?: pulumi.Input<boolean>;
    /**
     * Specifies whether the trail is created in the current
     * region or in all regions. Defaults to `false`.
     */
    readonly isMultiRegionTrail?: pulumi.Input<boolean>;
    /**
     * Specifies whether the trail is an AWS Organizations trail. Organization trails log events for the master account and all member accounts. Can only be created in the organization master account. Defaults to `false`.
     */
    readonly isOrganizationTrail?: pulumi.Input<boolean>;
    /**
     * Specifies the KMS key ARN to use to encrypt the logs delivered by CloudTrail.
     */
    readonly kmsKeyId?: pulumi.Input<string>;
    /**
     * Specifies the name of the trail.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specifies the name of the S3 bucket designated for publishing log files.
     */
    readonly s3BucketName?: pulumi.Input<string>;
    /**
     * Specifies the S3 key prefix that precedes
     * the name of the bucket you have designated for log file delivery.
     */
    readonly s3KeyPrefix?: pulumi.Input<string>;
    /**
     * Specifies the name of the Amazon SNS topic
     * defined for notification of log file delivery.
     */
    readonly snsTopicName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the trail
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}

/**
 * The set of arguments for constructing a Trail resource.
 */
export interface TrailArgs {
    /**
     * Specifies a log group name using an Amazon Resource Name (ARN),
     * that represents the log group to which CloudTrail logs will be delivered.
     */
    readonly cloudWatchLogsGroupArn?: pulumi.Input<string>;
    /**
     * Specifies the role for the CloudWatch Logs
     * endpoint to assume to write to a user’s log group.
     */
    readonly cloudWatchLogsRoleArn?: pulumi.Input<string>;
    /**
     * Specifies whether log file integrity validation is enabled.
     * Defaults to `false`.
     */
    readonly enableLogFileValidation?: pulumi.Input<boolean>;
    /**
     * Enables logging for the trail. Defaults to `true`.
     * Setting this to `false` will pause logging.
     */
    readonly enableLogging?: pulumi.Input<boolean>;
    /**
     * Specifies an event selector for enabling data event logging. Fields documented below. Please note the [CloudTrail limits](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/WhatIsCloudTrail-Limits.html) when configuring these.
     */
    readonly eventSelectors?: pulumi.Input<pulumi.Input<{ dataResources?: pulumi.Input<pulumi.Input<{ type: pulumi.Input<string>, values: pulumi.Input<pulumi.Input<string>[]> }>[]>, includeManagementEvents?: pulumi.Input<boolean>, readWriteType?: pulumi.Input<string> }>[]>;
    /**
     * Specifies whether the trail is publishing events
     * from global services such as IAM to the log files. Defaults to `true`.
     */
    readonly includeGlobalServiceEvents?: pulumi.Input<boolean>;
    /**
     * Specifies whether the trail is created in the current
     * region or in all regions. Defaults to `false`.
     */
    readonly isMultiRegionTrail?: pulumi.Input<boolean>;
    /**
     * Specifies whether the trail is an AWS Organizations trail. Organization trails log events for the master account and all member accounts. Can only be created in the organization master account. Defaults to `false`.
     */
    readonly isOrganizationTrail?: pulumi.Input<boolean>;
    /**
     * Specifies the KMS key ARN to use to encrypt the logs delivered by CloudTrail.
     */
    readonly kmsKeyId?: pulumi.Input<string>;
    /**
     * Specifies the name of the trail.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Specifies the name of the S3 bucket designated for publishing log files.
     */
    readonly s3BucketName: pulumi.Input<string>;
    /**
     * Specifies the S3 key prefix that precedes
     * the name of the bucket you have designated for log file delivery.
     */
    readonly s3KeyPrefix?: pulumi.Input<string>;
    /**
     * Specifies the name of the Amazon SNS topic
     * defined for notification of log file delivery.
     */
    readonly snsTopicName?: pulumi.Input<string>;
    /**
     * A mapping of tags to assign to the trail
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}
