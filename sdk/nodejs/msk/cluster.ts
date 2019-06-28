// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * Manages AWS Managed Streaming for Kafka cluster
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const kms = new aws.kms.Key("kms", {
 *     description: "example",
 * });
 * const vpc = new aws.ec2.Vpc("vpc", {
 *     cidrBlock: "192.168.0.0/22",
 * });
 * const azs = pulumi.output(aws.getAvailabilityZones({
 *     state: "available",
 * }));
 * const sg = new aws.ec2.SecurityGroup("sg", {
 *     vpcId: vpc.id,
 * });
 * const subnetAz1 = new aws.ec2.Subnet("subnet_az1", {
 *     availabilityZone: azs.apply(azs => azs.names[0]),
 *     cidrBlock: "192.168.0.0/24",
 *     vpcId: vpc.id,
 * });
 * const subnetAz2 = new aws.ec2.Subnet("subnet_az2", {
 *     availabilityZone: azs.apply(azs => azs.names[1]),
 *     cidrBlock: "192.168.1.0/24",
 *     vpcId: vpc.id,
 * });
 * const subnetAz3 = new aws.ec2.Subnet("subnet_az3", {
 *     availabilityZone: azs.apply(azs => azs.names[2]),
 *     cidrBlock: "192.168.2.0/24",
 *     vpcId: vpc.id,
 * });
 * const example = new aws.msk.Cluster("example", {
 *     brokerNodeGroupInfo: {
 *         clientSubnets: [
 *             subnetAz1.id,
 *             subnetAz2.id,
 *             subnetAz3.id,
 *         ],
 *         ebsVolumeSize: 1000,
 *         instanceType: "kafka.m5.large",
 *         securityGroups: [sg.id],
 *     },
 *     clusterName: "example",
 *     encryptionInfo: {
 *         encryptionAtRestKmsKeyArn: kms.arn,
 *     },
 *     kafkaVersion: "2.1.0",
 *     numberOfBrokerNodes: 3,
 *     tags: {
 *         foo: "bar",
 *     },
 * });
 * 
 * export const bootstrapBrokers = example.bootstrapBrokers;
 * export const bootstrapBrokersTls = example.bootstrapBrokersTls;
 * export const zookeeperConnectString = example.zookeeperConnectString;
 * ```
 */
export class Cluster extends pulumi.CustomResource {
    /**
     * Get an existing Cluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClusterState, opts?: pulumi.CustomResourceOptions): Cluster {
        return new Cluster(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:msk/cluster:Cluster';

    /**
     * Returns true if the given object is an instance of Cluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Cluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Cluster.__pulumiType;
    }

    /**
     * Amazon Resource Name (ARN) of the MSK Configuration to use in the cluster.
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * A comma separated list of one or more hostname:port pairs of kafka brokers suitable to boostrap connectivity to the kafka cluster. Only contains value if `client_broker` encryption in transit is set to `PLAINTEXT` or `TLS_PLAINTEXT`.
     */
    public /*out*/ readonly bootstrapBrokers!: pulumi.Output<string>;
    /**
     * A comma separated list of one or more DNS names (or IPs) and TLS port pairs kafka brokers suitable to boostrap connectivity to the kafka cluster. Only contains value if `client_broker` encryption in transit is set to `TLS_PLAINTEXT` or `TLS`.
     */
    public /*out*/ readonly bootstrapBrokersTls!: pulumi.Output<string>;
    /**
     * Configuration block for the broker nodes of the Kafka cluster.
     */
    public readonly brokerNodeGroupInfo!: pulumi.Output<{ azDistribution?: string, clientSubnets: string[], ebsVolumeSize: number, instanceType: string, securityGroups: string[] }>;
    /**
     * Configuration block for specifying a client authentication. See below.
     */
    public readonly clientAuthentication!: pulumi.Output<{ tls?: { certificateAuthorityArns?: string[] } } | undefined>;
    /**
     * Name of the MSK cluster.
     */
    public readonly clusterName!: pulumi.Output<string>;
    /**
     * Configuration block for specifying a MSK Configuration to attach to Kafka brokers. See below.
     */
    public readonly configurationInfo!: pulumi.Output<{ arn: string, revision: number } | undefined>;
    /**
     * Current version of the MSK Cluster used for updates, e.g. `K13V1IB3VIYZZH`
     * * `encryption_info.0.encryption_at_rest_kms_key_arn` - The ARN of the KMS key used for encryption at rest of the broker data volumes.
     */
    public /*out*/ readonly currentVersion!: pulumi.Output<string>;
    /**
     * Configuration block for specifying encryption. See below.
     */
    public readonly encryptionInfo!: pulumi.Output<{ encryptionAtRestKmsKeyArn: string, encryptionInTransit?: { clientBroker?: string, inCluster?: boolean } } | undefined>;
    /**
     * Specify the desired enhanced MSK CloudWatch monitoring level.  See [Monitoring Amazon MSK with Amazon CloudWatch](https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html)
     */
    public readonly enhancedMonitoring!: pulumi.Output<string | undefined>;
    /**
     * Specify the desired Kafka software version.
     */
    public readonly kafkaVersion!: pulumi.Output<string>;
    /**
     * The desired total number of broker nodes in the kafka cluster.  It must be a multiple of the number of specified client subnets.
     */
    public readonly numberOfBrokerNodes!: pulumi.Output<number>;
    /**
     * A mapping of tags to assign to the resource
     */
    public readonly tags!: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * A comma separated list of one or more IP:port pairs to use to connect to the Apache Zookeeper cluster.
     */
    public /*out*/ readonly zookeeperConnectString!: pulumi.Output<string>;

    /**
     * Create a Cluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ClusterArgs | ClusterState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ClusterState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["bootstrapBrokers"] = state ? state.bootstrapBrokers : undefined;
            inputs["bootstrapBrokersTls"] = state ? state.bootstrapBrokersTls : undefined;
            inputs["brokerNodeGroupInfo"] = state ? state.brokerNodeGroupInfo : undefined;
            inputs["clientAuthentication"] = state ? state.clientAuthentication : undefined;
            inputs["clusterName"] = state ? state.clusterName : undefined;
            inputs["configurationInfo"] = state ? state.configurationInfo : undefined;
            inputs["currentVersion"] = state ? state.currentVersion : undefined;
            inputs["encryptionInfo"] = state ? state.encryptionInfo : undefined;
            inputs["enhancedMonitoring"] = state ? state.enhancedMonitoring : undefined;
            inputs["kafkaVersion"] = state ? state.kafkaVersion : undefined;
            inputs["numberOfBrokerNodes"] = state ? state.numberOfBrokerNodes : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["zookeeperConnectString"] = state ? state.zookeeperConnectString : undefined;
        } else {
            const args = argsOrState as ClusterArgs | undefined;
            if (!args || args.brokerNodeGroupInfo === undefined) {
                throw new Error("Missing required property 'brokerNodeGroupInfo'");
            }
            if (!args || args.clusterName === undefined) {
                throw new Error("Missing required property 'clusterName'");
            }
            if (!args || args.kafkaVersion === undefined) {
                throw new Error("Missing required property 'kafkaVersion'");
            }
            if (!args || args.numberOfBrokerNodes === undefined) {
                throw new Error("Missing required property 'numberOfBrokerNodes'");
            }
            inputs["brokerNodeGroupInfo"] = args ? args.brokerNodeGroupInfo : undefined;
            inputs["clientAuthentication"] = args ? args.clientAuthentication : undefined;
            inputs["clusterName"] = args ? args.clusterName : undefined;
            inputs["configurationInfo"] = args ? args.configurationInfo : undefined;
            inputs["encryptionInfo"] = args ? args.encryptionInfo : undefined;
            inputs["enhancedMonitoring"] = args ? args.enhancedMonitoring : undefined;
            inputs["kafkaVersion"] = args ? args.kafkaVersion : undefined;
            inputs["numberOfBrokerNodes"] = args ? args.numberOfBrokerNodes : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["bootstrapBrokers"] = undefined /*out*/;
            inputs["bootstrapBrokersTls"] = undefined /*out*/;
            inputs["currentVersion"] = undefined /*out*/;
            inputs["zookeeperConnectString"] = undefined /*out*/;
        }
        super(Cluster.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Cluster resources.
 */
export interface ClusterState {
    /**
     * Amazon Resource Name (ARN) of the MSK Configuration to use in the cluster.
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * A comma separated list of one or more hostname:port pairs of kafka brokers suitable to boostrap connectivity to the kafka cluster. Only contains value if `client_broker` encryption in transit is set to `PLAINTEXT` or `TLS_PLAINTEXT`.
     */
    readonly bootstrapBrokers?: pulumi.Input<string>;
    /**
     * A comma separated list of one or more DNS names (or IPs) and TLS port pairs kafka brokers suitable to boostrap connectivity to the kafka cluster. Only contains value if `client_broker` encryption in transit is set to `TLS_PLAINTEXT` or `TLS`.
     */
    readonly bootstrapBrokersTls?: pulumi.Input<string>;
    /**
     * Configuration block for the broker nodes of the Kafka cluster.
     */
    readonly brokerNodeGroupInfo?: pulumi.Input<{ azDistribution?: pulumi.Input<string>, clientSubnets: pulumi.Input<pulumi.Input<string>[]>, ebsVolumeSize: pulumi.Input<number>, instanceType: pulumi.Input<string>, securityGroups: pulumi.Input<pulumi.Input<string>[]> }>;
    /**
     * Configuration block for specifying a client authentication. See below.
     */
    readonly clientAuthentication?: pulumi.Input<{ tls?: pulumi.Input<{ certificateAuthorityArns?: pulumi.Input<pulumi.Input<string>[]> }> }>;
    /**
     * Name of the MSK cluster.
     */
    readonly clusterName?: pulumi.Input<string>;
    /**
     * Configuration block for specifying a MSK Configuration to attach to Kafka brokers. See below.
     */
    readonly configurationInfo?: pulumi.Input<{ arn: pulumi.Input<string>, revision: pulumi.Input<number> }>;
    /**
     * Current version of the MSK Cluster used for updates, e.g. `K13V1IB3VIYZZH`
     * * `encryption_info.0.encryption_at_rest_kms_key_arn` - The ARN of the KMS key used for encryption at rest of the broker data volumes.
     */
    readonly currentVersion?: pulumi.Input<string>;
    /**
     * Configuration block for specifying encryption. See below.
     */
    readonly encryptionInfo?: pulumi.Input<{ encryptionAtRestKmsKeyArn?: pulumi.Input<string>, encryptionInTransit?: pulumi.Input<{ clientBroker?: pulumi.Input<string>, inCluster?: pulumi.Input<boolean> }> }>;
    /**
     * Specify the desired enhanced MSK CloudWatch monitoring level.  See [Monitoring Amazon MSK with Amazon CloudWatch](https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html)
     */
    readonly enhancedMonitoring?: pulumi.Input<string>;
    /**
     * Specify the desired Kafka software version.
     */
    readonly kafkaVersion?: pulumi.Input<string>;
    /**
     * The desired total number of broker nodes in the kafka cluster.  It must be a multiple of the number of specified client subnets.
     */
    readonly numberOfBrokerNodes?: pulumi.Input<number>;
    /**
     * A mapping of tags to assign to the resource
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * A comma separated list of one or more IP:port pairs to use to connect to the Apache Zookeeper cluster.
     */
    readonly zookeeperConnectString?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Cluster resource.
 */
export interface ClusterArgs {
    /**
     * Configuration block for the broker nodes of the Kafka cluster.
     */
    readonly brokerNodeGroupInfo: pulumi.Input<{ azDistribution?: pulumi.Input<string>, clientSubnets: pulumi.Input<pulumi.Input<string>[]>, ebsVolumeSize: pulumi.Input<number>, instanceType: pulumi.Input<string>, securityGroups: pulumi.Input<pulumi.Input<string>[]> }>;
    /**
     * Configuration block for specifying a client authentication. See below.
     */
    readonly clientAuthentication?: pulumi.Input<{ tls?: pulumi.Input<{ certificateAuthorityArns?: pulumi.Input<pulumi.Input<string>[]> }> }>;
    /**
     * Name of the MSK cluster.
     */
    readonly clusterName: pulumi.Input<string>;
    /**
     * Configuration block for specifying a MSK Configuration to attach to Kafka brokers. See below.
     */
    readonly configurationInfo?: pulumi.Input<{ arn: pulumi.Input<string>, revision: pulumi.Input<number> }>;
    /**
     * Configuration block for specifying encryption. See below.
     */
    readonly encryptionInfo?: pulumi.Input<{ encryptionAtRestKmsKeyArn?: pulumi.Input<string>, encryptionInTransit?: pulumi.Input<{ clientBroker?: pulumi.Input<string>, inCluster?: pulumi.Input<boolean> }> }>;
    /**
     * Specify the desired enhanced MSK CloudWatch monitoring level.  See [Monitoring Amazon MSK with Amazon CloudWatch](https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html)
     */
    readonly enhancedMonitoring?: pulumi.Input<string>;
    /**
     * Specify the desired Kafka software version.
     */
    readonly kafkaVersion: pulumi.Input<string>;
    /**
     * The desired total number of broker nodes in the kafka cluster.  It must be a multiple of the number of specified client subnets.
     */
    readonly numberOfBrokerNodes: pulumi.Input<number>;
    /**
     * A mapping of tags to assign to the resource
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
}
