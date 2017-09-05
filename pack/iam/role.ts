// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

import {ARN} from "../index";

export class Role extends fabric.Resource {
    public /*out*/ readonly arn: fabric.Computed<string>;
    public readonly assumeRolePolicy: fabric.Computed<string>;
    public /*out*/ readonly createDate: fabric.Computed<string>;
    public readonly description?: fabric.Computed<string>;
    public readonly forceDetachPolicies?: fabric.Computed<boolean>;
    public readonly name: fabric.Computed<string>;
    public readonly namePrefix?: fabric.Computed<string>;
    public readonly path?: fabric.Computed<string>;
    public /*out*/ readonly uniqueId: fabric.Computed<string>;

    constructor(urnName: string, args: RoleArgs) {
        if (args.assumeRolePolicy === undefined) {
            throw new Error("Missing required property 'assumeRolePolicy'");
        }
        super("aws:iam/role:Role", urnName, {
            "assumeRolePolicy": args.assumeRolePolicy,
            "description": args.description,
            "forceDetachPolicies": args.forceDetachPolicies,
            "name": args.name,
            "namePrefix": args.namePrefix,
            "path": args.path,
            "arn": undefined,
            "createDate": undefined,
            "uniqueId": undefined,
        });
    }
}

export interface RoleArgs {
    readonly assumeRolePolicy: fabric.MaybeComputed<string>;
    readonly description?: fabric.MaybeComputed<string>;
    readonly forceDetachPolicies?: fabric.MaybeComputed<boolean>;
    readonly name?: fabric.MaybeComputed<string>;
    readonly namePrefix?: fabric.MaybeComputed<string>;
    readonly path?: fabric.MaybeComputed<string>;
}

