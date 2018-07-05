// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package glue

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides a Glue Job resource.
type Job struct {
	s *pulumi.ResourceState
}

// NewJob registers a new resource with the given unique name, arguments, and options.
func NewJob(ctx *pulumi.Context,
	name string, args *JobArgs, opts ...pulumi.ResourceOpt) (*Job, error) {
	if args == nil || args.Command == nil {
		return nil, errors.New("missing required argument 'Command'")
	}
	if args == nil || args.RoleArn == nil {
		return nil, errors.New("missing required argument 'RoleArn'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["allocatedCapacity"] = nil
		inputs["command"] = nil
		inputs["connections"] = nil
		inputs["defaultArguments"] = nil
		inputs["description"] = nil
		inputs["executionProperty"] = nil
		inputs["maxRetries"] = nil
		inputs["name"] = nil
		inputs["roleArn"] = nil
		inputs["timeout"] = nil
	} else {
		inputs["allocatedCapacity"] = args.AllocatedCapacity
		inputs["command"] = args.Command
		inputs["connections"] = args.Connections
		inputs["defaultArguments"] = args.DefaultArguments
		inputs["description"] = args.Description
		inputs["executionProperty"] = args.ExecutionProperty
		inputs["maxRetries"] = args.MaxRetries
		inputs["name"] = args.Name
		inputs["roleArn"] = args.RoleArn
		inputs["timeout"] = args.Timeout
	}
	s, err := ctx.RegisterResource("aws:glue/job:Job", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Job{s: s}, nil
}

// GetJob gets an existing Job resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetJob(ctx *pulumi.Context,
	name string, id pulumi.ID, state *JobState, opts ...pulumi.ResourceOpt) (*Job, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["allocatedCapacity"] = state.AllocatedCapacity
		inputs["command"] = state.Command
		inputs["connections"] = state.Connections
		inputs["defaultArguments"] = state.DefaultArguments
		inputs["description"] = state.Description
		inputs["executionProperty"] = state.ExecutionProperty
		inputs["maxRetries"] = state.MaxRetries
		inputs["name"] = state.Name
		inputs["roleArn"] = state.RoleArn
		inputs["timeout"] = state.Timeout
	}
	s, err := ctx.ReadResource("aws:glue/job:Job", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Job{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Job) URN() *pulumi.URNOutput {
	return r.s.URN
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Job) ID() *pulumi.IDOutput {
	return r.s.ID
}

// The number of AWS Glue data processing units (DPUs) to allocate to this Job. At least 2 DPUs need to be allocated; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory.
func (r *Job) AllocatedCapacity() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["allocatedCapacity"])
}

// The command of the job. Defined below.
func (r *Job) Command() *pulumi.Output {
	return r.s.State["command"]
}

// The list of connections used for this job.
func (r *Job) Connections() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["connections"])
}

// The map of default arguments for this job. You can specify arguments here that your own job-execution script consumes, as well as arguments that AWS Glue itself consumes. For information about how to specify and consume your own Job arguments, see the [Calling AWS Glue APIs in Python](http://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html) topic in the developer guide. For information about the key-value pairs that AWS Glue consumes to set up your job, see the [Special Parameters Used by AWS Glue](http://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-glue-arguments.html) topic in the developer guide.
func (r *Job) DefaultArguments() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["defaultArguments"])
}

// Description of the job.
func (r *Job) Description() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["description"])
}

// Execution property of the job. Defined below.
func (r *Job) ExecutionProperty() *pulumi.Output {
	return r.s.State["executionProperty"]
}

// The maximum number of times to retry this job if it fails.
func (r *Job) MaxRetries() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["maxRetries"])
}

// The name of the job command. Defaults to `glueetl`
func (r *Job) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// The ARN of the IAM role associated with this job.
func (r *Job) RoleArn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["roleArn"])
}

// The job timeout in minutes. The default is 2880 minutes (48 hours).
func (r *Job) Timeout() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["timeout"])
}

// Input properties used for looking up and filtering Job resources.
type JobState struct {
	// The number of AWS Glue data processing units (DPUs) to allocate to this Job. At least 2 DPUs need to be allocated; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory.
	AllocatedCapacity interface{}
	// The command of the job. Defined below.
	Command interface{}
	// The list of connections used for this job.
	Connections interface{}
	// The map of default arguments for this job. You can specify arguments here that your own job-execution script consumes, as well as arguments that AWS Glue itself consumes. For information about how to specify and consume your own Job arguments, see the [Calling AWS Glue APIs in Python](http://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html) topic in the developer guide. For information about the key-value pairs that AWS Glue consumes to set up your job, see the [Special Parameters Used by AWS Glue](http://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-glue-arguments.html) topic in the developer guide.
	DefaultArguments interface{}
	// Description of the job.
	Description interface{}
	// Execution property of the job. Defined below.
	ExecutionProperty interface{}
	// The maximum number of times to retry this job if it fails.
	MaxRetries interface{}
	// The name of the job command. Defaults to `glueetl`
	Name interface{}
	// The ARN of the IAM role associated with this job.
	RoleArn interface{}
	// The job timeout in minutes. The default is 2880 minutes (48 hours).
	Timeout interface{}
}

// The set of arguments for constructing a Job resource.
type JobArgs struct {
	// The number of AWS Glue data processing units (DPUs) to allocate to this Job. At least 2 DPUs need to be allocated; the default is 10. A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory.
	AllocatedCapacity interface{}
	// The command of the job. Defined below.
	Command interface{}
	// The list of connections used for this job.
	Connections interface{}
	// The map of default arguments for this job. You can specify arguments here that your own job-execution script consumes, as well as arguments that AWS Glue itself consumes. For information about how to specify and consume your own Job arguments, see the [Calling AWS Glue APIs in Python](http://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html) topic in the developer guide. For information about the key-value pairs that AWS Glue consumes to set up your job, see the [Special Parameters Used by AWS Glue](http://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-glue-arguments.html) topic in the developer guide.
	DefaultArguments interface{}
	// Description of the job.
	Description interface{}
	// Execution property of the job. Defined below.
	ExecutionProperty interface{}
	// The maximum number of times to retry this job if it fails.
	MaxRetries interface{}
	// The name of the job command. Defaults to `glueetl`
	Name interface{}
	// The ARN of the IAM role associated with this job.
	RoleArn interface{}
	// The job timeout in minutes. The default is 2880 minutes (48 hours).
	Timeout interface{}
}
