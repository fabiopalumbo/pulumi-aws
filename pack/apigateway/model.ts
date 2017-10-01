// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

import {RestApi} from "./restApi";

/**
 * Provides a Model for a API Gateway.
 */
export class Model extends pulumi.Resource {
    /**
     * The content type of the model
     */
    public readonly contentType: pulumi.Computed<string>;
    /**
     * The description of the model
     */
    public readonly description?: pulumi.Computed<string>;
    /**
     * The name of the model
     */
    public readonly name: pulumi.Computed<string>;
    /**
     * The ID of the associated REST API
     */
    public readonly restApi: pulumi.Computed<RestApi>;
    /**
     * The schema of the model in a JSON form
     */
    public readonly schema?: pulumi.Computed<string>;

    /**
     * Create a Model resource with the given unique name, arguments, and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this Model instance
     * @param args A collection of arguments for creating this Model instance
     * @param dependsOn A optional array of additional resources this instance depends on
     */
    constructor(urnName: string, args: ModelArgs, dependsOn?: pulumi.Resource[]) {
        if (args.contentType === undefined) {
            throw new Error("Missing required property 'contentType'");
        }
        if (args.restApi === undefined) {
            throw new Error("Missing required property 'restApi'");
        }
        super("aws:apigateway/model:Model", urnName, {
            "contentType": args.contentType,
            "description": args.description,
            "name": args.name,
            "restApi": args.restApi,
            "schema": args.schema,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a Model resource.
 */
export interface ModelArgs {
    /**
     * The content type of the model
     */
    readonly contentType: pulumi.ComputedValue<string>;
    /**
     * The description of the model
     */
    readonly description?: pulumi.ComputedValue<string>;
    /**
     * The name of the model
     */
    readonly name?: pulumi.ComputedValue<string>;
    /**
     * The ID of the associated REST API
     */
    readonly restApi: pulumi.ComputedValue<RestApi>;
    /**
     * The schema of the model in a JSON form
     */
    readonly schema?: pulumi.ComputedValue<string>;
}

