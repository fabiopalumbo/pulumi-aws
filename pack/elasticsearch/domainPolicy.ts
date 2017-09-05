// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class DomainPolicy extends fabric.Resource {
    public readonly accessPolicies: fabric.Computed<string>;
    public readonly domainName: fabric.Computed<string>;

    constructor(urnName: string, args: DomainPolicyArgs) {
        if (args.accessPolicies === undefined) {
            throw new Error("Missing required property 'accessPolicies'");
        }
        if (args.domainName === undefined) {
            throw new Error("Missing required property 'domainName'");
        }
        super("aws:elasticsearch/domainPolicy:DomainPolicy", urnName, {
            "accessPolicies": args.accessPolicies,
            "domainName": args.domainName,
        });
    }
}

export interface DomainPolicyArgs {
    readonly accessPolicies: fabric.MaybeComputed<string>;
    readonly domainName: fabric.MaybeComputed<string>;
}

