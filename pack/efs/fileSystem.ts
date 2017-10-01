// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides an Elastic File System (EFS) resource.
 */
export class FileSystem extends pulumi.Resource {
    /**
     * A unique name (a maximum of 64 characters are allowed)
     * used as reference when creating the Elastic File System to ensure idempotent file
     * system creation. By default generated by Terraform. See [Elastic File System]
     * (http://docs.aws.amazon.com/efs/latest/ug/) user guide for more information.
     */
    public readonly creationToken: pulumi.Computed<string>;
    /**
     * If true, the disk will be encrypted.
     */
    public readonly encrypted: pulumi.Computed<boolean>;
    /**
     * The ARN for the KMS encryption key. When specifying kms_key_id, encrypted needs to be set to true.
     */
    public readonly kmsKeyId: pulumi.Computed<string>;
    /**
     * The file system performance mode. Can be either
     * `"generalPurpose"` or `"maxIO"` (Default: `"generalPurpose"`).
     */
    public readonly performanceMode: pulumi.Computed<string>;
    /**
     * **DEPRECATED** (Optional) A reference name used when creating the
     * `Creation Token` which Amazon EFS uses to ensure idempotent file system creation. By
     * default generated by Terraform.
     */
    public readonly referenceName: pulumi.Computed<string>;
    /**
     * A mapping of tags to assign to the file system.
     */
    public readonly tags?: pulumi.Computed<{[key: string]: any}>;

    /**
     * Create a FileSystem resource with the given unique name, arguments, and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this FileSystem instance
     * @param args A collection of arguments for creating this FileSystem instance
     * @param dependsOn A optional array of additional resources this instance depends on
     */
    constructor(urnName: string, args?: FileSystemArgs, dependsOn?: pulumi.Resource[]) {
        args = args || {};
        super("aws:efs/fileSystem:FileSystem", urnName, {
            "creationToken": args.creationToken,
            "encrypted": args.encrypted,
            "kmsKeyId": args.kmsKeyId,
            "performanceMode": args.performanceMode,
            "referenceName": args.referenceName,
            "tags": args.tags,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a FileSystem resource.
 */
export interface FileSystemArgs {
    /**
     * A unique name (a maximum of 64 characters are allowed)
     * used as reference when creating the Elastic File System to ensure idempotent file
     * system creation. By default generated by Terraform. See [Elastic File System]
     * (http://docs.aws.amazon.com/efs/latest/ug/) user guide for more information.
     */
    readonly creationToken?: pulumi.ComputedValue<string>;
    /**
     * If true, the disk will be encrypted.
     */
    readonly encrypted?: pulumi.ComputedValue<boolean>;
    /**
     * The ARN for the KMS encryption key. When specifying kms_key_id, encrypted needs to be set to true.
     */
    readonly kmsKeyId?: pulumi.ComputedValue<string>;
    /**
     * The file system performance mode. Can be either
     * `"generalPurpose"` or `"maxIO"` (Default: `"generalPurpose"`).
     */
    readonly performanceMode?: pulumi.ComputedValue<string>;
    /**
     * **DEPRECATED** (Optional) A reference name used when creating the
     * `Creation Token` which Amazon EFS uses to ensure idempotent file system creation. By
     * default generated by Terraform.
     */
    readonly referenceName?: pulumi.ComputedValue<string>;
    /**
     * A mapping of tags to assign to the file system.
     */
    readonly tags?: pulumi.ComputedValue<{[key: string]: any}>;
}

