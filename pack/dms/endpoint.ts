// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class Endpoint extends fabric.Resource {
    public readonly certificateArn: fabric.Computed<string>;
    public readonly databaseName?: fabric.Computed<string>;
    public /*out*/ readonly endpointArn: fabric.Computed<string>;
    public readonly endpointId: fabric.Computed<string>;
    public readonly endpointType: fabric.Computed<string>;
    public readonly engineName: fabric.Computed<string>;
    public readonly extraConnectionAttributes: fabric.Computed<string>;
    public readonly kmsKeyArn: fabric.Computed<string>;
    public readonly password?: fabric.Computed<string>;
    public readonly port?: fabric.Computed<number>;
    public readonly serverName?: fabric.Computed<string>;
    public readonly serviceAccessRole?: fabric.Computed<string>;
    public readonly sslMode: fabric.Computed<string>;
    public readonly tags?: fabric.Computed<{[key: string]: any}>;
    public readonly username?: fabric.Computed<string>;

    constructor(urnName: string, args: EndpointArgs) {
        if (args.endpointId === undefined) {
            throw new Error("Missing required property 'endpointId'");
        }
        if (args.endpointType === undefined) {
            throw new Error("Missing required property 'endpointType'");
        }
        if (args.engineName === undefined) {
            throw new Error("Missing required property 'engineName'");
        }
        super("aws:dms/endpoint:Endpoint", urnName, {
            "certificateArn": args.certificateArn,
            "databaseName": args.databaseName,
            "endpointId": args.endpointId,
            "endpointType": args.endpointType,
            "engineName": args.engineName,
            "extraConnectionAttributes": args.extraConnectionAttributes,
            "kmsKeyArn": args.kmsKeyArn,
            "password": args.password,
            "port": args.port,
            "serverName": args.serverName,
            "serviceAccessRole": args.serviceAccessRole,
            "sslMode": args.sslMode,
            "tags": args.tags,
            "username": args.username,
            "endpointArn": undefined,
        });
    }
}

export interface EndpointArgs {
    readonly certificateArn?: fabric.MaybeComputed<string>;
    readonly databaseName?: fabric.MaybeComputed<string>;
    readonly endpointId: fabric.MaybeComputed<string>;
    readonly endpointType: fabric.MaybeComputed<string>;
    readonly engineName: fabric.MaybeComputed<string>;
    readonly extraConnectionAttributes?: fabric.MaybeComputed<string>;
    readonly kmsKeyArn?: fabric.MaybeComputed<string>;
    readonly password?: fabric.MaybeComputed<string>;
    readonly port?: fabric.MaybeComputed<number>;
    readonly serverName?: fabric.MaybeComputed<string>;
    readonly serviceAccessRole?: fabric.MaybeComputed<string>;
    readonly sslMode?: fabric.MaybeComputed<string>;
    readonly tags?: fabric.MaybeComputed<{[key: string]: any}>;
    readonly username?: fabric.MaybeComputed<string>;
}

