// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package rds

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/rds_cluster_instance.html.markdown.
type ClusterInstance struct {
	s *pulumi.ResourceState
}

// NewClusterInstance registers a new resource with the given unique name, arguments, and options.
func NewClusterInstance(ctx *pulumi.Context,
	name string, args *ClusterInstanceArgs, opts ...pulumi.ResourceOpt) (*ClusterInstance, error) {
	if args == nil || args.ClusterIdentifier == nil {
		return nil, errors.New("missing required argument 'ClusterIdentifier'")
	}
	if args == nil || args.InstanceClass == nil {
		return nil, errors.New("missing required argument 'InstanceClass'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["applyImmediately"] = nil
		inputs["autoMinorVersionUpgrade"] = nil
		inputs["availabilityZone"] = nil
		inputs["clusterIdentifier"] = nil
		inputs["copyTagsToSnapshot"] = nil
		inputs["dbParameterGroupName"] = nil
		inputs["dbSubnetGroupName"] = nil
		inputs["engine"] = nil
		inputs["engineVersion"] = nil
		inputs["identifier"] = nil
		inputs["identifierPrefix"] = nil
		inputs["instanceClass"] = nil
		inputs["monitoringInterval"] = nil
		inputs["monitoringRoleArn"] = nil
		inputs["performanceInsightsEnabled"] = nil
		inputs["performanceInsightsKmsKeyId"] = nil
		inputs["preferredBackupWindow"] = nil
		inputs["preferredMaintenanceWindow"] = nil
		inputs["promotionTier"] = nil
		inputs["publiclyAccessible"] = nil
		inputs["tags"] = nil
	} else {
		inputs["applyImmediately"] = args.ApplyImmediately
		inputs["autoMinorVersionUpgrade"] = args.AutoMinorVersionUpgrade
		inputs["availabilityZone"] = args.AvailabilityZone
		inputs["clusterIdentifier"] = args.ClusterIdentifier
		inputs["copyTagsToSnapshot"] = args.CopyTagsToSnapshot
		inputs["dbParameterGroupName"] = args.DbParameterGroupName
		inputs["dbSubnetGroupName"] = args.DbSubnetGroupName
		inputs["engine"] = args.Engine
		inputs["engineVersion"] = args.EngineVersion
		inputs["identifier"] = args.Identifier
		inputs["identifierPrefix"] = args.IdentifierPrefix
		inputs["instanceClass"] = args.InstanceClass
		inputs["monitoringInterval"] = args.MonitoringInterval
		inputs["monitoringRoleArn"] = args.MonitoringRoleArn
		inputs["performanceInsightsEnabled"] = args.PerformanceInsightsEnabled
		inputs["performanceInsightsKmsKeyId"] = args.PerformanceInsightsKmsKeyId
		inputs["preferredBackupWindow"] = args.PreferredBackupWindow
		inputs["preferredMaintenanceWindow"] = args.PreferredMaintenanceWindow
		inputs["promotionTier"] = args.PromotionTier
		inputs["publiclyAccessible"] = args.PubliclyAccessible
		inputs["tags"] = args.Tags
	}
	inputs["arn"] = nil
	inputs["dbiResourceId"] = nil
	inputs["endpoint"] = nil
	inputs["kmsKeyId"] = nil
	inputs["port"] = nil
	inputs["storageEncrypted"] = nil
	inputs["writer"] = nil
	s, err := ctx.RegisterResource("aws:rds/clusterInstance:ClusterInstance", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &ClusterInstance{s: s}, nil
}

// GetClusterInstance gets an existing ClusterInstance resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetClusterInstance(ctx *pulumi.Context,
	name string, id pulumi.ID, state *ClusterInstanceState, opts ...pulumi.ResourceOpt) (*ClusterInstance, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["applyImmediately"] = state.ApplyImmediately
		inputs["arn"] = state.Arn
		inputs["autoMinorVersionUpgrade"] = state.AutoMinorVersionUpgrade
		inputs["availabilityZone"] = state.AvailabilityZone
		inputs["clusterIdentifier"] = state.ClusterIdentifier
		inputs["copyTagsToSnapshot"] = state.CopyTagsToSnapshot
		inputs["dbParameterGroupName"] = state.DbParameterGroupName
		inputs["dbSubnetGroupName"] = state.DbSubnetGroupName
		inputs["dbiResourceId"] = state.DbiResourceId
		inputs["endpoint"] = state.Endpoint
		inputs["engine"] = state.Engine
		inputs["engineVersion"] = state.EngineVersion
		inputs["identifier"] = state.Identifier
		inputs["identifierPrefix"] = state.IdentifierPrefix
		inputs["instanceClass"] = state.InstanceClass
		inputs["kmsKeyId"] = state.KmsKeyId
		inputs["monitoringInterval"] = state.MonitoringInterval
		inputs["monitoringRoleArn"] = state.MonitoringRoleArn
		inputs["performanceInsightsEnabled"] = state.PerformanceInsightsEnabled
		inputs["performanceInsightsKmsKeyId"] = state.PerformanceInsightsKmsKeyId
		inputs["port"] = state.Port
		inputs["preferredBackupWindow"] = state.PreferredBackupWindow
		inputs["preferredMaintenanceWindow"] = state.PreferredMaintenanceWindow
		inputs["promotionTier"] = state.PromotionTier
		inputs["publiclyAccessible"] = state.PubliclyAccessible
		inputs["storageEncrypted"] = state.StorageEncrypted
		inputs["tags"] = state.Tags
		inputs["writer"] = state.Writer
	}
	s, err := ctx.ReadResource("aws:rds/clusterInstance:ClusterInstance", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &ClusterInstance{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *ClusterInstance) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *ClusterInstance) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// Specifies whether any database modifications
// are applied immediately, or during the next maintenance window. Default is`false`.
func (r *ClusterInstance) ApplyImmediately() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["applyImmediately"])
}

