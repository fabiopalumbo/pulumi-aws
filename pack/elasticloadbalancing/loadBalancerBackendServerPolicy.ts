// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class LoadBalancerBackendServerPolicy extends fabric.Resource {
    public readonly instancePort: fabric.Computed<number>;
    public readonly loadBalancerName: fabric.Computed<string>;
    public readonly policyNames?: fabric.Computed<string[]>;

    constructor(urnName: string, args: LoadBalancerBackendServerPolicyArgs) {
        if (args.instancePort === undefined) {
            throw new Error("Missing required property 'instancePort'");
        }
        if (args.loadBalancerName === undefined) {
            throw new Error("Missing required property 'loadBalancerName'");
        }
        super("aws:elasticloadbalancing/loadBalancerBackendServerPolicy:LoadBalancerBackendServerPolicy", urnName, {
            "instancePort": args.instancePort,
            "loadBalancerName": args.loadBalancerName,
            "policyNames": args.policyNames,
        });
    }
}

export interface LoadBalancerBackendServerPolicyArgs {
    readonly instancePort: fabric.MaybeComputed<number>;
    readonly loadBalancerName: fabric.MaybeComputed<string>;
    readonly policyNames?: fabric.MaybeComputed<fabric.MaybeComputed<string>>[];
}

