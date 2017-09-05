// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class ServerCertificate extends fabric.Resource {
    public readonly arn: fabric.Computed<string>;
    public readonly certificateBody: fabric.Computed<string>;
    public readonly certificateChain?: fabric.Computed<string>;
    public readonly name: fabric.Computed<string>;
    public readonly namePrefix?: fabric.Computed<string>;
    public readonly path?: fabric.Computed<string>;
    public readonly privateKey: fabric.Computed<string>;

    constructor(urnName: string, args: ServerCertificateArgs) {
        if (args.certificateBody === undefined) {
            throw new Error("Missing required property 'certificateBody'");
        }
        if (args.privateKey === undefined) {
            throw new Error("Missing required property 'privateKey'");
        }
        super("aws:iam/serverCertificate:ServerCertificate", urnName, {
            "arn": args.arn,
            "certificateBody": args.certificateBody,
            "certificateChain": args.certificateChain,
            "name": args.name,
            "namePrefix": args.namePrefix,
            "path": args.path,
            "privateKey": args.privateKey,
        });
    }
}

export interface ServerCertificateArgs {
    readonly arn?: fabric.MaybeComputed<string>;
    readonly certificateBody: fabric.MaybeComputed<string>;
    readonly certificateChain?: fabric.MaybeComputed<string>;
    readonly name?: fabric.MaybeComputed<string>;
    readonly namePrefix?: fabric.MaybeComputed<string>;
    readonly path?: fabric.MaybeComputed<string>;
    readonly privateKey: fabric.MaybeComputed<string>;
}

