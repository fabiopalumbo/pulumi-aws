// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package acm

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Use this data source to get the ARN of a certificate in AWS Certificate
// Manager (ACM), you can reference
// it by domain without having to hard code the ARNs as input.
func LookupCertificate(ctx *pulumi.Context, args *GetCertificateArgs) (*GetCertificateResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["domain"] = args.Domain
		inputs["keyTypes"] = args.KeyTypes
		inputs["mostRecent"] = args.MostRecent
		inputs["statuses"] = args.Statuses
		inputs["types"] = args.Types
	}
	outputs, err := ctx.Invoke("aws:acm/getCertificate:getCertificate", inputs)
	if err != nil {
		return nil, err
	}
	return &GetCertificateResult{
		Arn: outputs["arn"],
		Domain: outputs["domain"],
		KeyTypes: outputs["keyTypes"],
		MostRecent: outputs["mostRecent"],
		Statuses: outputs["statuses"],
		Types: outputs["types"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getCertificate.
type GetCertificateArgs struct {
	// The domain of the certificate to look up. If no certificate is found with this name, an error will be returned.
	Domain interface{}
	// A list of key algorithms to filter certificates. By default, ACM does not return all certificate types when searching. Valid values are `RSA_1024`, `RSA_2048`, `RSA_4096`, `EC_prime256v1`, `EC_secp384r1`, and `EC_secp521r1`.
	KeyTypes interface{}
	// If set to true, it sorts the certificates matched by previous criteria by the NotBefore field, returning only the most recent one. If set to false, it returns an error if more than one certificate is found. Defaults to false.
	MostRecent interface{}
	// A list of statuses on which to filter the returned list. Valid values are `PENDING_VALIDATION`, `ISSUED`,
	// `INACTIVE`, `EXPIRED`, `VALIDATION_TIMED_OUT`, `REVOKED` and `FAILED`. If no value is specified, only certificates in the `ISSUED` state
	// are returned.
	Statuses interface{}
	// A list of types on which to filter the returned list. Valid values are `AMAZON_ISSUED` and `IMPORTED`.
	Types interface{}
}

// A collection of values returned by getCertificate.
type GetCertificateResult struct {
	// Set to the ARN of the found certificate, suitable for referencing in other resources that support ACM certificates.
	Arn interface{}
	Domain interface{}
	KeyTypes interface{}
	MostRecent interface{}
	Statuses interface{}
	Types interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
