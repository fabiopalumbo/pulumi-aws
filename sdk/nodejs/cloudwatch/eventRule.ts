// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Provides a CloudWatch Event Rule resource.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const console = new aws.cloudwatch.EventRule("console", {
 *     description: "Capture each AWS Console Sign In",
 *     eventPattern: `{
 *   "detail-type": [
 *     "AWS Console Sign In via CloudTrail"
 *   ]
 * }
 * `,
 *     name: "capture-aws-sign-in",
 * });
 * const awsLogins = new aws.sns.Topic("aws_logins", {
 *     name: "aws-console-logins",
 * });
 * const sns = new aws.cloudwatch.EventTarget("sns", {
 *     arn: awsLogins.arn,
 *     rule: console.name,
 *     targetId: "SendToSNS",
 * });
 * const snsTopicPolicy = pulumi.output(aws.iam.getPolicyDocument({
 *     statements: [{
 *         actions: ["SNS:Publish"],
 *         effect: "Allow",
 *         principals: [{
 *             identifiers: ["events.amazonaws.com"],
 *             type: "Service",
 *         }],
 *         resources: [awsLogins.arn],
 *     }],
 * }));
 * const defaultTopicPolicy = new aws.sns.TopicPolicy("default", {
 *     arn: awsLogins.arn,
 *     policy: snsTopicPolicy.apply(__arg0 => __arg0.json),
 * });
 * ```
 */
export class EventRule extends pulumi.CustomResource {
    /**
     * Get an existing EventRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EventRuleState, opts?: pulumi.CustomResourceOptions): EventRule {
        return new EventRule(name, <any>state, { ...opts, id: id });
    }

    /**
     * The Amazon Resource Name (ARN) of the rule.
     */
    public /*out*/ readonly arn: pulumi.Output<string>;
    /**
     * The description of the rule.
     */
    public readonly description: pulumi.Output<string | undefined>;
    /**
     * Event pattern
     * described a JSON object.
     * See full documentation of [CloudWatch Events and Event Patterns](http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CloudWatchEventsandEventPatterns.html) for details.
     */
    public readonly eventPattern: pulumi.Output<string | undefined>;
    /**
     * Whether the rule should be enabled (defaults to `true`).
     */
    public readonly isEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The rule's name. By default generated by Terraform.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * The rule's name. Conflicts with `name`.
     */
    public readonly namePrefix: pulumi.Output<string | undefined>;
    /**
     * The Amazon Resource Name (ARN) associated with the role that is used for target invocation.
     */
    public readonly roleArn: pulumi.Output<string | undefined>;
    /**
     * The scheduling expression.
     * For example, `cron(0 20 * * ? *)` or `rate(5 minutes)`.
     */
    public readonly scheduleExpression: pulumi.Output<string | undefined>;

    /**
     * Create a EventRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: EventRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EventRuleArgs | EventRuleState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: EventRuleState = argsOrState as EventRuleState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["eventPattern"] = state ? state.eventPattern : undefined;
            inputs["isEnabled"] = state ? state.isEnabled : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["namePrefix"] = state ? state.namePrefix : undefined;
            inputs["roleArn"] = state ? state.roleArn : undefined;
            inputs["scheduleExpression"] = state ? state.scheduleExpression : undefined;
        } else {
            const args = argsOrState as EventRuleArgs | undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["eventPattern"] = args ? args.eventPattern : undefined;
            inputs["isEnabled"] = args ? args.isEnabled : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["namePrefix"] = args ? args.namePrefix : undefined;
            inputs["roleArn"] = args ? args.roleArn : undefined;
            inputs["scheduleExpression"] = args ? args.scheduleExpression : undefined;
            inputs["arn"] = undefined /*out*/;
        }
        super("aws:cloudwatch/eventRule:EventRule", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering EventRule resources.
 */
export interface EventRuleState {
    /**
     * The Amazon Resource Name (ARN) of the rule.
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * The description of the rule.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Event pattern
     * described a JSON object.
     * See full documentation of [CloudWatch Events and Event Patterns](http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CloudWatchEventsandEventPatterns.html) for details.
     */
    readonly eventPattern?: pulumi.Input<string>;
    /**
     * Whether the rule should be enabled (defaults to `true`).
     */
    readonly isEnabled?: pulumi.Input<boolean>;
    /**
     * The rule's name. By default generated by Terraform.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The rule's name. Conflicts with `name`.
     */
    readonly namePrefix?: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN) associated with the role that is used for target invocation.
     */
    readonly roleArn?: pulumi.Input<string>;
    /**
     * The scheduling expression.
     * For example, `cron(0 20 * * ? *)` or `rate(5 minutes)`.
     */
    readonly scheduleExpression?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a EventRule resource.
 */
export interface EventRuleArgs {
    /**
     * The description of the rule.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Event pattern
     * described a JSON object.
     * See full documentation of [CloudWatch Events and Event Patterns](http://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/CloudWatchEventsandEventPatterns.html) for details.
     */
    readonly eventPattern?: pulumi.Input<string>;
    /**
     * Whether the rule should be enabled (defaults to `true`).
     */
    readonly isEnabled?: pulumi.Input<boolean>;
    /**
     * The rule's name. By default generated by Terraform.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The rule's name. Conflicts with `name`.
     */
    readonly namePrefix?: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN) associated with the role that is used for target invocation.
     */
    readonly roleArn?: pulumi.Input<string>;
    /**
     * The scheduling expression.
     * For example, `cron(0 20 * * ? *)` or `rate(5 minutes)`.
     */
    readonly scheduleExpression?: pulumi.Input<string>;
}
