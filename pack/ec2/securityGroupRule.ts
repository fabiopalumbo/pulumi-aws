// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class SecurityGroupRule extends fabric.Resource {
    public readonly cidrBlocks?: fabric.Computed<string[]>;
    public readonly fromPort: fabric.Computed<number>;
    public readonly ipv6CidrBlocks?: fabric.Computed<string[]>;
    public readonly prefixListIds?: fabric.Computed<string[]>;
    public readonly protocol: fabric.Computed<string>;
    public readonly securityGroupId: fabric.Computed<string>;
    public readonly self?: fabric.Computed<boolean>;
    public readonly sourceSecurityGroupId: fabric.Computed<string>;
    public readonly toPort: fabric.Computed<number>;
    public readonly type: fabric.Computed<string>;

    constructor(urnName: string, args: SecurityGroupRuleArgs) {
        if (args.fromPort === undefined) {
            throw new Error("Missing required property 'fromPort'");
        }
        if (args.protocol === undefined) {
            throw new Error("Missing required property 'protocol'");
        }
        if (args.securityGroupId === undefined) {
            throw new Error("Missing required property 'securityGroupId'");
        }
        if (args.toPort === undefined) {
            throw new Error("Missing required property 'toPort'");
        }
        if (args.type === undefined) {
            throw new Error("Missing required property 'type'");
        }
        super("aws:ec2/securityGroupRule:SecurityGroupRule", urnName, {
            "cidrBlocks": args.cidrBlocks,
            "fromPort": args.fromPort,
            "ipv6CidrBlocks": args.ipv6CidrBlocks,
            "prefixListIds": args.prefixListIds,
            "protocol": args.protocol,
            "securityGroupId": args.securityGroupId,
            "self": args.self,
            "sourceSecurityGroupId": args.sourceSecurityGroupId,
            "toPort": args.toPort,
            "type": args.type,
        });
    }
}

export interface SecurityGroupRuleArgs {
    readonly cidrBlocks?: fabric.MaybeComputed<fabric.MaybeComputed<string>>[];
    readonly fromPort: fabric.MaybeComputed<number>;
    readonly ipv6CidrBlocks?: fabric.MaybeComputed<fabric.MaybeComputed<string>>[];
    readonly prefixListIds?: fabric.MaybeComputed<fabric.MaybeComputed<string>>[];
    readonly protocol: fabric.MaybeComputed<string>;
    readonly securityGroupId: fabric.MaybeComputed<string>;
    readonly self?: fabric.MaybeComputed<boolean>;
    readonly sourceSecurityGroupId?: fabric.MaybeComputed<string>;
    readonly toPort: fabric.MaybeComputed<number>;
    // Type of rule, ingress (inbound) or egress (outbound).
    readonly type: fabric.MaybeComputed<string>;
}