// Amazon Resource Name (ARN) of cluster instance
func (r *ClusterInstance) Arn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["arn"])
}

// Indicates that minor engine upgrades will be applied automatically to the DB instance during the maintenance window. Default `true`.
func (r *ClusterInstance) AutoMinorVersionUpgrade() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["autoMinorVersionUpgrade"])
}

// The EC2 Availability Zone that the DB instance is created in. See [docs](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html) about the details.
func (r *ClusterInstance) AvailabilityZone() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["availabilityZone"])
}

// The identifier of the [`aws_rds_cluster`](https://www.terraform.io/docs/providers/aws/r/rds_cluster.html) in which to launch this instance.
func (r *ClusterInstance) ClusterIdentifier() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["clusterIdentifier"])
}

// Indicates whether to copy all of the user-defined tags from the DB instance to snapshots of the DB instance. Default `false`.
func (r *ClusterInstance) CopyTagsToSnapshot() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["copyTagsToSnapshot"])
}

// The name of the DB parameter group to associate with this instance.
func (r *ClusterInstance) DbParameterGroupName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["dbParameterGroupName"])
}

// A DB subnet group to associate with this DB instance. **NOTE:** This must match the `db_subnet_group_name` of the attached [`aws_rds_cluster`](https://www.terraform.io/docs/providers/aws/r/rds_cluster.html).
func (r *ClusterInstance) DbSubnetGroupName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["dbSubnetGroupName"])
}

// The region-unique, immutable identifier for the DB instance.
func (r *ClusterInstance) DbiResourceId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["dbiResourceId"])
}

// The DNS address for this instance. May not be writable
func (r *ClusterInstance) Endpoint() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["endpoint"])
}

// The name of the database engine to be used for the RDS instance. Defaults to `aurora`. Valid Values: `aurora`, `aurora-mysql`, `aurora-postgresql`.
// For information on the difference between the available Aurora MySQL engines
// see [Comparison between Aurora MySQL 1 and Aurora MySQL 2](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AuroraMySQL.Updates.20180206.html)
// in the Amazon RDS User Guide.
func (r *ClusterInstance) Engine() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["engine"])
}

// The database engine version.
func (r *ClusterInstance) EngineVersion() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["engineVersion"])
}

func (r *ClusterInstance) Identifier() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["identifier"])
}

// Creates a unique identifier beginning with the specified prefix. Conflicts with `identifier`.
func (r *ClusterInstance) IdentifierPrefix() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["identifierPrefix"])
}

// The instance class to use. For details on CPU
// and memory, see [Scaling Aurora DB Instances][4]. Aurora uses `db.*` instance classes/types. Please see [AWS Documentation][7] for currently available instance classes and complete details.
func (r *ClusterInstance) InstanceClass() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["instanceClass"])
}

// The ARN for the KMS encryption key if one is set to the cluster.
func (r *ClusterInstance) KmsKeyId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["kmsKeyId"])
}

// The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0. Valid Values: 0, 1, 5, 10, 15, 30, 60.
func (r *ClusterInstance) MonitoringInterval() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["monitoringInterval"])
}

// The ARN for the IAM role that permits RDS to send
// enhanced monitoring metrics to CloudWatch Logs. You can find more information on the [AWS Documentation](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html)
// what IAM permissions are needed to allow Enhanced Monitoring for RDS Instances.
func (r *ClusterInstance) MonitoringRoleArn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["monitoringRoleArn"])
}

// Specifies whether Performance Insights is enabled or not.
func (r *ClusterInstance) PerformanceInsightsEnabled() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["performanceInsightsEnabled"])
}

