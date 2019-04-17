// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package ebs

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Use this data source to get information about an EBS volume for use in other
// resources.
func LookupVolume(ctx *pulumi.Context, args *GetVolumeArgs) (*GetVolumeResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["filters"] = args.Filters
		inputs["mostRecent"] = args.MostRecent
		inputs["tags"] = args.Tags
	}
	outputs, err := ctx.Invoke("aws:ebs/getVolume:getVolume", inputs)
	if err != nil {
		return nil, err
	}
	return &GetVolumeResult{
		Arn: outputs["arn"],
		AvailabilityZone: outputs["availabilityZone"],
		Encrypted: outputs["encrypted"],
		Filters: outputs["filters"],
		Iops: outputs["iops"],
		KmsKeyId: outputs["kmsKeyId"],
		MostRecent: outputs["mostRecent"],
		Size: outputs["size"],
		SnapshotId: outputs["snapshotId"],
		Tags: outputs["tags"],
		VolumeId: outputs["volumeId"],
		VolumeType: outputs["volumeType"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getVolume.
type GetVolumeArgs struct {
	// One or more name/value pairs to filter off of. There are
	// several valid keys, for a full reference, check out
	// [describe-volumes in the AWS CLI reference][1].
	Filters interface{}
	// If more than one result is returned, use the most
	// recent Volume.
	MostRecent interface{}
	Tags interface{}
}

// A collection of values returned by getVolume.
type GetVolumeResult struct {
	// The volume ARN (e.g. arn:aws:ec2:us-east-1:0123456789012:volume/vol-59fcb34e).
	Arn interface{}
	// The AZ where the EBS volume exists.
	AvailabilityZone interface{}
	// Whether the disk is encrypted.
	Encrypted interface{}
	Filters interface{}
	// The amount of IOPS for the disk.
	Iops interface{}
	// The ARN for the KMS encryption key.
	KmsKeyId interface{}
	MostRecent interface{}
	// The size of the drive in GiBs.
	Size interface{}
	// The snapshot_id the EBS volume is based off.
	SnapshotId interface{}
	// A mapping of tags for the resource.
	Tags interface{}
	// The volume ID (e.g. vol-59fcb34e).
	VolumeId interface{}
	// The type of EBS volume.
	VolumeType interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
