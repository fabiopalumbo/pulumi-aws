// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Provides a Redshift Cluster Resource.
 *
 * > **Note:** All arguments including the username and password will be stored in the raw state as plain-text.
 *
 * ## Example Usage
 *
 *
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const defaultCluster = new aws.redshift.Cluster("default", {
 *     clusterIdentifier: "tf-redshift-cluster",
 *     clusterType: "single-node",
 *     databaseName: "mydb",
 *     masterPassword: "Mustbe8characters",
 *     masterUsername: "foo",
 *     nodeType: "dc1.large",
 * });
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
    public static readonly __pulumiType = 'aws:redshift/cluster:Cluster';

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
     * If true , major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster. Default is true
     */
    public readonly allowVersionUpgrade!: pulumi.Output<boolean | undefined>;
    /**
     * Amazon Resource Name (ARN) of cluster
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * The number of days that automated snapshots are retained. If the value is 0, automated snapshots are disabled. Even if automated snapshots are disabled, you can still create manual snapshots when you want with create-cluster-snapshot. Default is 1.
     */
    public readonly automatedSnapshotRetentionPeriod!: pulumi.Output<number | undefined>;
    /**
     * The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the cluster. For example, if you have several EC2 instances running in a specific Availability Zone, then you might want the cluster to be provisioned in the same zone in order to decrease network latency.
     */
    public readonly availabilityZone!: pulumi.Output<string>;
    /**
     * The Cluster Identifier. Must be a lower case
     * string.
     */
    public readonly clusterIdentifier!: pulumi.Output<string>;
    /**
     * The name of the parameter group to be associated with this cluster.
     */
    public readonly clusterParameterGroupName!: pulumi.Output<string>;
    /**
     * The public key for the cluster
     */
    public readonly clusterPublicKey!: pulumi.Output<string>;
    /**
     * The specific revision number of the database in the cluster
     */
    public readonly clusterRevisionNumber!: pulumi.Output<string>;
    /**
     * A list of security groups to be associated with this cluster.
     */
    public readonly clusterSecurityGroups!: pulumi.Output<string[]>;
    /**
     * The name of a cluster subnet group to be associated with this cluster. If this parameter is not provided the resulting cluster will be deployed outside virtual private cloud (VPC).
     */
    public readonly clusterSubnetGroupName!: pulumi.Output<string>;
    /**
     * The cluster type to use. Either `single-node` or `multi-node`.
     */
    public readonly clusterType!: pulumi.Output<string>;
    /**
     * The version of the Amazon Redshift engine software that you want to deploy on the cluster.
     * The version selected runs on all the nodes in the cluster.
     */
    public readonly clusterVersion!: pulumi.Output<string | undefined>;
    /**
     * The name of the first database to be created when the cluster is created.
     * If you do not provide a name, Amazon Redshift will create a default database called `dev`.
     */
    public readonly databaseName!: pulumi.Output<string>;
    /**
     * The DNS name of the cluster
     */
    public /*out*/ readonly dnsName!: pulumi.Output<string>;
    /**
     * The Elastic IP (EIP) address for the cluster.
     */
    public readonly elasticIp!: pulumi.Output<string | undefined>;
    /**
     * If true , the data in the cluster is encrypted at rest.
     */
    public readonly encrypted!: pulumi.Output<boolean | undefined>;
    /**
     * The connection endpoint
     */
    public readonly endpoint!: pulumi.Output<string>;
    /**
     * If true , enhanced VPC routing is enabled.
     */
    public readonly enhancedVpcRouting!: pulumi.Output<boolean>;
    /**
     * The identifier of the final snapshot that is to be created immediately before deleting the cluster. If this parameter is provided, `skipFinalSnapshot` must be false.
     */
    public readonly finalSnapshotIdentifier!: pulumi.Output<string | undefined>;
    /**
     * A list of IAM Role ARNs to associate with the cluster. A Maximum of 10 can be associated to the cluster at any time.
     */
    public readonly iamRoles!: pulumi.Output<string[]>;
    /**
     * The ARN for the KMS encryption key. When specifying `kmsKeyId`, `encrypted` needs to be set to true.
     */
    public readonly kmsKeyId!: pulumi.Output<string>;
    /**
     * Logging, documented below.
     */
    public readonly logging!: pulumi.Output<outputs.redshift.ClusterLogging | undefined>;
    /**
     * Password for the master DB user.
     * Note that this may show up in logs, and it will be stored in the state file. Password must contain at least 8 chars and
     * contain at least one uppercase letter, one lowercase letter, and one number.
     */
    public readonly masterPassword!: pulumi.Output<string | undefined>;
    /**
     * Username for the master DB user.
     */
    public readonly masterUsername!: pulumi.Output<string | undefined>;
    /**
     * The node type to be provisioned for the cluster.
     */
    public readonly nodeType!: pulumi.Output<string>;
    /**
     * The number of compute nodes in the cluster. This parameter is required when the ClusterType parameter is specified as multi-node. Default is 1.
     */
    public readonly numberOfNodes!: pulumi.Output<number | undefined>;
    /**
     * The AWS customer account used to create or copy the snapshot. Required if you are restoring a snapshot you do not own, optional if you own the snapshot.
     */
    public readonly ownerAccount!: pulumi.Output<string | undefined>;
    /**
     * The port number on which the cluster accepts incoming connections.
     * The cluster is accessible only via the JDBC and ODBC connection strings. Part of the connection string requires the port on which the cluster will listen for incoming connections. Default port is 5439.
     */
    public readonly port!: pulumi.Output<number | undefined>;
    /**
     * The weekly time range (in UTC) during which automated cluster maintenance can occur.
     * Format: ddd:hh24:mi-ddd:hh24:mi
     */
    public readonly preferredMaintenanceWindow!: pulumi.Output<string>;
    /**
     * If true, the cluster can be accessed from a public network. Default is `true`.
     */
    public readonly publiclyAccessible!: pulumi.Output<boolean | undefined>;
    /**
     * Determines whether a final snapshot of the cluster is created before Amazon Redshift deletes the cluster. If true , a final cluster snapshot is not created. If false , a final cluster snapshot is created before the cluster is deleted. Default is false.
     */
    public readonly skipFinalSnapshot!: pulumi.Output<boolean | undefined>;
    /**
     * The name of the cluster the source snapshot was created from.
     */
    public readonly snapshotClusterIdentifier!: pulumi.Output<string | undefined>;
    /**
     * Configuration of automatic copy of snapshots from one region to another. Documented below.
     */
    public readonly snapshotCopy!: pulumi.Output<outputs.redshift.ClusterSnapshotCopy | undefined>;
    /**
     * The name of the snapshot from which to create the new cluster.
     */
    public readonly snapshotIdentifier!: pulumi.Output<string | undefined>;
    /**
     * A map of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster.
     */
    public readonly vpcSecurityGroupIds!: pulumi.Output<string[]>;

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
            inputs["allowVersionUpgrade"] = state ? state.allowVersionUpgrade : undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["automatedSnapshotRetentionPeriod"] = state ? state.automatedSnapshotRetentionPeriod : undefined;
            inputs["availabilityZone"] = state ? state.availabilityZone : undefined;
            inputs["clusterIdentifier"] = state ? state.clusterIdentifier : undefined;
            inputs["clusterParameterGroupName"] = state ? state.clusterParameterGroupName : undefined;
            inputs["clusterPublicKey"] = state ? state.clusterPublicKey : undefined;
            inputs["clusterRevisionNumber"] = state ? state.clusterRevisionNumber : undefined;
            inputs["clusterSecurityGroups"] = state ? state.clusterSecurityGroups : undefined;
            inputs["clusterSubnetGroupName"] = state ? state.clusterSubnetGroupName : undefined;
            inputs["clusterType"] = state ? state.clusterType : undefined;
            inputs["clusterVersion"] = state ? state.clusterVersion : undefined;
            inputs["databaseName"] = state ? state.databaseName : undefined;
            inputs["dnsName"] = state ? state.dnsName : undefined;
            inputs["elasticIp"] = state ? state.elasticIp : undefined;
            inputs["encrypted"] = state ? state.encrypted : undefined;
            inputs["endpoint"] = state ? state.endpoint : undefined;
            inputs["enhancedVpcRouting"] = state ? state.enhancedVpcRouting : undefined;
            inputs["finalSnapshotIdentifier"] = state ? state.finalSnapshotIdentifier : undefined;
            inputs["iamRoles"] = state ? state.iamRoles : undefined;
            inputs["kmsKeyId"] = state ? state.kmsKeyId : undefined;
            inputs["logging"] = state ? state.logging : undefined;
            inputs["masterPassword"] = state ? state.masterPassword : undefined;
            inputs["masterUsername"] = state ? state.masterUsername : undefined;
            inputs["nodeType"] = state ? state.nodeType : undefined;
            inputs["numberOfNodes"] = state ? state.numberOfNodes : undefined;
            inputs["ownerAccount"] = state ? state.ownerAccount : undefined;
            inputs["port"] = state ? state.port : undefined;
            inputs["preferredMaintenanceWindow"] = state ? state.preferredMaintenanceWindow : undefined;
            inputs["publiclyAccessible"] = state ? state.publiclyAccessible : undefined;
            inputs["skipFinalSnapshot"] = state ? state.skipFinalSnapshot : undefined;
            inputs["snapshotClusterIdentifier"] = state ? state.snapshotClusterIdentifier : undefined;
            inputs["snapshotCopy"] = state ? state.snapshotCopy : undefined;
            inputs["snapshotIdentifier"] = state ? state.snapshotIdentifier : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["vpcSecurityGroupIds"] = state ? state.vpcSecurityGroupIds : undefined;
        } else {
            const args = argsOrState as ClusterArgs | undefined;
            if (!args || args.clusterIdentifier === undefined) {
                throw new Error("Missing required property 'clusterIdentifier'");
            }
            if (!args || args.nodeType === undefined) {
                throw new Error("Missing required property 'nodeType'");
            }
            inputs["allowVersionUpgrade"] = args ? args.allowVersionUpgrade : undefined;
            inputs["automatedSnapshotRetentionPeriod"] = args ? args.automatedSnapshotRetentionPeriod : undefined;
            inputs["availabilityZone"] = args ? args.availabilityZone : undefined;
            inputs["clusterIdentifier"] = args ? args.clusterIdentifier : undefined;
            inputs["clusterParameterGroupName"] = args ? args.clusterParameterGroupName : undefined;
            inputs["clusterPublicKey"] = args ? args.clusterPublicKey : undefined;
            inputs["clusterRevisionNumber"] = args ? args.clusterRevisionNumber : undefined;
            inputs["clusterSecurityGroups"] = args ? args.clusterSecurityGroups : undefined;
            inputs["clusterSubnetGroupName"] = args ? args.clusterSubnetGroupName : undefined;
            inputs["clusterType"] = args ? args.clusterType : undefined;
            inputs["clusterVersion"] = args ? args.clusterVersion : undefined;
            inputs["databaseName"] = args ? args.databaseName : undefined;
            inputs["elasticIp"] = args ? args.elasticIp : undefined;
            inputs["encrypted"] = args ? args.encrypted : undefined;
            inputs["endpoint"] = args ? args.endpoint : undefined;
            inputs["enhancedVpcRouting"] = args ? args.enhancedVpcRouting : undefined;
            inputs["finalSnapshotIdentifier"] = args ? args.finalSnapshotIdentifier : undefined;
            inputs["iamRoles"] = args ? args.iamRoles : undefined;
            inputs["kmsKeyId"] = args ? args.kmsKeyId : undefined;
            inputs["logging"] = args ? args.logging : undefined;
            inputs["masterPassword"] = args ? args.masterPassword : undefined;
            inputs["masterUsername"] = args ? args.masterUsername : undefined;
            inputs["nodeType"] = args ? args.nodeType : undefined;
            inputs["numberOfNodes"] = args ? args.numberOfNodes : undefined;
            inputs["ownerAccount"] = args ? args.ownerAccount : undefined;
            inputs["port"] = args ? args.port : undefined;
            inputs["preferredMaintenanceWindow"] = args ? args.preferredMaintenanceWindow : undefined;
            inputs["publiclyAccessible"] = args ? args.publiclyAccessible : undefined;
            inputs["skipFinalSnapshot"] = args ? args.skipFinalSnapshot : undefined;
            inputs["snapshotClusterIdentifier"] = args ? args.snapshotClusterIdentifier : undefined;
            inputs["snapshotCopy"] = args ? args.snapshotCopy : undefined;
            inputs["snapshotIdentifier"] = args ? args.snapshotIdentifier : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["vpcSecurityGroupIds"] = args ? args.vpcSecurityGroupIds : undefined;
            inputs["arn"] = undefined /*out*/;
            inputs["dnsName"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Cluster.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Cluster resources.
 */
export interface ClusterState {
    /**
     * If true , major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster. Default is true
     */
    readonly allowVersionUpgrade?: pulumi.Input<boolean>;
    /**
     * Amazon Resource Name (ARN) of cluster
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * The number of days that automated snapshots are retained. If the value is 0, automated snapshots are disabled. Even if automated snapshots are disabled, you can still create manual snapshots when you want with create-cluster-snapshot. Default is 1.
     */
    readonly automatedSnapshotRetentionPeriod?: pulumi.Input<number>;
    /**
     * The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the cluster. For example, if you have several EC2 instances running in a specific Availability Zone, then you might want the cluster to be provisioned in the same zone in order to decrease network latency.
     */
    readonly availabilityZone?: pulumi.Input<string>;
    /**
     * The Cluster Identifier. Must be a lower case
     * string.
     */
    readonly clusterIdentifier?: pulumi.Input<string>;
    /**
     * The name of the parameter group to be associated with this cluster.
     */
    readonly clusterParameterGroupName?: pulumi.Input<string>;
    /**
     * The public key for the cluster
     */
    readonly clusterPublicKey?: pulumi.Input<string>;
    /**
     * The specific revision number of the database in the cluster
     */
    readonly clusterRevisionNumber?: pulumi.Input<string>;
    /**
     * A list of security groups to be associated with this cluster.
     */
    readonly clusterSecurityGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of a cluster subnet group to be associated with this cluster. If this parameter is not provided the resulting cluster will be deployed outside virtual private cloud (VPC).
     */
    readonly clusterSubnetGroupName?: pulumi.Input<string>;
    /**
     * The cluster type to use. Either `single-node` or `multi-node`.
     */
    readonly clusterType?: pulumi.Input<string>;
    /**
     * The version of the Amazon Redshift engine software that you want to deploy on the cluster.
     * The version selected runs on all the nodes in the cluster.
     */
    readonly clusterVersion?: pulumi.Input<string>;
    /**
     * The name of the first database to be created when the cluster is created.
     * If you do not provide a name, Amazon Redshift will create a default database called `dev`.
     */
    readonly databaseName?: pulumi.Input<string>;
    /**
     * The DNS name of the cluster
     */
    readonly dnsName?: pulumi.Input<string>;
    /**
     * The Elastic IP (EIP) address for the cluster.
     */
    readonly elasticIp?: pulumi.Input<string>;
    /**
     * If true , the data in the cluster is encrypted at rest.
     */
    readonly encrypted?: pulumi.Input<boolean>;
    /**
     * The connection endpoint
     */
    readonly endpoint?: pulumi.Input<string>;
    /**
     * If true , enhanced VPC routing is enabled.
     */
    readonly enhancedVpcRouting?: pulumi.Input<boolean>;
    /**
     * The identifier of the final snapshot that is to be created immediately before deleting the cluster. If this parameter is provided, `skipFinalSnapshot` must be false.
     */
    readonly finalSnapshotIdentifier?: pulumi.Input<string>;
    /**
     * A list of IAM Role ARNs to associate with the cluster. A Maximum of 10 can be associated to the cluster at any time.
     */
    readonly iamRoles?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ARN for the KMS encryption key. When specifying `kmsKeyId`, `encrypted` needs to be set to true.
     */
    readonly kmsKeyId?: pulumi.Input<string>;
    /**
     * Logging, documented below.
     */
    readonly logging?: pulumi.Input<inputs.redshift.ClusterLogging>;
    /**
     * Password for the master DB user.
     * Note that this may show up in logs, and it will be stored in the state file. Password must contain at least 8 chars and
     * contain at least one uppercase letter, one lowercase letter, and one number.
     */
    readonly masterPassword?: pulumi.Input<string>;
    /**
     * Username for the master DB user.
     */
    readonly masterUsername?: pulumi.Input<string>;
    /**
     * The node type to be provisioned for the cluster.
     */
    readonly nodeType?: pulumi.Input<string>;
    /**
     * The number of compute nodes in the cluster. This parameter is required when the ClusterType parameter is specified as multi-node. Default is 1.
     */
    readonly numberOfNodes?: pulumi.Input<number>;
    /**
     * The AWS customer account used to create or copy the snapshot. Required if you are restoring a snapshot you do not own, optional if you own the snapshot.
     */
    readonly ownerAccount?: pulumi.Input<string>;
    /**
     * The port number on which the cluster accepts incoming connections.
     * The cluster is accessible only via the JDBC and ODBC connection strings. Part of the connection string requires the port on which the cluster will listen for incoming connections. Default port is 5439.
     */
    readonly port?: pulumi.Input<number>;
    /**
     * The weekly time range (in UTC) during which automated cluster maintenance can occur.
     * Format: ddd:hh24:mi-ddd:hh24:mi
     */
    readonly preferredMaintenanceWindow?: pulumi.Input<string>;
    /**
     * If true, the cluster can be accessed from a public network. Default is `true`.
     */
    readonly publiclyAccessible?: pulumi.Input<boolean>;
    /**
     * Determines whether a final snapshot of the cluster is created before Amazon Redshift deletes the cluster. If true , a final cluster snapshot is not created. If false , a final cluster snapshot is created before the cluster is deleted. Default is false.
     */
    readonly skipFinalSnapshot?: pulumi.Input<boolean>;
    /**
     * The name of the cluster the source snapshot was created from.
     */
    readonly snapshotClusterIdentifier?: pulumi.Input<string>;
    /**
     * Configuration of automatic copy of snapshots from one region to another. Documented below.
     */
    readonly snapshotCopy?: pulumi.Input<inputs.redshift.ClusterSnapshotCopy>;
    /**
     * The name of the snapshot from which to create the new cluster.
     */
    readonly snapshotIdentifier?: pulumi.Input<string>;
    /**
     * A map of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster.
     */
    readonly vpcSecurityGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a Cluster resource.
 */
export interface ClusterArgs {
    /**
     * If true , major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster. Default is true
     */
    readonly allowVersionUpgrade?: pulumi.Input<boolean>;
    /**
     * The number of days that automated snapshots are retained. If the value is 0, automated snapshots are disabled. Even if automated snapshots are disabled, you can still create manual snapshots when you want with create-cluster-snapshot. Default is 1.
     */
    readonly automatedSnapshotRetentionPeriod?: pulumi.Input<number>;
    /**
     * The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the cluster. For example, if you have several EC2 instances running in a specific Availability Zone, then you might want the cluster to be provisioned in the same zone in order to decrease network latency.
     */
    readonly availabilityZone?: pulumi.Input<string>;
    /**
     * The Cluster Identifier. Must be a lower case
     * string.
     */
    readonly clusterIdentifier: pulumi.Input<string>;
    /**
     * The name of the parameter group to be associated with this cluster.
     */
    readonly clusterParameterGroupName?: pulumi.Input<string>;
    /**
     * The public key for the cluster
     */
    readonly clusterPublicKey?: pulumi.Input<string>;
    /**
     * The specific revision number of the database in the cluster
     */
    readonly clusterRevisionNumber?: pulumi.Input<string>;
    /**
     * A list of security groups to be associated with this cluster.
     */
    readonly clusterSecurityGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of a cluster subnet group to be associated with this cluster. If this parameter is not provided the resulting cluster will be deployed outside virtual private cloud (VPC).
     */
    readonly clusterSubnetGroupName?: pulumi.Input<string>;
    /**
     * The cluster type to use. Either `single-node` or `multi-node`.
     */
    readonly clusterType?: pulumi.Input<string>;
    /**
     * The version of the Amazon Redshift engine software that you want to deploy on the cluster.
     * The version selected runs on all the nodes in the cluster.
     */
    readonly clusterVersion?: pulumi.Input<string>;
    /**
     * The name of the first database to be created when the cluster is created.
     * If you do not provide a name, Amazon Redshift will create a default database called `dev`.
     */
    readonly databaseName?: pulumi.Input<string>;
    /**
     * The Elastic IP (EIP) address for the cluster.
     */
    readonly elasticIp?: pulumi.Input<string>;
    /**
     * If true , the data in the cluster is encrypted at rest.
     */
    readonly encrypted?: pulumi.Input<boolean>;
    /**
     * The connection endpoint
     */
    readonly endpoint?: pulumi.Input<string>;
    /**
     * If true , enhanced VPC routing is enabled.
     */
    readonly enhancedVpcRouting?: pulumi.Input<boolean>;
    /**
     * The identifier of the final snapshot that is to be created immediately before deleting the cluster. If this parameter is provided, `skipFinalSnapshot` must be false.
     */
    readonly finalSnapshotIdentifier?: pulumi.Input<string>;
    /**
     * A list of IAM Role ARNs to associate with the cluster. A Maximum of 10 can be associated to the cluster at any time.
     */
    readonly iamRoles?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The ARN for the KMS encryption key. When specifying `kmsKeyId`, `encrypted` needs to be set to true.
     */
    readonly kmsKeyId?: pulumi.Input<string>;
    /**
     * Logging, documented below.
     */
    readonly logging?: pulumi.Input<inputs.redshift.ClusterLogging>;
    /**
     * Password for the master DB user.
     * Note that this may show up in logs, and it will be stored in the state file. Password must contain at least 8 chars and
     * contain at least one uppercase letter, one lowercase letter, and one number.
     */
    readonly masterPassword?: pulumi.Input<string>;
    /**
     * Username for the master DB user.
     */
    readonly masterUsername?: pulumi.Input<string>;
    /**
     * The node type to be provisioned for the cluster.
     */
    readonly nodeType: pulumi.Input<string>;
    /**
     * The number of compute nodes in the cluster. This parameter is required when the ClusterType parameter is specified as multi-node. Default is 1.
     */
    readonly numberOfNodes?: pulumi.Input<number>;
    /**
     * The AWS customer account used to create or copy the snapshot. Required if you are restoring a snapshot you do not own, optional if you own the snapshot.
     */
    readonly ownerAccount?: pulumi.Input<string>;
    /**
     * The port number on which the cluster accepts incoming connections.
     * The cluster is accessible only via the JDBC and ODBC connection strings. Part of the connection string requires the port on which the cluster will listen for incoming connections. Default port is 5439.
     */
    readonly port?: pulumi.Input<number>;
    /**
     * The weekly time range (in UTC) during which automated cluster maintenance can occur.
     * Format: ddd:hh24:mi-ddd:hh24:mi
     */
    readonly preferredMaintenanceWindow?: pulumi.Input<string>;
    /**
     * If true, the cluster can be accessed from a public network. Default is `true`.
     */
    readonly publiclyAccessible?: pulumi.Input<boolean>;
    /**
     * Determines whether a final snapshot of the cluster is created before Amazon Redshift deletes the cluster. If true , a final cluster snapshot is not created. If false , a final cluster snapshot is created before the cluster is deleted. Default is false.
     */
    readonly skipFinalSnapshot?: pulumi.Input<boolean>;
    /**
     * The name of the cluster the source snapshot was created from.
     */
    readonly snapshotClusterIdentifier?: pulumi.Input<string>;
    /**
     * Configuration of automatic copy of snapshots from one region to another. Documented below.
     */
    readonly snapshotCopy?: pulumi.Input<inputs.redshift.ClusterSnapshotCopy>;
    /**
     * The name of the snapshot from which to create the new cluster.
     */
    readonly snapshotIdentifier?: pulumi.Input<string>;
    /**
     * A map of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster.
     */
    readonly vpcSecurityGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
}