// The ARN for the KMS key to encrypt Performance Insights data. When specifying `performance_insights_kms_key_id`, `performance_insights_enabled` needs to be set to true.
func (r *ClusterInstance) PerformanceInsightsKmsKeyId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["performanceInsightsKmsKeyId"])
}

// The database port
func (r *ClusterInstance) Port() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["port"])
}

// The daily time range during which automated backups are created if automated backups are enabled.
// Eg: "04:00-09:00"
func (r *ClusterInstance) PreferredBackupWindow() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["preferredBackupWindow"])
}

// The window to perform maintenance in.
// Syntax: "ddd:hh24:mi-ddd:hh24:mi". Eg: "Mon:00:00-Mon:03:00".
func (r *ClusterInstance) PreferredMaintenanceWindow() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["preferredMaintenanceWindow"])
}

// Default 0. Failover Priority setting on instance level. The reader who has lower tier has higher priority to get promoter to writer.
func (r *ClusterInstance) PromotionTier() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["promotionTier"])
}

// Bool to control if instance is publicly accessible.
// Default `false`. See the documentation on [Creating DB Instances][6] for more
// details on controlling this property.
func (r *ClusterInstance) PubliclyAccessible() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["publiclyAccessible"])
}

// Specifies whether the DB cluster is encrypted.
func (r *ClusterInstance) StorageEncrypted() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["storageEncrypted"])
}

// A mapping of tags to assign to the instance.
func (r *ClusterInstance) Tags() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["tags"])
}

// Boolean indicating if this instance is writable. `False` indicates this instance is a read replica.
func (r *ClusterInstance) Writer() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["writer"])
}

// Input properties used for looking up and filtering ClusterInstance resources.
type ClusterInstanceState struct {
	// Specifies whether any database modifications
	// are applied immediately, or during the next maintenance window. Default is`false`.
	ApplyImmediately interface{}
	// Amazon Resource Name (ARN) of cluster instance
	Arn interface{}
	// Indicates that minor engine upgrades will be applied automatically to the DB instance during the maintenance window. Default `true`.
	AutoMinorVersionUpgrade interface{}
	// The EC2 Availability Zone that the DB instance is created in. See [docs](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html) about the details.
	AvailabilityZone interface{}
	// The identifier of the [`aws_rds_cluster`](https://www.terraform.io/docs/providers/aws/r/rds_cluster.html) in which to launch this instance.
	ClusterIdentifier interface{}
	// Indicates whether to copy all of the user-defined tags from the DB instance to snapshots of the DB instance. Default `false`.
	CopyTagsToSnapshot interface{}
	// The name of the DB parameter group to associate with this instance.
	DbParameterGroupName interface{}
	// A DB subnet group to associate with this DB instance. **NOTE:** This must match the `db_subnet_group_name` of the attached [`aws_rds_cluster`](https://www.terraform.io/docs/providers/aws/r/rds_cluster.html).
	DbSubnetGroupName interface{}
	// The region-unique, immutable identifier for the DB instance.
	DbiResourceId interface{}
	// The DNS address for this instance. May not be writable
	Endpoint interface{}
	// The name of the database engine to be used for the RDS instance. Defaults to `aurora`. Valid Values: `aurora`, `aurora-mysql`, `aurora-postgresql`.
	// For information on the difference between the available Aurora MySQL engines
	// see [Comparison between Aurora MySQL 1 and Aurora MySQL 2](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AuroraMySQL.Updates.20180206.html)
	// in the Amazon RDS User Guide.
	Engine interface{}
	// The database engine version.
	EngineVersion interface{}
	Identifier interface{}
	// Creates a unique identifier beginning with the specified prefix. Conflicts with `identifier`.
	IdentifierPrefix interface{}
	// The instance class to use. For details on CPU
	// and memory, see [Scaling Aurora DB Instances][4]. Aurora uses `db.*` instance classes/types. Please see [AWS Documentation][7] for currently available instance classes and complete details.
	InstanceClass interface{}
	// The ARN for the KMS encryption key if one is set to the cluster.
	KmsKeyId interface{}
	// The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0. Valid Values: 0, 1, 5, 10, 15, 30, 60.
	MonitoringInterval interface{}
	// The ARN for the IAM role that permits RDS to send
	// enhanced monitoring metrics to CloudWatch Logs. You can find more information on the [AWS Documentation](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html)
	// what IAM permissions are needed to allow Enhanced Monitoring for RDS Instances.
	MonitoringRoleArn interface{}
	// Specifies whether Performance Insights is enabled or not.
	PerformanceInsightsEnabled interface{}
	// The ARN for the KMS key to encrypt Performance Insights data. When specifying `performance_insights_kms_key_id`, `performance_insights_enabled` needs to be set to true.
	PerformanceInsightsKmsKeyId interface{}
	// The database port
	Port interface{}
	// The daily time range during which automated backups are created if automated backups are enabled.
	// Eg: "04:00-09:00"
	PreferredBackupWindow interface{}
	// The window to perform maintenance in.
	// Syntax: "ddd:hh24:mi-ddd:hh24:mi". Eg: "Mon:00:00-Mon:03:00".
	PreferredMaintenanceWindow interface{}
	// Default 0. Failover Priority setting on instance level. The reader who has lower tier has higher priority to get promoter to writer.
	PromotionTier interface{}
	// Bool to control if instance is publicly accessible.
	// Default `false`. See the documentation on [Creating DB Instances][6] for more
	// details on controlling this property.
	PubliclyAccessible interface{}
	// Specifies whether the DB cluster is encrypted.
	StorageEncrypted interface{}
	// A mapping of tags to assign to the instance.
	Tags interface{}
	// Boolean indicating if this instance is writable. `False` indicates this instance is a read replica.
	Writer interface{}
}

