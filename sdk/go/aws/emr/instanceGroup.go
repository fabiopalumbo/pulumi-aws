// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package emr

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/emr_instance_group.html.markdown.
type InstanceGroup struct {
	s *pulumi.ResourceState
}

// NewInstanceGroup registers a new resource with the given unique name, arguments, and options.
func NewInstanceGroup(ctx *pulumi.Context,
	name string, args *InstanceGroupArgs, opts ...pulumi.ResourceOpt) (*InstanceGroup, error) {
	if args == nil || args.ClusterId == nil {
		return nil, errors.New("missing required argument 'ClusterId'")
	}
	if args == nil || args.InstanceType == nil {
		return nil, errors.New("missing required argument 'InstanceType'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["autoscalingPolicy"] = nil
		inputs["bidPrice"] = nil
		inputs["clusterId"] = nil
		inputs["ebsConfigs"] = nil
		inputs["ebsOptimized"] = nil
		inputs["instanceCount"] = nil
		inputs["instanceType"] = nil
		inputs["name"] = nil
	} else {
		inputs["autoscalingPolicy"] = args.AutoscalingPolicy
		inputs["bidPrice"] = args.BidPrice
		inputs["clusterId"] = args.ClusterId
		inputs["ebsConfigs"] = args.EbsConfigs
		inputs["ebsOptimized"] = args.EbsOptimized
		inputs["instanceCount"] = args.InstanceCount
		inputs["instanceType"] = args.InstanceType
		inputs["name"] = args.Name
	}
	inputs["runningInstanceCount"] = nil
	inputs["status"] = nil
	s, err := ctx.RegisterResource("aws:emr/instanceGroup:InstanceGroup", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &InstanceGroup{s: s}, nil
}

// GetInstanceGroup gets an existing InstanceGroup resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetInstanceGroup(ctx *pulumi.Context,
	name string, id pulumi.ID, state *InstanceGroupState, opts ...pulumi.ResourceOpt) (*InstanceGroup, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["autoscalingPolicy"] = state.AutoscalingPolicy
		inputs["bidPrice"] = state.BidPrice
		inputs["clusterId"] = state.ClusterId
		inputs["ebsConfigs"] = state.EbsConfigs
		inputs["ebsOptimized"] = state.EbsOptimized
		inputs["instanceCount"] = state.InstanceCount
		inputs["instanceType"] = state.InstanceType
		inputs["name"] = state.Name
		inputs["runningInstanceCount"] = state.RunningInstanceCount
		inputs["status"] = state.Status
	}
	s, err := ctx.ReadResource("aws:emr/instanceGroup:InstanceGroup", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &InstanceGroup{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *InstanceGroup) URN() *pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *InstanceGroup) ID() *pulumi.IDOutput {
	return r.s.ID()
}

// The autoscaling policy document. This is a JSON formatted string. See [EMR Auto Scaling](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-automatic-scaling.html)
func (r *InstanceGroup) AutoscalingPolicy() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["autoscalingPolicy"])
}

// If set, the bid price for each EC2 instance in the instance group, expressed in USD. By setting this attribute, the instance group is being declared as a Spot Instance, and will implicitly create a Spot request. Leave this blank to use On-Demand Instances.
func (r *InstanceGroup) BidPrice() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["bidPrice"])
}

// ID of the EMR Cluster to attach to. Changing this forces a new resource to be created.
func (r *InstanceGroup) ClusterId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["clusterId"])
}

// One or more `ebs_config` blocks as defined below. Changing this forces a new resource to be created.
func (r *InstanceGroup) EbsConfigs() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["ebsConfigs"])
}

// Indicates whether an Amazon EBS volume is EBS-optimized. Changing this forces a new resource to be created.
func (r *InstanceGroup) EbsOptimized() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["ebsOptimized"])
}

// target number of instances for the instance group. defaults to 0.
func (r *InstanceGroup) InstanceCount() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["instanceCount"])
}

// The EC2 instance type for all instances in the instance group. Changing this forces a new resource to be created.
func (r *InstanceGroup) InstanceType() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["instanceType"])
}

// Human friendly name given to the instance group. Changing this forces a new resource to be created.
func (r *InstanceGroup) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

func (r *InstanceGroup) RunningInstanceCount() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["runningInstanceCount"])
}

func (r *InstanceGroup) Status() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["status"])
}

// Input properties used for looking up and filtering InstanceGroup resources.
type InstanceGroupState struct {
	// The autoscaling policy document. This is a JSON formatted string. See [EMR Auto Scaling](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-automatic-scaling.html)
	AutoscalingPolicy interface{}
	// If set, the bid price for each EC2 instance in the instance group, expressed in USD. By setting this attribute, the instance group is being declared as a Spot Instance, and will implicitly create a Spot request. Leave this blank to use On-Demand Instances.
	BidPrice interface{}
	// ID of the EMR Cluster to attach to. Changing this forces a new resource to be created.
	ClusterId interface{}
	// One or more `ebs_config` blocks as defined below. Changing this forces a new resource to be created.
	EbsConfigs interface{}
	// Indicates whether an Amazon EBS volume is EBS-optimized. Changing this forces a new resource to be created.
	EbsOptimized interface{}
	// target number of instances for the instance group. defaults to 0.
	InstanceCount interface{}
	// The EC2 instance type for all instances in the instance group. Changing this forces a new resource to be created.
	InstanceType interface{}
	// Human friendly name given to the instance group. Changing this forces a new resource to be created.
	Name interface{}
	RunningInstanceCount interface{}
	Status interface{}
}

// The set of arguments for constructing a InstanceGroup resource.
type InstanceGroupArgs struct {
	// The autoscaling policy document. This is a JSON formatted string. See [EMR Auto Scaling](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-automatic-scaling.html)
	AutoscalingPolicy interface{}
	// If set, the bid price for each EC2 instance in the instance group, expressed in USD. By setting this attribute, the instance group is being declared as a Spot Instance, and will implicitly create a Spot request. Leave this blank to use On-Demand Instances.
	BidPrice interface{}
	// ID of the EMR Cluster to attach to. Changing this forces a new resource to be created.
	ClusterId interface{}
	// One or more `ebs_config` blocks as defined below. Changing this forces a new resource to be created.
	EbsConfigs interface{}
	// Indicates whether an Amazon EBS volume is EBS-optimized. Changing this forces a new resource to be created.
	EbsOptimized interface{}
	// target number of instances for the instance group. defaults to 0.
	InstanceCount interface{}
	// The EC2 instance type for all instances in the instance group. Changing this forces a new resource to be created.
	InstanceType interface{}
	// Human friendly name given to the instance group. Changing this forces a new resource to be created.
	Name interface{}
}
