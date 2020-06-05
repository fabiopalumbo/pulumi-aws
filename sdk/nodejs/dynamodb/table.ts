// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Provides a DynamoDB table resource
 *
 * > **Note:** It is recommended to use [`ignoreChanges`](https://www.pulumi.com/docs/intro/concepts/programming-model/#ignorechanges) for `readCapacity` and/or `writeCapacity` if there's `autoscaling policy` attached to the table.
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const basicDynamodbTable = new aws.dynamodb.Table("basic-dynamodb-table", {
 *     attributes: [
 *         {
 *             name: "UserId",
 *             type: "S",
 *         },
 *         {
 *             name: "GameTitle",
 *             type: "S",
 *         },
 *         {
 *             name: "TopScore",
 *             type: "N",
 *         },
 *     ],
 *     billingMode: "PROVISIONED",
 *     globalSecondaryIndexes: [{
 *         hashKey: "GameTitle",
 *         name: "GameTitleIndex",
 *         nonKeyAttributes: ["UserId"],
 *         projectionType: "INCLUDE",
 *         rangeKey: "TopScore",
 *         readCapacity: 10,
 *         writeCapacity: 10,
 *     }],
 *     hashKey: "UserId",
 *     rangeKey: "GameTitle",
 *     readCapacity: 20,
 *     tags: {
 *         Environment: "production",
 *         Name: "dynamodb-table-1",
 *     },
 *     ttl: {
 *         attributeName: "TimeToExist",
 *         enabled: false,
 *     },
 *     writeCapacity: 20,
 * });
 * ```
 *
 * ### Global Tables
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const example = new aws.dynamodb.Table("example", {
 *     attributes: [{
 *         name: "TestTableHashKey",
 *         type: "S",
 *     }],
 *     billingMode: "PAY_PER_REQUEST",
 *     hashKey: "TestTableHashKey",
 *     replicas: [
 *         {
 *             regionName: "us-east-2",
 *         },
 *         {
 *             regionName: "us-west-2",
 *         },
 *     ],
 *     streamEnabled: true,
 *     streamViewType: "NEW_AND_OLD_IMAGES",
 * });
 * ```
 */
export class Table extends pulumi.CustomResource {
    /**
     * Get an existing Table resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TableState, opts?: pulumi.CustomResourceOptions): Table {
        return new Table(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:dynamodb/table:Table';

    /**
     * Returns true if the given object is an instance of Table.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Table {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Table.__pulumiType;
    }

    /**
     * The arn of the table
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * List of nested attribute definitions. Only required for `hashKey` and `rangeKey` attributes. Each attribute has two properties:
     */
    public readonly attributes!: pulumi.Output<outputs.dynamodb.TableAttribute[]>;
    /**
     * Controls how you are charged for read and write throughput and how you manage capacity. The valid values are `PROVISIONED` and `PAY_PER_REQUEST`. Defaults to `PROVISIONED`.
     */
    public readonly billingMode!: pulumi.Output<string | undefined>;
    /**
     * Describe a GSI for the table;
     * subject to the normal limits on the number of GSIs, projected
     * attributes, etc.
     */
    public readonly globalSecondaryIndexes!: pulumi.Output<outputs.dynamodb.TableGlobalSecondaryIndex[] | undefined>;
    /**
     * The name of the hash key in the index; must be
     * defined as an attribute in the resource.
     */
    public readonly hashKey!: pulumi.Output<string>;
    /**
     * Describe an LSI on the table;
     * these can only be allocated *at creation* so you cannot change this
     * definition after you have created the resource.
     */
    public readonly localSecondaryIndexes!: pulumi.Output<outputs.dynamodb.TableLocalSecondaryIndex[] | undefined>;
    /**
     * The name of the index
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Point-in-time recovery options.
     */
    public readonly pointInTimeRecovery!: pulumi.Output<outputs.dynamodb.TablePointInTimeRecovery>;
    /**
     * The name of the range key; must be defined
     */
    public readonly rangeKey!: pulumi.Output<string | undefined>;
    /**
     * The number of read units for this index. Must be set if billingMode is set to PROVISIONED.
     */
    public readonly readCapacity!: pulumi.Output<number | undefined>;
    /**
     * Configuration block(s) with [DynamoDB Global Tables V2 (version 2019.11.21)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html) replication configurations. Detailed below.
     */
    public readonly replicas!: pulumi.Output<outputs.dynamodb.TableReplica[] | undefined>;
    /**
     * Encryption at rest options. AWS DynamoDB tables are automatically encrypted at rest with an AWS owned Customer Master Key if this argument isn't specified.
     */
    public readonly serverSideEncryption!: pulumi.Output<outputs.dynamodb.TableServerSideEncryption>;
    /**
     * The ARN of the Table Stream. Only available when `streamEnabled = true`
     */
    public /*out*/ readonly streamArn!: pulumi.Output<string>;
    /**
     * Indicates whether Streams are to be enabled (true) or disabled (false).
     */
    public readonly streamEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * A timestamp, in ISO 8601 format, for this stream. Note that this timestamp is not
     * a unique identifier for the stream on its own. However, the combination of AWS customer ID,
     * table name and this field is guaranteed to be unique.
     * It can be used for creating CloudWatch Alarms. Only available when `streamEnabled = true`
     */
    public /*out*/ readonly streamLabel!: pulumi.Output<string>;
    /**
     * When an item in the table is modified, StreamViewType determines what information is written to the table's stream. Valid values are `KEYS_ONLY`, `NEW_IMAGE`, `OLD_IMAGE`, `NEW_AND_OLD_IMAGES`.
     */
    public readonly streamViewType!: pulumi.Output<string>;
    /**
     * A map of tags to populate on the created table.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * Defines ttl, has two properties, and can only be specified once:
     */
    public readonly ttl!: pulumi.Output<outputs.dynamodb.TableTtl | undefined>;
    /**
     * The number of write units for this index. Must be set if billingMode is set to PROVISIONED.
     */
    public readonly writeCapacity!: pulumi.Output<number | undefined>;

    /**
     * Create a Table resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TableArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TableArgs | TableState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as TableState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["attributes"] = state ? state.attributes : undefined;
            inputs["billingMode"] = state ? state.billingMode : undefined;
            inputs["globalSecondaryIndexes"] = state ? state.globalSecondaryIndexes : undefined;
            inputs["hashKey"] = state ? state.hashKey : undefined;
            inputs["localSecondaryIndexes"] = state ? state.localSecondaryIndexes : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["pointInTimeRecovery"] = state ? state.pointInTimeRecovery : undefined;
            inputs["rangeKey"] = state ? state.rangeKey : undefined;
            inputs["readCapacity"] = state ? state.readCapacity : undefined;
            inputs["replicas"] = state ? state.replicas : undefined;
            inputs["serverSideEncryption"] = state ? state.serverSideEncryption : undefined;
            inputs["streamArn"] = state ? state.streamArn : undefined;
            inputs["streamEnabled"] = state ? state.streamEnabled : undefined;
            inputs["streamLabel"] = state ? state.streamLabel : undefined;
            inputs["streamViewType"] = state ? state.streamViewType : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["ttl"] = state ? state.ttl : undefined;
            inputs["writeCapacity"] = state ? state.writeCapacity : undefined;
        } else {
            const args = argsOrState as TableArgs | undefined;
            if (!args || args.attributes === undefined) {
                throw new Error("Missing required property 'attributes'");
            }
            if (!args || args.hashKey === undefined) {
                throw new Error("Missing required property 'hashKey'");
            }
            inputs["attributes"] = args ? args.attributes : undefined;
            inputs["billingMode"] = args ? args.billingMode : undefined;
            inputs["globalSecondaryIndexes"] = args ? args.globalSecondaryIndexes : undefined;
            inputs["hashKey"] = args ? args.hashKey : undefined;
            inputs["localSecondaryIndexes"] = args ? args.localSecondaryIndexes : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["pointInTimeRecovery"] = args ? args.pointInTimeRecovery : undefined;
            inputs["rangeKey"] = args ? args.rangeKey : undefined;
            inputs["readCapacity"] = args ? args.readCapacity : undefined;
            inputs["replicas"] = args ? args.replicas : undefined;
            inputs["serverSideEncryption"] = args ? args.serverSideEncryption : undefined;
            inputs["streamEnabled"] = args ? args.streamEnabled : undefined;
            inputs["streamViewType"] = args ? args.streamViewType : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["ttl"] = args ? args.ttl : undefined;
            inputs["writeCapacity"] = args ? args.writeCapacity : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["streamArn"] = undefined /*out*/;
            inputs["streamLabel"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Table.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Table resources.
 */
export interface TableState {
    /**
     * The arn of the table
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * List of nested attribute definitions. Only required for `hashKey` and `rangeKey` attributes. Each attribute has two properties:
     */
    readonly attributes?: pulumi.Input<pulumi.Input<inputs.dynamodb.TableAttribute>[]>;
    /**
     * Controls how you are charged for read and write throughput and how you manage capacity. The valid values are `PROVISIONED` and `PAY_PER_REQUEST`. Defaults to `PROVISIONED`.
     */
    readonly billingMode?: pulumi.Input<string>;
    /**
     * Describe a GSI for the table;
     * subject to the normal limits on the number of GSIs, projected
     * attributes, etc.
     */
    readonly globalSecondaryIndexes?: pulumi.Input<pulumi.Input<inputs.dynamodb.TableGlobalSecondaryIndex>[]>;
    /**
     * The name of the hash key in the index; must be
     * defined as an attribute in the resource.
     */
    readonly hashKey?: pulumi.Input<string>;
    /**
     * Describe an LSI on the table;
     * these can only be allocated *at creation* so you cannot change this
     * definition after you have created the resource.
     */
    readonly localSecondaryIndexes?: pulumi.Input<pulumi.Input<inputs.dynamodb.TableLocalSecondaryIndex>[]>;
    /**
     * The name of the index
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Point-in-time recovery options.
     */
    readonly pointInTimeRecovery?: pulumi.Input<inputs.dynamodb.TablePointInTimeRecovery>;
    /**
     * The name of the range key; must be defined
     */
    readonly rangeKey?: pulumi.Input<string>;
    /**
     * The number of read units for this index. Must be set if billingMode is set to PROVISIONED.
     */
    readonly readCapacity?: pulumi.Input<number>;
    /**
     * Configuration block(s) with [DynamoDB Global Tables V2 (version 2019.11.21)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html) replication configurations. Detailed below.
     */
    readonly replicas?: pulumi.Input<pulumi.Input<inputs.dynamodb.TableReplica>[]>;
    /**
     * Encryption at rest options. AWS DynamoDB tables are automatically encrypted at rest with an AWS owned Customer Master Key if this argument isn't specified.
     */
    readonly serverSideEncryption?: pulumi.Input<inputs.dynamodb.TableServerSideEncryption>;
    /**
     * The ARN of the Table Stream. Only available when `streamEnabled = true`
     */
    readonly streamArn?: pulumi.Input<string>;
    /**
     * Indicates whether Streams are to be enabled (true) or disabled (false).
     */
    readonly streamEnabled?: pulumi.Input<boolean>;
    /**
     * A timestamp, in ISO 8601 format, for this stream. Note that this timestamp is not
     * a unique identifier for the stream on its own. However, the combination of AWS customer ID,
     * table name and this field is guaranteed to be unique.
     * It can be used for creating CloudWatch Alarms. Only available when `streamEnabled = true`
     */
    readonly streamLabel?: pulumi.Input<string>;
    /**
     * When an item in the table is modified, StreamViewType determines what information is written to the table's stream. Valid values are `KEYS_ONLY`, `NEW_IMAGE`, `OLD_IMAGE`, `NEW_AND_OLD_IMAGES`.
     */
    readonly streamViewType?: pulumi.Input<string>;
    /**
     * A map of tags to populate on the created table.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Defines ttl, has two properties, and can only be specified once:
     */
    readonly ttl?: pulumi.Input<inputs.dynamodb.TableTtl>;
    /**
     * The number of write units for this index. Must be set if billingMode is set to PROVISIONED.
     */
    readonly writeCapacity?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a Table resource.
 */
export interface TableArgs {
    /**
     * List of nested attribute definitions. Only required for `hashKey` and `rangeKey` attributes. Each attribute has two properties:
     */
    readonly attributes: pulumi.Input<pulumi.Input<inputs.dynamodb.TableAttribute>[]>;
    /**
     * Controls how you are charged for read and write throughput and how you manage capacity. The valid values are `PROVISIONED` and `PAY_PER_REQUEST`. Defaults to `PROVISIONED`.
     */
    readonly billingMode?: pulumi.Input<string>;
    /**
     * Describe a GSI for the table;
     * subject to the normal limits on the number of GSIs, projected
     * attributes, etc.
     */
    readonly globalSecondaryIndexes?: pulumi.Input<pulumi.Input<inputs.dynamodb.TableGlobalSecondaryIndex>[]>;
    /**
     * The name of the hash key in the index; must be
     * defined as an attribute in the resource.
     */
    readonly hashKey: pulumi.Input<string>;
    /**
     * Describe an LSI on the table;
     * these can only be allocated *at creation* so you cannot change this
     * definition after you have created the resource.
     */
    readonly localSecondaryIndexes?: pulumi.Input<pulumi.Input<inputs.dynamodb.TableLocalSecondaryIndex>[]>;
    /**
     * The name of the index
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Point-in-time recovery options.
     */
    readonly pointInTimeRecovery?: pulumi.Input<inputs.dynamodb.TablePointInTimeRecovery>;
    /**
     * The name of the range key; must be defined
     */
    readonly rangeKey?: pulumi.Input<string>;
    /**
     * The number of read units for this index. Must be set if billingMode is set to PROVISIONED.
     */
    readonly readCapacity?: pulumi.Input<number>;
    /**
     * Configuration block(s) with [DynamoDB Global Tables V2 (version 2019.11.21)](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html) replication configurations. Detailed below.
     */
    readonly replicas?: pulumi.Input<pulumi.Input<inputs.dynamodb.TableReplica>[]>;
    /**
     * Encryption at rest options. AWS DynamoDB tables are automatically encrypted at rest with an AWS owned Customer Master Key if this argument isn't specified.
     */
    readonly serverSideEncryption?: pulumi.Input<inputs.dynamodb.TableServerSideEncryption>;
    /**
     * Indicates whether Streams are to be enabled (true) or disabled (false).
     */
    readonly streamEnabled?: pulumi.Input<boolean>;
    /**
     * When an item in the table is modified, StreamViewType determines what information is written to the table's stream. Valid values are `KEYS_ONLY`, `NEW_IMAGE`, `OLD_IMAGE`, `NEW_AND_OLD_IMAGES`.
     */
    readonly streamViewType?: pulumi.Input<string>;
    /**
     * A map of tags to populate on the created table.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * Defines ttl, has two properties, and can only be specified once:
     */
    readonly ttl?: pulumi.Input<inputs.dynamodb.TableTtl>;
    /**
     * The number of write units for this index. Must be set if billingMode is set to PROVISIONED.
     */
    readonly writeCapacity?: pulumi.Input<number>;
}