// The set of arguments for constructing a ClusterInstance resource.
type ClusterInstanceArgs struct {
	// Specifies whether any database modifications
	// are applied immediately, or during the next maintenance window. Default is`false`.
	ApplyImmediately interface{}
	// Indicates that minor engine upgrades will be applied automatically to the DB instance during the maintenance window. Default `true`.
	AutoMinorVersionUpgrade interface{}
	// The EC2 Availability Zone that the DB instance is created in. See [docs](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html) about the details.
	AvailabilityZone interface{}
	// The identifier of the [`aws_rds_cluster`](https://www.terraform.io/docs/providers/aws/r/rds_cluster.html) in which to launch this instance.
	ClusterIdentifier interface{}
	// Indicates whether to copy all of the user-defined tags from the DB instance to snapshots of the DB instance. Default `false`.
	CopyTagsToSnapshot interface{}
	// The name of the DB parameter group to associate with this instance.
	DbParameterGroupName interface{}
	// A DB subnet group to associate with this DB instance. **NOTE:** This must match the `db_subnet_group_name` of the attached [`aws_rds_cluster`](https://www.terraform.io/docs/providers/aws/r/rds_cluster.html).
	DbSubnetGroupName interface{}
	// The name of the database engine to be used for the RDS instance. Defaults to `aurora`. Valid Values: `aurora`, `aurora-mysql`, `aurora-postgresql`.
	// For information on the difference between the available Aurora MySQL engines
	// see [Comparison between Aurora MySQL 1 and Aurora MySQL 2](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AuroraMySQL.Updates.20180206.html)
	// in the Amazon RDS User Guide.
	Engine interface{}
	// The database engine version.
	EngineVersion interface{}
	Identifier interface{}
	// Creates a unique identifier beginning with the specified prefix. Conflicts with `identifier`.
	IdentifierPrefix interface{}
	// The instance class to use. For details on CPU
	// and memory, see [Scaling Aurora DB Instances][4]. Aurora uses `db.*` instance classes/types. Please see [AWS Documentation][7] for currently available instance classes and complete details.
	InstanceClass interface{}
	// The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0. Valid Values: 0, 1, 5, 10, 15, 30, 60.
	MonitoringInterval interface{}
	// The ARN for the IAM role that permits RDS to send
	// enhanced monitoring metrics to CloudWatch Logs. You can find more information on the [AWS Documentation](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html)
	// what IAM permissions are needed to allow Enhanced Monitoring for RDS Instances.
	MonitoringRoleArn interface{}
	// Specifies whether Performance Insights is enabled or not.
	PerformanceInsightsEnabled interface{}
	// The ARN for the KMS key to encrypt Performance Insights data. When specifying `performance_insights_kms_key_id`, `performance_insights_enabled` needs to be set to true.
	PerformanceInsightsKmsKeyId interface{}
	// The daily time range during which automated backups are created if automated backups are enabled.
	// Eg: "04:00-09:00"
	PreferredBackupWindow interface{}
	// The window to perform maintenance in.
	// Syntax: "ddd:hh24:mi-ddd:hh24:mi". Eg: "Mon:00:00-Mon:03:00".
	PreferredMaintenanceWindow interface{}
	// Default 0. Failover Priority setting on instance level. The reader who has lower tier has higher priority to get promoter to writer.
	PromotionTier interface{}
	// Bool to control if instance is publicly accessible.
	// Default `false`. See the documentation on [Creating DB Instances][6] for more
	// details on controlling this property.
	PubliclyAccessible interface{}
	// A mapping of tags to assign to the instance.
	Tags interface{}
}
