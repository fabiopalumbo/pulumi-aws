// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Provides a resource to manage AWS Secrets Manager secret version including its secret value. To manage secret metadata, see the `aws.secretsmanager.Secret` resource.
 *
 * > **NOTE:** If the `AWSCURRENT` staging label is present on this version during resource deletion, that label cannot be removed and will be skipped to prevent errors when fully deleting the secret. That label will leave this secret version active even after the resource is deleted from this provider unless the secret itself is deleted. Move the `AWSCURRENT` staging label before or after deleting this resource from this provider to fully trigger version deprecation if necessary.
 *
 * ## Example Usage
 *
 * ### Simple String Value
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const example = new aws.secretsmanager.SecretVersion("example", {
 *     secretId: aws_secretsmanager_secret_example.id,
 *     secretString: "example-string-to-protect",
 * });
 * ```
 *
 * ### Key-Value Pairs
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const config = new pulumi.Config();
 * // The map here can come from other supported configurations
 * // like locals, resource attribute, map() built-in, etc.
 * const example = config.get("example") || {
 *     key1: "value1",
 *     key2: "value2",
 * };
 *
 * const exampleSecretVersion = new aws.secretsmanager.SecretVersion("example", {
 *     secretId: aws_secretsmanager_secret_example.id,
 *     secretString: (() => {
 *         throw "tf2pulumi error: NYI: call to jsonencode";
 *         return (() => { throw "NYI: call to jsonencode"; })();
 *     })(),
 * });
 * ```
 */
export class SecretVersion extends pulumi.CustomResource {
    /**
     * Get an existing SecretVersion resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecretVersionState, opts?: pulumi.CustomResourceOptions): SecretVersion {
        return new SecretVersion(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:secretsmanager/secretVersion:SecretVersion';

    /**
     * Returns true if the given object is an instance of SecretVersion.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SecretVersion {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SecretVersion.__pulumiType;
    }

    /**
     * The ARN of the secret.
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * Specifies binary data that you want to encrypt and store in this version of the secret. This is required if secretString is not set. Needs to be encoded to base64.
     */
    public readonly secretBinary!: pulumi.Output<string | undefined>;
    /**
     * Specifies the secret to which you want to add a new version. You can specify either the Amazon Resource Name (ARN) or the friendly name of the secret. The secret must already exist.
     */
    public readonly secretId!: pulumi.Output<string>;
    /**
     * Specifies text data that you want to encrypt and store in this version of the secret. This is required if secretBinary is not set.
     */
    public readonly secretString!: pulumi.Output<string | undefined>;
    /**
     * The unique identifier of the version of the secret.
     */
    public /*out*/ readonly versionId!: pulumi.Output<string>;
    /**
     * Specifies a list of staging labels that are attached to this version of the secret. A staging label must be unique to a single version of the secret. If you specify a staging label that's already associated with a different version of the same secret then that staging label is automatically removed from the other version and attached to this version. If you do not specify a value, then AWS Secrets Manager automatically moves the staging label `AWSCURRENT` to this new version on creation.
     */
    public readonly versionStages!: pulumi.Output<string[]>;

    /**
     * Create a SecretVersion resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecretVersionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SecretVersionArgs | SecretVersionState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as SecretVersionState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["secretBinary"] = state ? state.secretBinary : undefined;
            inputs["secretId"] = state ? state.secretId : undefined;
            inputs["secretString"] = state ? state.secretString : undefined;
            inputs["versionId"] = state ? state.versionId : undefined;
            inputs["versionStages"] = state ? state.versionStages : undefined;
        } else {
            const args = argsOrState as SecretVersionArgs | undefined;
            if (!args || args.secretId === undefined) {
                throw new Error("Missing required property 'secretId'");
            }
            inputs["secretBinary"] = args ? args.secretBinary : undefined;
            inputs["secretId"] = args ? args.secretId : undefined;
            inputs["secretString"] = args ? args.secretString : undefined;
            inputs["versionStages"] = args ? args.versionStages : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["versionId"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(SecretVersion.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering SecretVersion resources.
 */
export interface SecretVersionState {
    /**
     * The ARN of the secret.
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * Specifies binary data that you want to encrypt and store in this version of the secret. This is required if secretString is not set. Needs to be encoded to base64.
     */
    readonly secretBinary?: pulumi.Input<string>;
    /**
     * Specifies the secret to which you want to add a new version. You can specify either the Amazon Resource Name (ARN) or the friendly name of the secret. The secret must already exist.
     */
    readonly secretId?: pulumi.Input<string>;
    /**
     * Specifies text data that you want to encrypt and store in this version of the secret. This is required if secretBinary is not set.
     */
    readonly secretString?: pulumi.Input<string>;
    /**
     * The unique identifier of the version of the secret.
     */
    readonly versionId?: pulumi.Input<string>;
    /**
     * Specifies a list of staging labels that are attached to this version of the secret. A staging label must be unique to a single version of the secret. If you specify a staging label that's already associated with a different version of the same secret then that staging label is automatically removed from the other version and attached to this version. If you do not specify a value, then AWS Secrets Manager automatically moves the staging label `AWSCURRENT` to this new version on creation.
     */
    readonly versionStages?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a SecretVersion resource.
 */
export interface SecretVersionArgs {
    /**
     * Specifies binary data that you want to encrypt and store in this version of the secret. This is required if secretString is not set. Needs to be encoded to base64.
     */
    readonly secretBinary?: pulumi.Input<string>;
    /**
     * Specifies the secret to which you want to add a new version. You can specify either the Amazon Resource Name (ARN) or the friendly name of the secret. The secret must already exist.
     */
    readonly secretId: pulumi.Input<string>;
    /**
     * Specifies text data that you want to encrypt and store in this version of the secret. This is required if secretBinary is not set.
     */
    readonly secretString?: pulumi.Input<string>;
    /**
     * Specifies a list of staging labels that are attached to this version of the secret. A staging label must be unique to a single version of the secret. If you specify a staging label that's already associated with a different version of the same secret then that staging label is automatically removed from the other version and attached to this version. If you do not specify a value, then AWS Secrets Manager automatically moves the staging label `AWSCURRENT` to this new version on creation.
     */
    readonly versionStages?: pulumi.Input<pulumi.Input<string>[]>;
}
