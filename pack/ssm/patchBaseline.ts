// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class PatchBaseline extends fabric.Resource {
    public readonly approvalRule?: fabric.Computed<{ approveAfterDays: number, patchFilter: { key: string, values: string[] }[] }[]>;
    public readonly approvedPatches?: fabric.Computed<string[]>;
    public readonly description?: fabric.Computed<string>;
    public readonly globalFilter?: fabric.Computed<{ key: string, values: string[] }[]>;
    public readonly name: fabric.Computed<string>;
    public readonly rejectedPatches?: fabric.Computed<string[]>;

    constructor(urnName: string, args: PatchBaselineArgs) {
        super("aws:ssm/patchBaseline:PatchBaseline", urnName, {
            "approvalRule": args.approvalRule,
            "approvedPatches": args.approvedPatches,
            "description": args.description,
            "globalFilter": args.globalFilter,
            "name": args.name,
            "rejectedPatches": args.rejectedPatches,
        });
    }
}

export interface PatchBaselineArgs {
    readonly approvalRule?: fabric.MaybeComputed<{ approveAfterDays: fabric.MaybeComputed<number>, patchFilter: fabric.MaybeComputed<{ key: fabric.MaybeComputed<string>, values: fabric.MaybeComputed<fabric.MaybeComputed<string>>[] }>[] }>[];
    readonly approvedPatches?: fabric.MaybeComputed<fabric.MaybeComputed<string>>[];
    readonly description?: fabric.MaybeComputed<string>;
    readonly globalFilter?: fabric.MaybeComputed<{ key: fabric.MaybeComputed<string>, values: fabric.MaybeComputed<fabric.MaybeComputed<string>>[] }>[];
    readonly name?: fabric.MaybeComputed<string>;
    readonly rejectedPatches?: fabric.MaybeComputed<fabric.MaybeComputed<string>>[];
}

