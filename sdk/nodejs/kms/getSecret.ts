// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

export function getSecret(args: GetSecretArgs, opts?: pulumi.InvokeOptions): Promise<GetSecretResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("aws:kms/getSecret:getSecret", {
        "secrets": args.secrets,
    }, opts);
}

/**
 * A collection of arguments for invoking getSecret.
 */
export interface GetSecretArgs {
    readonly secrets: inputs.kms.GetSecretSecret[];
}

/**
 * A collection of values returned by getSecret.
 */
export interface GetSecretResult {
    readonly secrets: outputs.kms.GetSecretSecret[];
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
