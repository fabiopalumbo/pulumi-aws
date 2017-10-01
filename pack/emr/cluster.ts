// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides an Elastic MapReduce Cluster, a web service that makes it easy to
 * process large amounts of data efficiently. See [Amazon Elastic MapReduce Documentation](https://aws.amazon.com/documentation/elastic-mapreduce/)
 * for more information.
 */
export class Cluster extends pulumi.Resource {
    /**
     * A list of applications for the cluster. Valid values are: `Flink`, `Hadoop`, `Hive`, `Mahout`, `Pig`, and `Spark`. Case insensitive
     */
    public readonly applications?: pulumi.Computed<string[]>;
    /**
     * An IAM role for automatic scaling policies. The IAM role provides permissions that the automatic scaling feature requires to launch and terminate EC2 instances in an instance group.
     */
    public readonly autoscalingRole?: pulumi.Computed<string>;
    /**
     * List of bootstrap actions that will be run before Hadoop is started on
     * the cluster nodes. Defined below
     */
    public readonly bootstrapAction?: pulumi.Computed<{ args?: string[], name: string, path: string }[]>;
    public /*out*/ readonly clusterState: pulumi.Computed<string>;
    /**
     * List of configurations supplied for the EMR cluster you are creating
     */
    public readonly configurations?: pulumi.Computed<string>;
    /**
     * Number of Amazon EC2 instances used to execute the job flow. EMR will use one node as the cluster's master node and use the remainder of the nodes (`core_instance_count`-1) as core nodes. Cannot be specified if `instance_groups` is set. Default `1`
     */
    public readonly coreInstanceCount?: pulumi.Computed<number>;
    /**
     * The EC2 instance type of the slave nodes. Cannot be specified if `instance_groups` is set
     */
    public readonly coreInstanceType: pulumi.Computed<string>;
    /**
     * Attributes for the EC2 instances running the job
     * flow. Defined below
     */
    public readonly ec2Attributes?: pulumi.Computed<{ additionalMasterSecurityGroups?: string, additionalSlaveSecurityGroups?: string, emrManagedMasterSecurityGroup?: string, emrManagedSlaveSecurityGroup?: string, instanceProfile: string, keyName?: string, serviceAccessSecurityGroup?: string, subnetId?: string }[]>;
    /**
     * A list of `instance_group` objects for each instance group in the cluster. Exactly one of `master_instance_type` and `instance_group` must be specified. If `instance_group` is set, then it must contain a configuration block for at least the `MASTER` instance group type (as well as any additional instance groups). Defined below
     */
    public readonly instanceGroup?: pulumi.Computed<{ bidPrice?: string, ebsConfig?: { iops?: number, size: number, type: string, volumesPerInstance?: number }[], instanceCount?: number, instanceRole: string, instanceType: string, name?: string }[]>;
    /**
     * Switch on/off run cluster with no steps or when all steps are complete (default is on)
     */
    public readonly keepJobFlowAliveWhenNoSteps: pulumi.Computed<boolean>;
    /**
     * S3 bucket to write the log files of the job flow. If a value
     * is not provided, logs are not created
     */
    public readonly logUri?: pulumi.Computed<string>;
    /**
     * The EC2 instance type of the master node. Exactly one of `master_instance_type` and `instance_group` must be specified.
     */
    public readonly masterInstanceType?: pulumi.Computed<string>;
    /**
     * The public DNS name of the master EC2 instance.
     */
    public /*out*/ readonly masterPublicDns: pulumi.Computed<string>;
    /**
     * The name of the job flow
     */
    public readonly name: pulumi.Computed<string>;
    /**
     * The release label for the Amazon EMR release
     */
    public readonly releaseLabel: pulumi.Computed<string>;
    /**
     * The security configuration name to attach to the EMR cluster. Only valid for EMR clusters with `release_label` 4.8.0 or greater
     */
    public readonly securityConfiguration?: pulumi.Computed<string>;
    /**
     * IAM role that will be assumed by the Amazon EMR service to access AWS resources
     */
    public readonly serviceRole: pulumi.Computed<string>;
    /**
     * list of tags to apply to the EMR Cluster
     */
    public readonly tags?: pulumi.Computed<{[key: string]: any}>;
    /**
     * Switch on/off termination protection (default is off)
     */
    public readonly terminationProtection: pulumi.Computed<boolean>;
    /**
     * Whether the job flow is visible to all IAM users of the AWS account associated with the job flow. Default `true`
     */
    public readonly visibleToAllUsers?: pulumi.Computed<boolean>;

    /**
     * Create a Cluster resource with the given unique name, arguments, and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this Cluster instance
     * @param args A collection of arguments for creating this Cluster instance
     * @param dependsOn A optional array of additional resources this instance depends on
     */
    constructor(urnName: string, args: ClusterArgs, dependsOn?: pulumi.Resource[]) {
        if (args.releaseLabel === undefined) {
            throw new Error("Missing required property 'releaseLabel'");
        }
        if (args.serviceRole === undefined) {
            throw new Error("Missing required property 'serviceRole'");
        }
        super("aws:emr/cluster:Cluster", urnName, {
            "applications": args.applications,
            "autoscalingRole": args.autoscalingRole,
            "bootstrapAction": args.bootstrapAction,
            "configurations": args.configurations,
            "coreInstanceCount": args.coreInstanceCount,
            "coreInstanceType": args.coreInstanceType,
            "ec2Attributes": args.ec2Attributes,
            "instanceGroup": args.instanceGroup,
            "keepJobFlowAliveWhenNoSteps": args.keepJobFlowAliveWhenNoSteps,
            "logUri": args.logUri,
            "masterInstanceType": args.masterInstanceType,
            "name": args.name,
            "releaseLabel": args.releaseLabel,
            "securityConfiguration": args.securityConfiguration,
            "serviceRole": args.serviceRole,
            "tags": args.tags,
            "terminationProtection": args.terminationProtection,
            "visibleToAllUsers": args.visibleToAllUsers,
            "clusterState": undefined,
            "masterPublicDns": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a Cluster resource.
 */
export interface ClusterArgs {
    /**
     * A list of applications for the cluster. Valid values are: `Flink`, `Hadoop`, `Hive`, `Mahout`, `Pig`, and `Spark`. Case insensitive
     */
    readonly applications?: pulumi.ComputedValue<pulumi.ComputedValue<string>>[];
    /**
     * An IAM role for automatic scaling policies. The IAM role provides permissions that the automatic scaling feature requires to launch and terminate EC2 instances in an instance group.
     */
    readonly autoscalingRole?: pulumi.ComputedValue<string>;
    /**
     * List of bootstrap actions that will be run before Hadoop is started on
     * the cluster nodes. Defined below
     */
    readonly bootstrapAction?: pulumi.ComputedValue<{ args?: pulumi.ComputedValue<pulumi.ComputedValue<string>>[], name: pulumi.ComputedValue<string>, path: pulumi.ComputedValue<string> }>[];
    /**
     * List of configurations supplied for the EMR cluster you are creating
     */
    readonly configurations?: pulumi.ComputedValue<string>;
    /**
     * Number of Amazon EC2 instances used to execute the job flow. EMR will use one node as the cluster's master node and use the remainder of the nodes (`core_instance_count`-1) as core nodes. Cannot be specified if `instance_groups` is set. Default `1`
     */
    readonly coreInstanceCount?: pulumi.ComputedValue<number>;
    /**
     * The EC2 instance type of the slave nodes. Cannot be specified if `instance_groups` is set
     */
    readonly coreInstanceType?: pulumi.ComputedValue<string>;
    /**
     * Attributes for the EC2 instances running the job
     * flow. Defined below
     */
    readonly ec2Attributes?: pulumi.ComputedValue<{ additionalMasterSecurityGroups?: pulumi.ComputedValue<string>, additionalSlaveSecurityGroups?: pulumi.ComputedValue<string>, emrManagedMasterSecurityGroup?: pulumi.ComputedValue<string>, emrManagedSlaveSecurityGroup?: pulumi.ComputedValue<string>, instanceProfile: pulumi.ComputedValue<string>, keyName?: pulumi.ComputedValue<string>, serviceAccessSecurityGroup?: pulumi.ComputedValue<string>, subnetId?: pulumi.ComputedValue<string> }>[];
    /**
     * A list of `instance_group` objects for each instance group in the cluster. Exactly one of `master_instance_type` and `instance_group` must be specified. If `instance_group` is set, then it must contain a configuration block for at least the `MASTER` instance group type (as well as any additional instance groups). Defined below
     */
    readonly instanceGroup?: pulumi.ComputedValue<{ bidPrice?: pulumi.ComputedValue<string>, ebsConfig?: pulumi.ComputedValue<{ iops?: pulumi.ComputedValue<number>, size: pulumi.ComputedValue<number>, type: pulumi.ComputedValue<string>, volumesPerInstance?: pulumi.ComputedValue<number> }>[], instanceCount?: pulumi.ComputedValue<number>, instanceRole: pulumi.ComputedValue<string>, instanceType: pulumi.ComputedValue<string>, name?: pulumi.ComputedValue<string> }>[];
    /**
     * Switch on/off run cluster with no steps or when all steps are complete (default is on)
     */
    readonly keepJobFlowAliveWhenNoSteps?: pulumi.ComputedValue<boolean>;
    /**
     * S3 bucket to write the log files of the job flow. If a value
     * is not provided, logs are not created
     */
    readonly logUri?: pulumi.ComputedValue<string>;
    /**
     * The EC2 instance type of the master node. Exactly one of `master_instance_type` and `instance_group` must be specified.
     */
    readonly masterInstanceType?: pulumi.ComputedValue<string>;
    /**
     * The name of the job flow
     */
    readonly name?: pulumi.ComputedValue<string>;
    /**
     * The release label for the Amazon EMR release
     */
    readonly releaseLabel: pulumi.ComputedValue<string>;
    /**
     * The security configuration name to attach to the EMR cluster. Only valid for EMR clusters with `release_label` 4.8.0 or greater
     */
    readonly securityConfiguration?: pulumi.ComputedValue<string>;
    /**
     * IAM role that will be assumed by the Amazon EMR service to access AWS resources
     */
    readonly serviceRole: pulumi.ComputedValue<string>;
    /**
     * list of tags to apply to the EMR Cluster
     */
    readonly tags?: pulumi.ComputedValue<{[key: string]: any}>;
    /**
     * Switch on/off termination protection (default is off)
     */
    readonly terminationProtection?: pulumi.ComputedValue<boolean>;
    /**
     * Whether the job flow is visible to all IAM users of the AWS account associated with the job flow. Default `true`
     */
    readonly visibleToAllUsers?: pulumi.ComputedValue<boolean>;
}

