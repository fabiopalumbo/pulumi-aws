// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package cognito

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides a Cognito User Pool Domain resource.
type UserPoolDomain struct {
	s *pulumi.ResourceState
}

// NewUserPoolDomain registers a new resource with the given unique name, arguments, and options.
func NewUserPoolDomain(ctx *pulumi.Context,
	name string, args *UserPoolDomainArgs, opts ...pulumi.ResourceOpt) (*UserPoolDomain, error) {
	if args == nil || args.Domain == nil {
		return nil, errors.New("missing required argument 'Domain'")
	}
	if args == nil || args.UserPoolId == nil {
		return nil, errors.New("missing required argument 'UserPoolId'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["domain"] = nil
		inputs["userPoolId"] = nil
	} else {
		inputs["domain"] = args.Domain
		inputs["userPoolId"] = args.UserPoolId
	}
	inputs["awsAccountId"] = nil
	inputs["cloudfrontDistributionArn"] = nil
	inputs["s3Bucket"] = nil
	inputs["version"] = nil
	s, err := ctx.RegisterResource("aws:cognito/userPoolDomain:UserPoolDomain", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &UserPoolDomain{s: s}, nil
}

// GetUserPoolDomain gets an existing UserPoolDomain resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetUserPoolDomain(ctx *pulumi.Context,
	name string, id pulumi.ID, state *UserPoolDomainState, opts ...pulumi.ResourceOpt) (*UserPoolDomain, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["awsAccountId"] = state.AwsAccountId
		inputs["cloudfrontDistributionArn"] = state.CloudfrontDistributionArn
		inputs["domain"] = state.Domain
		inputs["s3Bucket"] = state.S3Bucket
		inputs["userPoolId"] = state.UserPoolId
		inputs["version"] = state.Version
	}
	s, err := ctx.ReadResource("aws:cognito/userPoolDomain:UserPoolDomain", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &UserPoolDomain{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *UserPoolDomain) URN() *pulumi.URNOutput {
	return r.s.URN
}

// ID is this resource's unique identifier assigned by its provider.
func (r *UserPoolDomain) ID() *pulumi.IDOutput {
	return r.s.ID
}

// The AWS account ID for the user pool owner.
func (r *UserPoolDomain) AwsAccountId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["awsAccountId"])
}

// The ARN of the CloudFront distribution.
func (r *UserPoolDomain) CloudfrontDistributionArn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["cloudfrontDistributionArn"])
}

// The domain string.
func (r *UserPoolDomain) Domain() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["domain"])
}

// The S3 bucket where the static files for this domain are stored.
func (r *UserPoolDomain) S3Bucket() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["s3Bucket"])
}

// The user pool ID.
func (r *UserPoolDomain) UserPoolId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["userPoolId"])
}

// The app version.
func (r *UserPoolDomain) Version() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["version"])
}

// Input properties used for looking up and filtering UserPoolDomain resources.
type UserPoolDomainState struct {
	// The AWS account ID for the user pool owner.
	AwsAccountId interface{}
	// The ARN of the CloudFront distribution.
	CloudfrontDistributionArn interface{}
	// The domain string.
	Domain interface{}
	// The S3 bucket where the static files for this domain are stored.
	S3Bucket interface{}
	// The user pool ID.
	UserPoolId interface{}
	// The app version.
	Version interface{}
}

// The set of arguments for constructing a UserPoolDomain resource.
type UserPoolDomainArgs struct {
	// The domain string.
	Domain interface{}
	// The user pool ID.
	UserPoolId interface{}
}