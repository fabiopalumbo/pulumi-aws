// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/s3_bucket_notification.html.markdown.
 */
export class BucketNotification extends pulumi.CustomResource {
    /**
     * Get an existing BucketNotification resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BucketNotificationState, opts?: pulumi.CustomResourceOptions): BucketNotification {
        return new BucketNotification(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:s3/bucketNotification:BucketNotification';

    /**
     * Returns true if the given object is an instance of BucketNotification.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BucketNotification {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BucketNotification.__pulumiType;
    }

    /**
     * The name of the bucket to put notification configuration.
     */
    public readonly bucket!: pulumi.Output<string>;
    /**
     * Used to configure notifications to a Lambda Function (documented below).
     */
    public readonly lambdaFunctions!: pulumi.Output<{ events: string[], filterPrefix?: string, filterSuffix?: string, id: string, lambdaFunctionArn?: string }[] | undefined>;
    /**
     * The notification configuration to SQS Queue (documented below).
     */
    public readonly queues!: pulumi.Output<{ events: string[], filterPrefix?: string, filterSuffix?: string, id: string, queueArn: string }[] | undefined>;
    /**
     * The notification configuration to SNS Topic (documented below).
     */
    public readonly topics!: pulumi.Output<{ events: string[], filterPrefix?: string, filterSuffix?: string, id: string, topicArn: string }[] | undefined>;

    /**
     * Create a BucketNotification resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BucketNotificationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BucketNotificationArgs | BucketNotificationState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as BucketNotificationState | undefined;
            inputs["bucket"] = state ? state.bucket : undefined;
            inputs["lambdaFunctions"] = state ? state.lambdaFunctions : undefined;
            inputs["queues"] = state ? state.queues : undefined;
            inputs["topics"] = state ? state.topics : undefined;
        } else {
            const args = argsOrState as BucketNotificationArgs | undefined;
            if (!args || args.bucket === undefined) {
                throw new Error("Missing required property 'bucket'");
            }
            inputs["bucket"] = args ? args.bucket : undefined;
            inputs["lambdaFunctions"] = args ? args.lambdaFunctions : undefined;
            inputs["queues"] = args ? args.queues : undefined;
            inputs["topics"] = args ? args.topics : undefined;
        }
        super(BucketNotification.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering BucketNotification resources.
 */
export interface BucketNotificationState {
    /**
     * The name of the bucket to put notification configuration.
     */
    readonly bucket?: pulumi.Input<string>;
    /**
     * Used to configure notifications to a Lambda Function (documented below).
     */
    readonly lambdaFunctions?: pulumi.Input<pulumi.Input<{ events: pulumi.Input<pulumi.Input<string>[]>, filterPrefix?: pulumi.Input<string>, filterSuffix?: pulumi.Input<string>, id?: pulumi.Input<string>, lambdaFunctionArn?: pulumi.Input<string> }>[]>;
    /**
     * The notification configuration to SQS Queue (documented below).
     */
    readonly queues?: pulumi.Input<pulumi.Input<{ events: pulumi.Input<pulumi.Input<string>[]>, filterPrefix?: pulumi.Input<string>, filterSuffix?: pulumi.Input<string>, id?: pulumi.Input<string>, queueArn: pulumi.Input<string> }>[]>;
    /**
     * The notification configuration to SNS Topic (documented below).
     */
    readonly topics?: pulumi.Input<pulumi.Input<{ events: pulumi.Input<pulumi.Input<string>[]>, filterPrefix?: pulumi.Input<string>, filterSuffix?: pulumi.Input<string>, id?: pulumi.Input<string>, topicArn: pulumi.Input<string> }>[]>;
}

/**
 * The set of arguments for constructing a BucketNotification resource.
 */
export interface BucketNotificationArgs {
    /**
     * The name of the bucket to put notification configuration.
     */
    readonly bucket: pulumi.Input<string>;
    /**
     * Used to configure notifications to a Lambda Function (documented below).
     */
    readonly lambdaFunctions?: pulumi.Input<pulumi.Input<{ events: pulumi.Input<pulumi.Input<string>[]>, filterPrefix?: pulumi.Input<string>, filterSuffix?: pulumi.Input<string>, id?: pulumi.Input<string>, lambdaFunctionArn?: pulumi.Input<string> }>[]>;
    /**
     * The notification configuration to SQS Queue (documented below).
     */
    readonly queues?: pulumi.Input<pulumi.Input<{ events: pulumi.Input<pulumi.Input<string>[]>, filterPrefix?: pulumi.Input<string>, filterSuffix?: pulumi.Input<string>, id?: pulumi.Input<string>, queueArn: pulumi.Input<string> }>[]>;
    /**
     * The notification configuration to SNS Topic (documented below).
     */
    readonly topics?: pulumi.Input<pulumi.Input<{ events: pulumi.Input<pulumi.Input<string>[]>, filterPrefix?: pulumi.Input<string>, filterSuffix?: pulumi.Input<string>, id?: pulumi.Input<string>, topicArn: pulumi.Input<string> }>[]>;
}
