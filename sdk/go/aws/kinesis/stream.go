// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package kinesis

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides a Kinesis Stream resource. Amazon Kinesis is a managed service that
// scales elastically for real-time processing of streaming big data.
// 
// For more details, see the [Amazon Kinesis Documentation][1].
type Stream struct {
	s *pulumi.ResourceState
}

// NewStream registers a new resource with the given unique name, arguments, and options.
func NewStream(ctx *pulumi.Context,
	name string, args *StreamArgs, opts ...pulumi.ResourceOpt) (*Stream, error) {
	if args == nil || args.ShardCount == nil {
		return nil, errors.New("missing required argument 'ShardCount'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["arn"] = nil
		inputs["encryptionType"] = nil
		inputs["enforceConsumerDeletion"] = nil
		inputs["kmsKeyId"] = nil
		inputs["name"] = nil
		inputs["retentionPeriod"] = nil
		inputs["shardCount"] = nil
		inputs["shardLevelMetrics"] = nil
		inputs["tags"] = nil
	} else {
		inputs["arn"] = args.Arn
		inputs["encryptionType"] = args.EncryptionType
		inputs["enforceConsumerDeletion"] = args.EnforceConsumerDeletion
		inputs["kmsKeyId"] = args.KmsKeyId
		inputs["name"] = args.Name
		inputs["retentionPeriod"] = args.RetentionPeriod
		inputs["shardCount"] = args.ShardCount
		inputs["shardLevelMetrics"] = args.ShardLevelMetrics
		inputs["tags"] = args.Tags
	}
	s, err := ctx.RegisterResource("aws:kinesis/stream:Stream", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Stream{s: s}, nil
}

// GetStream gets an existing Stream resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetStream(ctx *pulumi.Context,
	name string, id pulumi.ID, state *StreamState, opts ...pulumi.ResourceOpt) (*Stream, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["arn"] = state.Arn
		inputs["encryptionType"] = state.EncryptionType
		inputs["enforceConsumerDeletion"] = state.EnforceConsumerDeletion
		inputs["kmsKeyId"] = state.KmsKeyId
		inputs["name"] = state.Name
		inputs["retentionPeriod"] = state.RetentionPeriod
		inputs["shardCount"] = state.ShardCount
		inputs["shardLevelMetrics"] = state.ShardLevelMetrics
		inputs["tags"] = state.Tags
	}
	s, err := ctx.ReadResource("aws:kinesis/stream:Stream", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Stream{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Stream) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Stream) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// The Amazon Resource Name (ARN) specifying the Stream (same as `id`)
func (r *Stream) Arn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["arn"])
}

// The encryption type to use. The only acceptable values are `NONE` or `KMS`. The default value is `NONE`.
func (r *Stream) EncryptionType() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["encryptionType"])
}

// A boolean that indicates all registered consumers should be deregistered from the stream so that the stream can be destroyed without error. The default value is `false`.
func (r *Stream) EnforceConsumerDeletion() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["enforceConsumerDeletion"])
}

// The GUID for the customer-managed KMS key to use for encryption. You can also use a Kinesis-owned master key by specifying the alias `alias/aws/kinesis`.
func (r *Stream) KmsKeyId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["kmsKeyId"])
}

// A name to identify the stream. This is unique to the AWS account and region the Stream is created in.
func (r *Stream) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// Length of time data records are accessible after they are added to the stream. The maximum value of a stream's retention period is 168 hours. Minimum value is 24. Default is 24.
func (r *Stream) RetentionPeriod() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["retentionPeriod"])
}

// The number of shards that the stream will use.
// Amazon has guidelines for specifying the Stream size that should be referenced when creating a Kinesis stream. See [Amazon Kinesis Streams][2] for more.
func (r *Stream) ShardCount() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["shardCount"])
}

// A list of shard-level CloudWatch metrics which can be enabled for the stream. See [Monitoring with CloudWatch][3] for more. Note that the value ALL should not be used; instead you should provide an explicit list of metrics you wish to enable.
func (r *Stream) ShardLevelMetrics() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["shardLevelMetrics"])
}

// A mapping of tags to assign to the resource.
func (r *Stream) Tags() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["tags"])
}

// Input properties used for looking up and filtering Stream resources.
type StreamState struct {
	// The Amazon Resource Name (ARN) specifying the Stream (same as `id`)
	Arn interface{}
	// The encryption type to use. The only acceptable values are `NONE` or `KMS`. The default value is `NONE`.
	EncryptionType interface{}
	// A boolean that indicates all registered consumers should be deregistered from the stream so that the stream can be destroyed without error. The default value is `false`.
	EnforceConsumerDeletion interface{}
	// The GUID for the customer-managed KMS key to use for encryption. You can also use a Kinesis-owned master key by specifying the alias `alias/aws/kinesis`.
	KmsKeyId interface{}
	// A name to identify the stream. This is unique to the AWS account and region the Stream is created in.
	Name interface{}
	// Length of time data records are accessible after they are added to the stream. The maximum value of a stream's retention period is 168 hours. Minimum value is 24. Default is 24.
	RetentionPeriod interface{}
	// The number of shards that the stream will use.
	// Amazon has guidelines for specifying the Stream size that should be referenced when creating a Kinesis stream. See [Amazon Kinesis Streams][2] for more.
	ShardCount interface{}
	// A list of shard-level CloudWatch metrics which can be enabled for the stream. See [Monitoring with CloudWatch][3] for more. Note that the value ALL should not be used; instead you should provide an explicit list of metrics you wish to enable.
	ShardLevelMetrics interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}

// The set of arguments for constructing a Stream resource.
type StreamArgs struct {
	// The Amazon Resource Name (ARN) specifying the Stream (same as `id`)
	Arn interface{}
	// The encryption type to use. The only acceptable values are `NONE` or `KMS`. The default value is `NONE`.
	EncryptionType interface{}
	// A boolean that indicates all registered consumers should be deregistered from the stream so that the stream can be destroyed without error. The default value is `false`.
	EnforceConsumerDeletion interface{}
	// The GUID for the customer-managed KMS key to use for encryption. You can also use a Kinesis-owned master key by specifying the alias `alias/aws/kinesis`.
	KmsKeyId interface{}
	// A name to identify the stream. This is unique to the AWS account and region the Stream is created in.
	Name interface{}
	// Length of time data records are accessible after they are added to the stream. The maximum value of a stream's retention period is 168 hours. Minimum value is 24. Default is 24.
	RetentionPeriod interface{}
	// The number of shards that the stream will use.
	// Amazon has guidelines for specifying the Stream size that should be referenced when creating a Kinesis stream. See [Amazon Kinesis Streams][2] for more.
	ShardCount interface{}
	// A list of shard-level CloudWatch metrics which can be enabled for the stream. See [Monitoring with CloudWatch][3] for more. Note that the value ALL should not be used; instead you should provide an explicit list of metrics you wish to enable.
	ShardLevelMetrics interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
}
