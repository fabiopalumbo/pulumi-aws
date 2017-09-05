// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class ClusterInstance extends fabric.Resource {
    public readonly applyImmediately: fabric.Computed<boolean>;
    public readonly autoMinorVersionUpgrade?: fabric.Computed<boolean>;
    public readonly clusterIdentifier: fabric.Computed<string>;
    public readonly dbParameterGroupName: fabric.Computed<string>;
    public readonly dbSubnetGroupName: fabric.Computed<string>;
    public /*out*/ readonly dbiResourceId: fabric.Computed<string>;
    public /*out*/ readonly endpoint: fabric.Computed<string>;
    public readonly identifier: fabric.Computed<string>;
    public readonly identifierPrefix: fabric.Computed<string>;
    public readonly instanceClass: fabric.Computed<string>;
    public /*out*/ readonly kmsKeyId: fabric.Computed<string>;
    public readonly monitoringInterval?: fabric.Computed<number>;
    public readonly monitoringRoleArn: fabric.Computed<string>;
    public /*out*/ readonly port: fabric.Computed<number>;
    public readonly preferredBackupWindow: fabric.Computed<string>;
    public readonly preferredMaintenanceWindow: fabric.Computed<string>;
    public readonly promotionTier?: fabric.Computed<number>;
    public readonly publiclyAccessible?: fabric.Computed<boolean>;
    public /*out*/ readonly storageEncrypted: fabric.Computed<boolean>;
    public readonly tags?: fabric.Computed<{[key: string]: any}>;
    public /*out*/ readonly writer: fabric.Computed<boolean>;

    constructor(urnName: string, args: ClusterInstanceArgs) {
        if (args.clusterIdentifier === undefined) {
            throw new Error("Missing required property 'clusterIdentifier'");
        }
        if (args.instanceClass === undefined) {
            throw new Error("Missing required property 'instanceClass'");
        }
        super("aws:rds/clusterInstance:ClusterInstance", urnName, {
            "applyImmediately": args.applyImmediately,
            "autoMinorVersionUpgrade": args.autoMinorVersionUpgrade,
            "clusterIdentifier": args.clusterIdentifier,
            "dbParameterGroupName": args.dbParameterGroupName,
            "dbSubnetGroupName": args.dbSubnetGroupName,
            "identifier": args.identifier,
            "identifierPrefix": args.identifierPrefix,
            "instanceClass": args.instanceClass,
            "monitoringInterval": args.monitoringInterval,
            "monitoringRoleArn": args.monitoringRoleArn,
            "preferredBackupWindow": args.preferredBackupWindow,
            "preferredMaintenanceWindow": args.preferredMaintenanceWindow,
            "promotionTier": args.promotionTier,
            "publiclyAccessible": args.publiclyAccessible,
            "tags": args.tags,
            "dbiResourceId": undefined,
            "endpoint": undefined,
            "kmsKeyId": undefined,
            "port": undefined,
            "storageEncrypted": undefined,
            "writer": undefined,
        });
    }
}

export interface ClusterInstanceArgs {
    readonly applyImmediately?: fabric.MaybeComputed<boolean>;
    readonly autoMinorVersionUpgrade?: fabric.MaybeComputed<boolean>;
    readonly clusterIdentifier: fabric.MaybeComputed<string>;
    readonly dbParameterGroupName?: fabric.MaybeComputed<string>;
    readonly dbSubnetGroupName?: fabric.MaybeComputed<string>;
    readonly identifier?: fabric.MaybeComputed<string>;
    readonly identifierPrefix?: fabric.MaybeComputed<string>;
    readonly instanceClass: fabric.MaybeComputed<string>;
    readonly monitoringInterval?: fabric.MaybeComputed<number>;
    readonly monitoringRoleArn?: fabric.MaybeComputed<string>;
    readonly preferredBackupWindow?: fabric.MaybeComputed<string>;
    readonly preferredMaintenanceWindow?: fabric.MaybeComputed<string>;
    readonly promotionTier?: fabric.MaybeComputed<number>;
    readonly publiclyAccessible?: fabric.MaybeComputed<boolean>;
    readonly tags?: fabric.MaybeComputed<{[key: string]: any}>;
}

