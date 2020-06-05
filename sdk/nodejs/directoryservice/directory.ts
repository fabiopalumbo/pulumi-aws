// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

/**
 * Provides a Simple or Managed Microsoft directory in AWS Directory Service.
 *
 * > **Note:** All arguments including the password and customer username will be stored in the raw state as plain-text.
 *
 * ## Example Usage
 *
 * ### SimpleAD
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const main = new aws.ec2.Vpc("main", {
 *     cidrBlock: "10.0.0.0/16",
 * });
 * const foo = new aws.ec2.Subnet("foo", {
 *     availabilityZone: "us-west-2a",
 *     cidrBlock: "10.0.1.0/24",
 *     vpcId: main.id,
 * });
 * const barSubnet = new aws.ec2.Subnet("bar", {
 *     availabilityZone: "us-west-2b",
 *     cidrBlock: "10.0.2.0/24",
 *     vpcId: main.id,
 * });
 * const barDirectory = new aws.directoryservice.Directory("bar", {
 *     password: "SuperSecretPassw0rd",
 *     size: "Small",
 *     tags: {
 *         Project: "foo",
 *     },
 *     vpcSettings: {
 *         subnetIds: [
 *             foo.id,
 *             barSubnet.id,
 *         ],
 *         vpcId: main.id,
 *     },
 * });
 * ```
 *
 * ### Microsoft Active Directory (MicrosoftAD)
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const main = new aws.ec2.Vpc("main", {
 *     cidrBlock: "10.0.0.0/16",
 * });
 * const foo = new aws.ec2.Subnet("foo", {
 *     availabilityZone: "us-west-2a",
 *     cidrBlock: "10.0.1.0/24",
 *     vpcId: main.id,
 * });
 * const barSubnet = new aws.ec2.Subnet("bar", {
 *     availabilityZone: "us-west-2b",
 *     cidrBlock: "10.0.2.0/24",
 *     vpcId: main.id,
 * });
 * const barDirectory = new aws.directoryservice.Directory("bar", {
 *     edition: "Standard",
 *     password: "SuperSecretPassw0rd",
 *     tags: {
 *         Project: "foo",
 *     },
 *     type: "MicrosoftAD",
 *     vpcSettings: {
 *         subnetIds: [
 *             foo.id,
 *             barSubnet.id,
 *         ],
 *         vpcId: main.id,
 *     },
 * });
 * ```
 *
 * ### Microsoft Active Directory Connector (ADConnector)
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const main = new aws.ec2.Vpc("main", {
 *     cidrBlock: "10.0.0.0/16",
 * });
 * const foo = new aws.ec2.Subnet("foo", {
 *     availabilityZone: "us-west-2a",
 *     cidrBlock: "10.0.1.0/24",
 *     vpcId: main.id,
 * });
 * const bar = new aws.ec2.Subnet("bar", {
 *     availabilityZone: "us-west-2b",
 *     cidrBlock: "10.0.2.0/24",
 *     vpcId: main.id,
 * });
 * const connector = new aws.directoryservice.Directory("connector", {
 *     connectSettings: {
 *         customerDnsIps: ["A.B.C.D"],
 *         customerUsername: "Admin",
 *         subnetIds: [
 *             foo.id,
 *             bar.id,
 *         ],
 *         vpcId: main.id,
 *     },
 *     password: "SuperSecretPassw0rd",
 *     size: "Small",
 *     type: "ADConnector",
 * });
 * ```
 */
export class Directory extends pulumi.CustomResource {
    /**
     * Get an existing Directory resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DirectoryState, opts?: pulumi.CustomResourceOptions): Directory {
        return new Directory(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:directoryservice/directory:Directory';

    /**
     * Returns true if the given object is an instance of Directory.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Directory {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Directory.__pulumiType;
    }

    /**
     * The access URL for the directory, such as `http://alias.awsapps.com`.
     */
    public /*out*/ readonly accessUrl!: pulumi.Output<string>;
    /**
     * The alias for the directory (must be unique amongst all aliases in AWS). Required for `enableSso`.
     */
    public readonly alias!: pulumi.Output<string>;
    /**
     * Connector related information about the directory. Fields documented below.
     */
    public readonly connectSettings!: pulumi.Output<outputs.directoryservice.DirectoryConnectSettings | undefined>;
    /**
     * A textual description for the directory.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * A list of IP addresses of the DNS servers for the directory or connector.
     */
    public /*out*/ readonly dnsIpAddresses!: pulumi.Output<string[]>;
    /**
     * The MicrosoftAD edition (`Standard` or `Enterprise`). Defaults to `Enterprise` (applies to MicrosoftAD type only).
     */
    public readonly edition!: pulumi.Output<string>;
    /**
     * Whether to enable single-sign on for the directory. Requires `alias`. Defaults to `false`.
     */
    public readonly enableSso!: pulumi.Output<boolean | undefined>;
    /**
     * The fully qualified name for the directory, such as `corp.example.com`
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The password for the directory administrator or connector user.
     */
    public readonly password!: pulumi.Output<string>;
    /**
     * The ID of the security group created by the directory.
     */
    public /*out*/ readonly securityGroupId!: pulumi.Output<string>;
    /**
     * The short name of the directory, such as `CORP`.
     */
    public readonly shortName!: pulumi.Output<string>;
    /**
     * The size of the directory (`Small` or `Large` are accepted values).
     */
    public readonly size!: pulumi.Output<string>;
    /**
     * A map of tags to assign to the resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: any} | undefined>;
    /**
     * The directory type (`SimpleAD`, `ADConnector` or `MicrosoftAD` are accepted values). Defaults to `SimpleAD`.
     */
    public readonly type!: pulumi.Output<string | undefined>;
    /**
     * VPC related information about the directory. Fields documented below.
     */
    public readonly vpcSettings!: pulumi.Output<outputs.directoryservice.DirectoryVpcSettings | undefined>;

