// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * 
 * ## Example Usage
 * 
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 * import * as fs from "fs";
 * 
 * const app = new aws.pinpoint.App("app", {});
 * const apnsVoip = new aws.pinpoint.ApnsVoipChannel("apns_voip", {
 *     applicationId: app.applicationId,
 *     certificate: fs.readFileSync("./certificate.pem", "utf-8"),
 *     privateKey: fs.readFileSync("./private_key.key", "utf-8"),
 * });
 * ```
 * 
 */
export class ApnsVoipChannel extends pulumi.CustomResource {
    /**
     * Get an existing ApnsVoipChannel resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApnsVoipChannelState, opts?: pulumi.CustomResourceOptions): ApnsVoipChannel {
        return new ApnsVoipChannel(name, <any>state, { ...opts, id: id });
    }

    public readonly applicationId: pulumi.Output<string>;
    public readonly bundleId: pulumi.Output<string | undefined>;
    public readonly certificate: pulumi.Output<string | undefined>;
    public readonly defaultAuthenticationMethod: pulumi.Output<string | undefined>;
    public readonly enabled: pulumi.Output<boolean | undefined>;
    public readonly privateKey: pulumi.Output<string | undefined>;
    public readonly teamId: pulumi.Output<string | undefined>;
    public readonly tokenKey: pulumi.Output<string | undefined>;
    public readonly tokenKeyId: pulumi.Output<string | undefined>;

    /**
     * Create a ApnsVoipChannel resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApnsVoipChannelArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApnsVoipChannelArgs | ApnsVoipChannelState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: ApnsVoipChannelState = argsOrState as ApnsVoipChannelState | undefined;
            inputs["applicationId"] = state ? state.applicationId : undefined;
            inputs["bundleId"] = state ? state.bundleId : undefined;
            inputs["certificate"] = state ? state.certificate : undefined;
            inputs["defaultAuthenticationMethod"] = state ? state.defaultAuthenticationMethod : undefined;
            inputs["enabled"] = state ? state.enabled : undefined;
            inputs["privateKey"] = state ? state.privateKey : undefined;
            inputs["teamId"] = state ? state.teamId : undefined;
            inputs["tokenKey"] = state ? state.tokenKey : undefined;
            inputs["tokenKeyId"] = state ? state.tokenKeyId : undefined;
        } else {
            const args = argsOrState as ApnsVoipChannelArgs | undefined;
            if (!args || args.applicationId === undefined) {
                throw new Error("Missing required property 'applicationId'");
            }
            inputs["applicationId"] = args ? args.applicationId : undefined;
            inputs["bundleId"] = args ? args.bundleId : undefined;
            inputs["certificate"] = args ? args.certificate : undefined;
            inputs["defaultAuthenticationMethod"] = args ? args.defaultAuthenticationMethod : undefined;
            inputs["enabled"] = args ? args.enabled : undefined;
            inputs["privateKey"] = args ? args.privateKey : undefined;
            inputs["teamId"] = args ? args.teamId : undefined;
            inputs["tokenKey"] = args ? args.tokenKey : undefined;
            inputs["tokenKeyId"] = args ? args.tokenKeyId : undefined;
        }
        super("aws:pinpoint/apnsVoipChannel:ApnsVoipChannel", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ApnsVoipChannel resources.
 */
export interface ApnsVoipChannelState {
    readonly applicationId?: pulumi.Input<string>;
    readonly bundleId?: pulumi.Input<string>;
    readonly certificate?: pulumi.Input<string>;
    readonly defaultAuthenticationMethod?: pulumi.Input<string>;
    readonly enabled?: pulumi.Input<boolean>;
    readonly privateKey?: pulumi.Input<string>;
    readonly teamId?: pulumi.Input<string>;
    readonly tokenKey?: pulumi.Input<string>;
    readonly tokenKeyId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ApnsVoipChannel resource.
 */
export interface ApnsVoipChannelArgs {
    readonly applicationId: pulumi.Input<string>;
    readonly bundleId?: pulumi.Input<string>;
    readonly certificate?: pulumi.Input<string>;
    readonly defaultAuthenticationMethod?: pulumi.Input<string>;
    readonly enabled?: pulumi.Input<boolean>;
    readonly privateKey?: pulumi.Input<string>;
    readonly teamId?: pulumi.Input<string>;
    readonly tokenKey?: pulumi.Input<string>;
    readonly tokenKeyId?: pulumi.Input<string>;
}
