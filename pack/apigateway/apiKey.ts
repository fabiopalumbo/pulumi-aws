// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

import {RestApi} from "./restApi";

/**
 * Provides an API Gateway API Key.
 * 
 * ~> **Warning:** Since the API Gateway usage plans feature was launched on August 11, 2016, usage plans are now **required** to associate an API key with an API stage.
 */
export class ApiKey extends pulumi.Resource {
    /**
     * The creation date of the API key
     */
    public /*out*/ readonly createdDate: pulumi.Computed<string>;
    /**
     * The API key description. Defaults to "Managed by Terraform".
     */
    public readonly description?: pulumi.Computed<string>;
    /**
     * Specifies whether the API key can be used by callers. Defaults to `true`.
     */
    public readonly enabled?: pulumi.Computed<boolean>;
    /**
     * The last update date of the API key
     */
    public /*out*/ readonly lastUpdatedDate: pulumi.Computed<string>;
    /**
     * The name of the API key
     */
    public readonly name: pulumi.Computed<string>;
    /**
     * A list of stage keys associated with the API key - see below
     */
    public readonly stageKey?: pulumi.Computed<{ restApi: RestApi, stageName: string }[]>;
    /**
     * The value of the API key. If not specified, it will be automatically generated by AWS on creation.
     */
    public readonly value: pulumi.Computed<string>;

    /**
     * Create a ApiKey resource with the given unique name, arguments, and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this ApiKey instance
     * @param args A collection of arguments for creating this ApiKey instance
     * @param dependsOn A optional array of additional resources this instance depends on
     */
    constructor(urnName: string, args?: ApiKeyArgs, dependsOn?: pulumi.Resource[]) {
        args = args || {};
        super("aws:apigateway/apiKey:ApiKey", urnName, {
            "description": args.description,
            "enabled": args.enabled,
            "name": args.name,
            "stageKey": args.stageKey,
            "value": args.value,
            "createdDate": undefined,
            "lastUpdatedDate": undefined,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a ApiKey resource.
 */
export interface ApiKeyArgs {
    /**
     * The API key description. Defaults to "Managed by Terraform".
     */
    readonly description?: pulumi.ComputedValue<string>;
    /**
     * Specifies whether the API key can be used by callers. Defaults to `true`.
     */
    readonly enabled?: pulumi.ComputedValue<boolean>;
    /**
     * The name of the API key
     */
    readonly name?: pulumi.ComputedValue<string>;
    /**
     * A list of stage keys associated with the API key - see below
     */
    readonly stageKey?: pulumi.ComputedValue<{ restApi: pulumi.ComputedValue<RestApi>, stageName: pulumi.ComputedValue<string> }>[];
    /**
     * The value of the API key. If not specified, it will be automatically generated by AWS on creation.
     */
    readonly value?: pulumi.ComputedValue<string>;
}