    /**
     * Create a Directory resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DirectoryArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DirectoryArgs | DirectoryState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as DirectoryState | undefined;
            inputs["accessUrl"] = state ? state.accessUrl : undefined;
            inputs["alias"] = state ? state.alias : undefined;
            inputs["connectSettings"] = state ? state.connectSettings : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["dnsIpAddresses"] = state ? state.dnsIpAddresses : undefined;
            inputs["edition"] = state ? state.edition : undefined;
            inputs["enableSso"] = state ? state.enableSso : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["password"] = state ? state.password : undefined;
            inputs["securityGroupId"] = state ? state.securityGroupId : undefined;
            inputs["shortName"] = state ? state.shortName : undefined;
            inputs["size"] = state ? state.size : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["type"] = state ? state.type : undefined;
            inputs["vpcSettings"] = state ? state.vpcSettings : undefined;
        } else {
            const args = argsOrState as DirectoryArgs | undefined;
            if (!args || args.password === undefined) {
                throw new Error("Missing required property 'password'");
            }
            inputs["alias"] = args ? args.alias : undefined;
            inputs["connectSettings"] = args ? args.connectSettings : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["edition"] = args ? args.edition : undefined;
            inputs["enableSso"] = args ? args.enableSso : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["password"] = args ? args.password : undefined;
            inputs["shortName"] = args ? args.shortName : undefined;
            inputs["size"] = args ? args.size : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["type"] = args ? args.type : undefined;
            inputs["vpcSettings"] = args ? args.vpcSettings : undefined;
            inputs["accessUrl"] = undefined /*out*/;
            inputs["dnsIpAddresses"] = undefined /*out*/;
            inputs["securityGroupId"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Directory.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Directory resources.
 */
export interface DirectoryState {
    /**
     * The access URL for the directory, such as `http://alias.awsapps.com`.
     */
    readonly accessUrl?: pulumi.Input<string>;
    /**
     * The alias for the directory (must be unique amongst all aliases in AWS). Required for `enableSso`.
     */
    readonly alias?: pulumi.Input<string>;
    /**
     * Connector related information about the directory. Fields documented below.
     */
    readonly connectSettings?: pulumi.Input<inputs.directoryservice.DirectoryConnectSettings>;
    /**
     * A textual description for the directory.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * A list of IP addresses of the DNS servers for the directory or connector.
     */
    readonly dnsIpAddresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The MicrosoftAD edition (`Standard` or `Enterprise`). Defaults to `Enterprise` (applies to MicrosoftAD type only).
     */
    readonly edition?: pulumi.Input<string>;
    /**
     * Whether to enable single-sign on for the directory. Requires `alias`. Defaults to `false`.
     */
    readonly enableSso?: pulumi.Input<boolean>;
    /**
     * The fully qualified name for the directory, such as `corp.example.com`
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The password for the directory administrator or connector user.
     */
    readonly password?: pulumi.Input<string>;
    /**
     * The ID of the security group created by the directory.
     */
    readonly securityGroupId?: pulumi.Input<string>;
    /**
     * The short name of the directory, such as `CORP`.
     */
    readonly shortName?: pulumi.Input<string>;
    /**
     * The size of the directory (`Small` or `Large` are accepted values).
     */
    readonly size?: pulumi.Input<string>;
    /**
     * A map of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * The directory type (`SimpleAD`, `ADConnector` or `MicrosoftAD` are accepted values). Defaults to `SimpleAD`.
     */
    readonly type?: pulumi.Input<string>;
    /**
     * VPC related information about the directory. Fields documented below.
     */
    readonly vpcSettings?: pulumi.Input<inputs.directoryservice.DirectoryVpcSettings>;
}

/**
 * The set of arguments for constructing a Directory resource.
 */
export interface DirectoryArgs {
    /**
     * The alias for the directory (must be unique amongst all aliases in AWS). Required for `enableSso`.
     */
    readonly alias?: pulumi.Input<string>;
    /**
     * Connector related information about the directory. Fields documented below.
     */
    readonly connectSettings?: pulumi.Input<inputs.directoryservice.DirectoryConnectSettings>;
    /**
     * A textual description for the directory.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The MicrosoftAD edition (`Standard` or `Enterprise`). Defaults to `Enterprise` (applies to MicrosoftAD type only).
     */
    readonly edition?: pulumi.Input<string>;
    /**
     * Whether to enable single-sign on for the directory. Requires `alias`. Defaults to `false`.
     */
    readonly enableSso?: pulumi.Input<boolean>;
    /**
     * The fully qualified name for the directory, such as `corp.example.com`
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The password for the directory administrator or connector user.
     */
    readonly password: pulumi.Input<string>;
    /**
     * The short name of the directory, such as `CORP`.
     */
    readonly shortName?: pulumi.Input<string>;
    /**
     * The size of the directory (`Small` or `Large` are accepted values).
     */
    readonly size?: pulumi.Input<string>;
    /**
     * A map of tags to assign to the resource.
     */
    readonly tags?: pulumi.Input<{[key: string]: any}>;
    /**
     * The directory type (`SimpleAD`, `ADConnector` or `MicrosoftAD` are accepted values). Defaults to `SimpleAD`.
     */
    readonly type?: pulumi.Input<string>;
    /**
     * VPC related information about the directory. Fields documented below.
     */
    readonly vpcSettings?: pulumi.Input<inputs.directoryservice.DirectoryVpcSettings>;
}
