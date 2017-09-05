// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class Record extends fabric.Resource {
    public readonly alias?: fabric.Computed<{ evaluateTargetHealth: boolean, name: string, zoneId: string }[]>;
    public readonly failoverRoutingPolicy?: fabric.Computed<{ type: string }[]>;
    public /*out*/ readonly fqdn: fabric.Computed<string>;
    public readonly geolocationRoutingPolicy?: fabric.Computed<{ continent?: string, country?: string, subdivision?: string }[]>;
    public readonly healthCheckId?: fabric.Computed<string>;
    public readonly latencyRoutingPolicy?: fabric.Computed<{ region: string }[]>;
    public readonly name: fabric.Computed<string>;
    public readonly records?: fabric.Computed<string[]>;
    public readonly setIdentifier?: fabric.Computed<string>;
    public readonly ttl?: fabric.Computed<number>;
    public readonly type: fabric.Computed<string>;
    public readonly weightedRoutingPolicy?: fabric.Computed<{ weight: number }[]>;
    public readonly zoneId: fabric.Computed<string>;

    constructor(urnName: string, args: RecordArgs) {
        if (args.type === undefined) {
            throw new Error("Missing required property 'type'");
        }
        if (args.zoneId === undefined) {
            throw new Error("Missing required property 'zoneId'");
        }
        super("aws:route53/record:Record", urnName, {
            "alias": args.alias,
            "failoverRoutingPolicy": args.failoverRoutingPolicy,
            "geolocationRoutingPolicy": args.geolocationRoutingPolicy,
            "healthCheckId": args.healthCheckId,
            "latencyRoutingPolicy": args.latencyRoutingPolicy,
            "name": args.name,
            "records": args.records,
            "setIdentifier": args.setIdentifier,
            "ttl": args.ttl,
            "type": args.type,
            "weightedRoutingPolicy": args.weightedRoutingPolicy,
            "zoneId": args.zoneId,
            "fqdn": undefined,
        });
    }
}

export interface RecordArgs {
    readonly alias?: fabric.MaybeComputed<{ evaluateTargetHealth: fabric.MaybeComputed<boolean>, name: fabric.MaybeComputed<string>, zoneId: fabric.MaybeComputed<string> }>[];
    readonly failoverRoutingPolicy?: fabric.MaybeComputed<{ type: fabric.MaybeComputed<string> }>[];
    readonly geolocationRoutingPolicy?: fabric.MaybeComputed<{ continent?: fabric.MaybeComputed<string>, country?: fabric.MaybeComputed<string>, subdivision?: fabric.MaybeComputed<string> }>[];
    readonly healthCheckId?: fabric.MaybeComputed<string>;
    readonly latencyRoutingPolicy?: fabric.MaybeComputed<{ region: fabric.MaybeComputed<string> }>[];
    readonly name?: fabric.MaybeComputed<string>;
    readonly records?: fabric.MaybeComputed<fabric.MaybeComputed<string>>[];
    readonly setIdentifier?: fabric.MaybeComputed<string>;
    readonly ttl?: fabric.MaybeComputed<number>;
    readonly type: fabric.MaybeComputed<string>;
    readonly weightedRoutingPolicy?: fabric.MaybeComputed<{ weight: fabric.MaybeComputed<number> }>[];
    readonly zoneId: fabric.MaybeComputed<string>;
}

