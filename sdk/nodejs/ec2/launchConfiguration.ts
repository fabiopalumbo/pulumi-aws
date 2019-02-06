// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

import {InstanceProfile} from "../iam";

/**
 * Provides a resource to create a new launch configuration, used for autoscaling groups.
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * 
 * const ubuntu = pulumi.output(aws.getAmi({
 *     filters: [
 *         {
 *             name: "name",
 *             values: ["ubuntu/images/hvm-ssd/ubuntu-trusty-14.04-amd64-server-*"],
 *         },
 *         {
 *             name: "virtualization-type",
 *             values: ["hvm"],
 *         },
 *     ],
 *     mostRecent: true,
 *     owners: ["099720109477"], // Canonical
 * }));
 * const asConf = new aws.ec2.LaunchConfiguration("as_conf", {
 *     imageId: ubuntu.apply(__arg0 => __arg0.id),
 *     instanceType: "t2.micro",
 *     name: "web_config",
 * });
 * ```
 */
export class LaunchConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing LaunchConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LaunchConfigurationState, opts?: pulumi.CustomResourceOptions): LaunchConfiguration {
        return new LaunchConfiguration(name, <any>state, { ...opts, id: id });
    }

    /**
     * Associate a public ip address with an instance in a VPC.
     */
    public readonly associatePublicIpAddress: pulumi.Output<boolean | undefined>;
    /**
     * Additional EBS block devices to attach to the
     * instance.  See Block Devices below for details.
     */
    public readonly ebsBlockDevices: pulumi.Output<{ deleteOnTermination?: boolean, deviceName: string, encrypted: boolean, iops: number, noDevice?: boolean, snapshotId: string, volumeSize: number, volumeType: string }[]>;
    /**
     * If true, the launched EC2 instance will be EBS-optimized.
     */
    public readonly ebsOptimized: pulumi.Output<boolean>;
    /**
     * Enables/disables detailed monitoring. This is enabled by default.
     */
    public readonly enableMonitoring: pulumi.Output<boolean | undefined>;
    /**
     * Customize Ephemeral (also known as
     * "Instance Store") volumes on the instance. See Block Devices below for details.
     */
    public readonly ephemeralBlockDevices: pulumi.Output<{ deviceName: string, virtualName: string }[] | undefined>;
    /**
     * The name attribute of the IAM instance profile to associate
     * with launched instances.
     */
    public readonly iamInstanceProfile: pulumi.Output<string | undefined>;
    /**
     * The EC2 image ID to launch.
     */
    public readonly imageId: pulumi.Output<string>;
    /**
     * The size of instance to launch.
     */
    public readonly instanceType: pulumi.Output<string>;
    /**
     * The key name that should be used for the instance.
     */
    public readonly keyName: pulumi.Output<string>;
    /**
     * The name of the launch configuration. If you leave
     * this blank, Terraform will auto-generate a unique name.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * Creates a unique name beginning with the specified
     * prefix. Conflicts with `name`.
     */
    public readonly namePrefix: pulumi.Output<string | undefined>;
    /**
     * The tenancy of the instance. Valid values are
     * `"default"` or `"dedicated"`, see [AWS's Create Launch Configuration](http://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CreateLaunchConfiguration.html)
     * for more details
     */
    public readonly placementTenancy: pulumi.Output<string | undefined>;
    /**
     * Customize details about the root block
     * device of the instance. See Block Devices below for details.
     */
    public readonly rootBlockDevice: pulumi.Output<{ deleteOnTermination?: boolean, iops: number, volumeSize: number, volumeType: string }>;
    /**
     * A list of associated security group IDS.
     */
    public readonly securityGroups: pulumi.Output<string[] | undefined>;
    /**
     * The maximum price to use for reserving spot instances.
     */
    public readonly spotPrice: pulumi.Output<string | undefined>;
    /**
     * The user data to provide when launching the instance. Do not pass gzip-compressed data via this argument; see `user_data_base64` instead.
     */
    public readonly userData: pulumi.Output<string | undefined>;
    /**
     * Can be used instead of `user_data` to pass base64-encoded binary data directly. Use this instead of `user_data` whenever the value is not a valid UTF-8 string. For example, gzip-encoded user data must be base64-encoded and passed via this argument to avoid corruption.
     */
    public readonly userDataBase64: pulumi.Output<string | undefined>;
    /**
     * The ID of a ClassicLink-enabled VPC. Only applies to EC2-Classic instances. (eg. `vpc-2730681a`)
     */
    public readonly vpcClassicLinkId: pulumi.Output<string | undefined>;
    /**
     * The IDs of one or more security groups for the specified ClassicLink-enabled VPC (eg. `sg-46ae3d11`).
     */
    public readonly vpcClassicLinkSecurityGroups: pulumi.Output<string[] | undefined>;

    /**
     * Create a LaunchConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LaunchConfigurationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LaunchConfigurationArgs | LaunchConfigurationState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: LaunchConfigurationState = argsOrState as LaunchConfigurationState | undefined;
            inputs["associatePublicIpAddress"] = state ? state.associatePublicIpAddress : undefined;
            inputs["ebsBlockDevices"] = state ? state.ebsBlockDevices : undefined;
            inputs["ebsOptimized"] = state ? state.ebsOptimized : undefined;
            inputs["enableMonitoring"] = state ? state.enableMonitoring : undefined;
            inputs["ephemeralBlockDevices"] = state ? state.ephemeralBlockDevices : undefined;
            inputs["iamInstanceProfile"] = state ? state.iamInstanceProfile : undefined;
            inputs["imageId"] = state ? state.imageId : undefined;
            inputs["instanceType"] = state ? state.instanceType : undefined;
            inputs["keyName"] = state ? state.keyName : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["namePrefix"] = state ? state.namePrefix : undefined;
            inputs["placementTenancy"] = state ? state.placementTenancy : undefined;
            inputs["rootBlockDevice"] = state ? state.rootBlockDevice : undefined;
            inputs["securityGroups"] = state ? state.securityGroups : undefined;
            inputs["spotPrice"] = state ? state.spotPrice : undefined;
            inputs["userData"] = state ? state.userData : undefined;
            inputs["userDataBase64"] = state ? state.userDataBase64 : undefined;
            inputs["vpcClassicLinkId"] = state ? state.vpcClassicLinkId : undefined;
            inputs["vpcClassicLinkSecurityGroups"] = state ? state.vpcClassicLinkSecurityGroups : undefined;
        } else {
            const args = argsOrState as LaunchConfigurationArgs | undefined;
            if (!args || args.imageId === undefined) {
                throw new Error("Missing required property 'imageId'");
            }
            if (!args || args.instanceType === undefined) {
                throw new Error("Missing required property 'instanceType'");
            }
            inputs["associatePublicIpAddress"] = args ? args.associatePublicIpAddress : undefined;
            inputs["ebsBlockDevices"] = args ? args.ebsBlockDevices : undefined;
            inputs["ebsOptimized"] = args ? args.ebsOptimized : undefined;
            inputs["enableMonitoring"] = args ? args.enableMonitoring : undefined;
            inputs["ephemeralBlockDevices"] = args ? args.ephemeralBlockDevices : undefined;
            inputs["iamInstanceProfile"] = args ? args.iamInstanceProfile : undefined;
            inputs["imageId"] = args ? args.imageId : undefined;
            inputs["instanceType"] = args ? args.instanceType : undefined;
            inputs["keyName"] = args ? args.keyName : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["namePrefix"] = args ? args.namePrefix : undefined;
            inputs["placementTenancy"] = args ? args.placementTenancy : undefined;
            inputs["rootBlockDevice"] = args ? args.rootBlockDevice : undefined;
            inputs["securityGroups"] = args ? args.securityGroups : undefined;
            inputs["spotPrice"] = args ? args.spotPrice : undefined;
            inputs["userData"] = args ? args.userData : undefined;
            inputs["userDataBase64"] = args ? args.userDataBase64 : undefined;
            inputs["vpcClassicLinkId"] = args ? args.vpcClassicLinkId : undefined;
            inputs["vpcClassicLinkSecurityGroups"] = args ? args.vpcClassicLinkSecurityGroups : undefined;
        }
        super("aws:ec2/launchConfiguration:LaunchConfiguration", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering LaunchConfiguration resources.
 */
