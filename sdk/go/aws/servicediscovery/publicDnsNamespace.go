// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package servicediscovery

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides a Service Discovery Public DNS Namespace resource.
type PublicDnsNamespace struct {
	s *pulumi.ResourceState
}

// NewPublicDnsNamespace registers a new resource with the given unique name, arguments, and options.
func NewPublicDnsNamespace(ctx *pulumi.Context,
	name string, args *PublicDnsNamespaceArgs, opts ...pulumi.ResourceOpt) (*PublicDnsNamespace, error) {
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["description"] = nil
		inputs["name"] = nil
	} else {
		inputs["description"] = args.Description
		inputs["name"] = args.Name
	}
	inputs["arn"] = nil
	inputs["hostedZone"] = nil
	s, err := ctx.RegisterResource("aws:servicediscovery/publicDnsNamespace:PublicDnsNamespace", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &PublicDnsNamespace{s: s}, nil
}

// GetPublicDnsNamespace gets an existing PublicDnsNamespace resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetPublicDnsNamespace(ctx *pulumi.Context,
	name string, id pulumi.ID, state *PublicDnsNamespaceState, opts ...pulumi.ResourceOpt) (*PublicDnsNamespace, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["arn"] = state.Arn
		inputs["description"] = state.Description
		inputs["hostedZone"] = state.HostedZone
		inputs["name"] = state.Name
	}
	s, err := ctx.ReadResource("aws:servicediscovery/publicDnsNamespace:PublicDnsNamespace", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &PublicDnsNamespace{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *PublicDnsNamespace) URN() *pulumi.URNOutput {
	return r.s.URN
}

// ID is this resource's unique identifier assigned by its provider.
func (r *PublicDnsNamespace) ID() *pulumi.IDOutput {
	return r.s.ID
}

// The ARN that Amazon Route 53 assigns to the namespace when you create it.
func (r *PublicDnsNamespace) Arn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["arn"])
}

// The description that you specify for the namespace when you create it.
func (r *PublicDnsNamespace) Description() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["description"])
}

// The ID for the hosted zone that Amazon Route 53 creates when you create a namespace.
func (r *PublicDnsNamespace) HostedZone() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["hostedZone"])
}

// The name of the namespace.
func (r *PublicDnsNamespace) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// Input properties used for looking up and filtering PublicDnsNamespace resources.
type PublicDnsNamespaceState struct {
	// The ARN that Amazon Route 53 assigns to the namespace when you create it.
	Arn interface{}
	// The description that you specify for the namespace when you create it.
	Description interface{}
	// The ID for the hosted zone that Amazon Route 53 creates when you create a namespace.
	HostedZone interface{}
	// The name of the namespace.
	Name interface{}
}

// The set of arguments for constructing a PublicDnsNamespace resource.
type PublicDnsNamespaceArgs struct {
	// The description that you specify for the namespace when you create it.
	Description interface{}
	// The name of the namespace.
	Name interface{}
}