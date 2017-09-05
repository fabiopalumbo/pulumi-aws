// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class RecorderStatus extends fabric.Resource {
    public readonly isEnabled: fabric.Computed<boolean>;
    public readonly name: fabric.Computed<string>;

    constructor(urnName: string, args: RecorderStatusArgs) {
        if (args.isEnabled === undefined) {
            throw new Error("Missing required property 'isEnabled'");
        }
        super("aws:cfg/recorderStatus:RecorderStatus", urnName, {
            "isEnabled": args.isEnabled,
            "name": args.name,
        });
    }
}

export interface RecorderStatusArgs {
    readonly isEnabled: fabric.MaybeComputed<boolean>;
    readonly name?: fabric.MaybeComputed<string>;
}