export interface LaunchConfigurationState {
    /**
     * Associate a public ip address with an instance in a VPC.
     */
    readonly associatePublicIpAddress?: pulumi.Input<boolean>;
    /**
     * Additional EBS block devices to attach to the
     * instance.  See Block Devices below for details.
     */
    readonly ebsBlockDevices?: pulumi.Input<pulumi.Input<{ deleteOnTermination?: pulumi.Input<boolean>, deviceName: pulumi.Input<string>, encrypted?: pulumi.Input<boolean>, iops?: pulumi.Input<number>, noDevice?: pulumi.Input<boolean>, snapshotId?: pulumi.Input<string>, volumeSize?: pulumi.Input<number>, volumeType?: pulumi.Input<string> }>[]>;
    /**
     * If true, the launched EC2 instance will be EBS-optimized.
     */
    readonly ebsOptimized?: pulumi.Input<boolean>;
    /**
     * Enables/disables detailed monitoring. This is enabled by default.
     */
    readonly enableMonitoring?: pulumi.Input<boolean>;
    /**
     * Customize Ephemeral (also known as
     * "Instance Store") volumes on the instance. See Block Devices below for details.
     */
    readonly ephemeralBlockDevices?: pulumi.Input<pulumi.Input<{ deviceName: pulumi.Input<string>, virtualName: pulumi.Input<string> }>[]>;
    /**
     * The name attribute of the IAM instance profile to associate
     * with launched instances.
     */
    readonly iamInstanceProfile?: pulumi.Input<string | InstanceProfile>;
    /**
     * The EC2 image ID to launch.
     */
    readonly imageId?: pulumi.Input<string>;
    /**
     * The size of instance to launch.
     */
    readonly instanceType?: pulumi.Input<string>;
    /**
     * The key name that should be used for the instance.
     */
    readonly keyName?: pulumi.Input<string>;
    /**
     * The name of the launch configuration. If you leave
     * this blank, Terraform will auto-generate a unique name.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Creates a unique name beginning with the specified
     * prefix. Conflicts with `name`.
     */
    readonly namePrefix?: pulumi.Input<string>;
    /**
     * The tenancy of the instance. Valid values are
     * `"default"` or `"dedicated"`, see [AWS's Create Launch Configuration](http://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CreateLaunchConfiguration.html)
     * for more details
     */
    readonly placementTenancy?: pulumi.Input<string>;
    /**
     * Customize details about the root block
     * device of the instance. See Block Devices below for details.
     */
    readonly rootBlockDevice?: pulumi.Input<{ deleteOnTermination?: pulumi.Input<boolean>, iops?: pulumi.Input<number>, volumeSize?: pulumi.Input<number>, volumeType?: pulumi.Input<string> }>;
    /**
     * A list of associated security group IDS.
     */
    readonly securityGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The maximum price to use for reserving spot instances.
     */
    readonly spotPrice?: pulumi.Input<string>;
    /**
     * The user data to provide when launching the instance. Do not pass gzip-compressed data via this argument; see `user_data_base64` instead.
     */
    readonly userData?: pulumi.Input<string>;
    /**
     * Can be used instead of `user_data` to pass base64-encoded binary data directly. Use this instead of `user_data` whenever the value is not a valid UTF-8 string. For example, gzip-encoded user data must be base64-encoded and passed via this argument to avoid corruption.
     */
    readonly userDataBase64?: pulumi.Input<string>;
    /**
     * The ID of a ClassicLink-enabled VPC. Only applies to EC2-Classic instances. (eg. `vpc-2730681a`)
     */
    readonly vpcClassicLinkId?: pulumi.Input<string>;
    /**
     * The IDs of one or more security groups for the specified ClassicLink-enabled VPC (eg. `sg-46ae3d11`).
     */
    readonly vpcClassicLinkSecurityGroups?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a LaunchConfiguration resource.
 */
export interface LaunchConfigurationArgs {
    /**
     * Associate a public ip address with an instance in a VPC.
     */
    readonly associatePublicIpAddress?: pulumi.Input<boolean>;
    /**
     * Additional EBS block devices to attach to the
     * instance.  See Block Devices below for details.
     */
    readonly ebsBlockDevices?: pulumi.Input<pulumi.Input<{ deleteOnTermination?: pulumi.Input<boolean>, deviceName: pulumi.Input<string>, encrypted?: pulumi.Input<boolean>, iops?: pulumi.Input<number>, noDevice?: pulumi.Input<boolean>, snapshotId?: pulumi.Input<string>, volumeSize?: pulumi.Input<number>, volumeType?: pulumi.Input<string> }>[]>;
    /**
     * If true, the launched EC2 instance will be EBS-optimized.
     */
    readonly ebsOptimized?: pulumi.Input<boolean>;
    /**
     * Enables/disables detailed monitoring. This is enabled by default.
     */
    readonly enableMonitoring?: pulumi.Input<boolean>;
    /**
     * Customize Ephemeral (also known as
     * "Instance Store") volumes on the instance. See Block Devices below for details.
     */
    readonly ephemeralBlockDevices?: pulumi.Input<pulumi.Input<{ deviceName: pulumi.Input<string>, virtualName: pulumi.Input<string> }>[]>;
    /**
     * The name attribute of the IAM instance profile to associate
     * with launched instances.
     */
    readonly iamInstanceProfile?: pulumi.Input<string | InstanceProfile>;
    /**
     * The EC2 image ID to launch.
     */
    readonly imageId: pulumi.Input<string>;
    /**
     * The size of instance to launch.
     */
    readonly instanceType: pulumi.Input<string>;
    /**
     * The key name that should be used for the instance.
     */
    readonly keyName?: pulumi.Input<string>;
    /**
     * The name of the launch configuration. If you leave
     * this blank, Terraform will auto-generate a unique name.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Creates a unique name beginning with the specified
     * prefix. Conflicts with `name`.
     */
    readonly namePrefix?: pulumi.Input<string>;
    /**
     * The tenancy of the instance. Valid values are
     * `"default"` or `"dedicated"`, see [AWS's Create Launch Configuration](http://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_CreateLaunchConfiguration.html)
     * for more details
     */
    readonly placementTenancy?: pulumi.Input<string>;
    /**
     * Customize details about the root block
     * device of the instance. See Block Devices below for details.
     */
    readonly rootBlockDevice?: pulumi.Input<{ deleteOnTermination?: pulumi.Input<boolean>, iops?: pulumi.Input<number>, volumeSize?: pulumi.Input<number>, volumeType?: pulumi.Input<string> }>;
    /**
     * A list of associated security group IDS.
     */
    readonly securityGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The maximum price to use for reserving spot instances.
     */
    readonly spotPrice?: pulumi.Input<string>;
    /**
     * The user data to provide when launching the instance. Do not pass gzip-compressed data via this argument; see `user_data_base64` instead.
     */
    readonly userData?: pulumi.Input<string>;
    /**
     * Can be used instead of `user_data` to pass base64-encoded binary data directly. Use this instead of `user_data` whenever the value is not a valid UTF-8 string. For example, gzip-encoded user data must be base64-encoded and passed via this argument to avoid corruption.
     */
    readonly userDataBase64?: pulumi.Input<string>;
    /**
     * The ID of a ClassicLink-enabled VPC. Only applies to EC2-Classic instances. (eg. `vpc-2730681a`)
     */
    readonly vpcClassicLinkId?: pulumi.Input<string>;
    /**
     * The IDs of one or more security groups for the specified ClassicLink-enabled VPC (eg. `sg-46ae3d11`).
     */
    readonly vpcClassicLinkSecurityGroups?: pulumi.Input<pulumi.Input<string>[]>;
}
