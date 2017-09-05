// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class ParameterGroup extends fabric.Resource {
    public readonly description?: fabric.Computed<string>;
    public readonly family: fabric.Computed<string>;
    public readonly name: fabric.Computed<string>;
    public readonly parameter?: fabric.Computed<{ name: string, value: string }[]>;

    constructor(urnName: string, args: ParameterGroupArgs) {
        if (args.family === undefined) {
            throw new Error("Missing required property 'family'");
        }
        super("aws:elasticache/parameterGroup:ParameterGroup", urnName, {
            "description": args.description,
            "family": args.family,
            "name": args.name,
            "parameter": args.parameter,
        });
    }
}

export interface ParameterGroupArgs {
    readonly description?: fabric.MaybeComputed<string>;
    readonly family: fabric.MaybeComputed<string>;
    readonly name?: fabric.MaybeComputed<string>;
    readonly parameter?: fabric.MaybeComputed<{ name: fabric.MaybeComputed<string>, value: fabric.MaybeComputed<string> }>[];
}

