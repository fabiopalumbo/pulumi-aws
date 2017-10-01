// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides an IAM policy.
 * 
 * ```hcl
 * resource "aws_iam_policy" "policy" {
 *   name        = "test_policy"
 *   path        = "/"
 *   description = "My test policy"
 * 
 *   policy = <<EOF
 * {
 *   "Version": "2012-10-17",
 *   "Statement": [
 *     {
 *       "Action": [
 *         "ec2:Describe*"
 *       ],
 *       "Effect": "Allow",
 *       "Resource": "*"
 *     }
 *   ]
 * }
 * EOF
 * }
 * ```
 */
export class Policy extends pulumi.Resource {
    /**
     * The ARN assigned by AWS to this policy.
     */
    public /*out*/ readonly arn: pulumi.Computed<string>;
    /**
     * Description of the IAM policy.
     */
    public readonly description?: pulumi.Computed<string>;
    /**
     * The name of the policy. If omitted, Terraform will assign a random, unique name.
     */
    public readonly name: pulumi.Computed<string>;
    /**
     * Creates a unique name beginning with the specified prefix. Conflicts with `name`.
     */
    public readonly namePrefix?: pulumi.Computed<string>;
    /**
     * Path in which to create the policy.
     * See [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) for more information.
     */
    public readonly path?: pulumi.Computed<string>;
    /**
     * The policy document. This is a JSON formatted string.
     * The heredoc syntax, `file` function, or the [`aws_iam_policy_document` data
     * source](/docs/providers/aws/d/iam_policy_document.html)
     * are all helpful here.
     */
    public readonly policy: pulumi.Computed<string>;

    /**
     * Create a Policy resource with the given unique name, arguments, and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this Policy instance
     * @param args A collection of arguments for creating this Policy instance
     * @param dependsOn A optional array of additional resources this instance depends on
     */
    constructor(urnName: string, args: PolicyArgs, dependsOn?: pulumi.Resource[]) {
        if (args.policy === undefined) {
            throw new Error("Missing required property 'policy'");
        }
        super("aws:iam/policy:Policy", urnName, {
            "description": args.description,
            "name": args.name,
            "namePrefix": args.namePrefix,
            "path": args.path,
            "policy": args.policy,
            "arn": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a Policy resource.
 */
export interface PolicyArgs {
    /**
     * Description of the IAM policy.
     */
    readonly description?: pulumi.ComputedValue<string>;
    /**
     * The name of the policy. If omitted, Terraform will assign a random, unique name.
     */
    readonly name?: pulumi.ComputedValue<string>;
    /**
     * Creates a unique name beginning with the specified prefix. Conflicts with `name`.
     */
    readonly namePrefix?: pulumi.ComputedValue<string>;
    /**
     * Path in which to create the policy.
     * See [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) for more information.
     */
    readonly path?: pulumi.ComputedValue<string>;
    /**
     * The policy document. This is a JSON formatted string.
     * The heredoc syntax, `file` function, or the [`aws_iam_policy_document` data
     * source](/docs/providers/aws/d/iam_policy_document.html)
     * are all helpful here.
     */
    readonly policy: pulumi.ComputedValue<string>;
}

