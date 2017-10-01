// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

import {RestApi} from "./restApi";

/**
 * Provides an API Gateway Authorizer.
 */
export class Authorizer extends pulumi.Resource {
    /**
     * The credentials required for the authorizer.
     * To specify an IAM Role for API Gateway to assume, use the IAM Role ARN.
     */
    public readonly authorizerCredentials?: pulumi.Computed<string>;
    /**
     * The TTL of cached authorizer results in seconds.
     * Defaults to `300`.
     */
    public readonly authorizerResultTtlInSeconds?: pulumi.Computed<number>;
    /**
     * The authorizer's Uniform Resource Identifier (URI).
     * For `TOKEN` type, this must be a well-formed Lambda function URI in the form of
     * `arn:aws:apigateway:{region}:lambda:path/{service_api}`. e.g. `arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:012345678912:function:my-function/invocations`
     */
    public readonly authorizerUri: pulumi.Computed<string>;
    /**
     * The source of the identity in an incoming request.
     * Defaults to `method.request.header.Authorization`.
     */
    public readonly identitySource?: pulumi.Computed<string>;
    /**
     * A validation expression for the incoming identity.
     * For `TOKEN` type, this value should be a regular expression. The incoming token from the client is matched
     * against this expression, and will proceed if the token matches. If the token doesn't match,
     * the client receives a 401 Unauthorized response.
     */
    public readonly identityValidationExpression?: pulumi.Computed<string>;
    /**
     * The name of the authorizer
     */
    public readonly name: pulumi.Computed<string>;
    /**
     * The ID of the associated REST API
     */
    public readonly restApi: pulumi.Computed<RestApi>;
    /**
     * The type of the authorizer. `TOKEN` is currently the only allowed value.
     * Defaults to `TOKEN`.
     */
    public readonly type?: pulumi.Computed<string>;

    /**
     * Create a Authorizer resource with the given unique name, arguments, and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this Authorizer instance
     * @param args A collection of arguments for creating this Authorizer instance
     * @param dependsOn A optional array of additional resources this instance depends on
     */
    constructor(urnName: string, args: AuthorizerArgs, dependsOn?: pulumi.Resource[]) {
        if (args.authorizerUri === undefined) {
            throw new Error("Missing required property 'authorizerUri'");
        }
        if (args.restApi === undefined) {
            throw new Error("Missing required property 'restApi'");
        }
        super("aws:apigateway/authorizer:Authorizer", urnName, {
            "authorizerCredentials": args.authorizerCredentials,
            "authorizerResultTtlInSeconds": args.authorizerResultTtlInSeconds,
            "authorizerUri": args.authorizerUri,
            "identitySource": args.identitySource,
            "identityValidationExpression": args.identityValidationExpression,
            "name": args.name,
            "restApi": args.restApi,
            "type": args.type,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a Authorizer resource.
 */
export interface AuthorizerArgs {
    /**
     * The credentials required for the authorizer.
     * To specify an IAM Role for API Gateway to assume, use the IAM Role ARN.
     */
    readonly authorizerCredentials?: pulumi.ComputedValue<string>;
    /**
     * The TTL of cached authorizer results in seconds.
     * Defaults to `300`.
     */
    readonly authorizerResultTtlInSeconds?: pulumi.ComputedValue<number>;
    /**
     * The authorizer's Uniform Resource Identifier (URI).
     * For `TOKEN` type, this must be a well-formed Lambda function URI in the form of
     * `arn:aws:apigateway:{region}:lambda:path/{service_api}`. e.g. `arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:012345678912:function:my-function/invocations`
     */
    readonly authorizerUri: pulumi.ComputedValue<string>;
    /**
     * The source of the identity in an incoming request.
     * Defaults to `method.request.header.Authorization`.
     */
    readonly identitySource?: pulumi.ComputedValue<string>;
    /**
     * A validation expression for the incoming identity.
     * For `TOKEN` type, this value should be a regular expression. The incoming token from the client is matched
     * against this expression, and will proceed if the token matches. If the token doesn't match,
     * the client receives a 401 Unauthorized response.
     */
    readonly identityValidationExpression?: pulumi.ComputedValue<string>;
    /**
     * The name of the authorizer
     */
    readonly name?: pulumi.ComputedValue<string>;
    /**
     * The ID of the associated REST API
     */
    readonly restApi: pulumi.ComputedValue<RestApi>;
    /**
     * The type of the authorizer. `TOKEN` is currently the only allowed value.
     * Defaults to `TOKEN`.
     */
    readonly type?: pulumi.ComputedValue<string>;
}

