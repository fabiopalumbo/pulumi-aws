// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides an Elastic Beanstalk Configuration Template, which are associated with
 * a specific application and are used to deploy different versions of the
 * application with the same configuration settings.
 */
export class ConfigurationTemplate extends pulumi.Resource {
    /**
     * name of the application to associate with this configuration template
     */
    public readonly application: pulumi.Computed<string>;
    /**
     * Short description of the Template
     */
    public readonly description?: pulumi.Computed<string>;
    /**
     * The ID of the environment used with this configuration template
     * * `setting` – (Optional) Option settings to configure the new Environment. These
     * override specific values that are set as defaults. The format is detailed
     * below in [Option Settings](#option-settings)
     * * `solution_stack_name` – (Optional) A solution stack to base your Template
     * off of. Example stacks can be found in the [Amazon API documentation][1]
     */
    public readonly environmentId?: pulumi.Computed<string>;
    /**
     * A unique name for this Template.
     */
    public readonly name: pulumi.Computed<string>;
    public readonly setting: pulumi.Computed<{ name: string, namespace: string, resource?: string, value: string }[]>;
    public readonly solutionStackName?: pulumi.Computed<string>;

    /**
     * Create a ConfigurationTemplate resource with the given unique name, arguments, and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this ConfigurationTemplate instance
     * @param args A collection of arguments for creating this ConfigurationTemplate instance
     * @param dependsOn A optional array of additional resources this instance depends on
     */
    constructor(urnName: string, args: ConfigurationTemplateArgs, dependsOn?: pulumi.Resource[]) {
        if (args.application === undefined) {
            throw new Error("Missing required property 'application'");
        }
        super("aws:elasticbeanstalk/configurationTemplate:ConfigurationTemplate", urnName, {
            "application": args.application,
            "description": args.description,
            "environmentId": args.environmentId,
            "name": args.name,
            "setting": args.setting,
            "solutionStackName": args.solutionStackName,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a ConfigurationTemplate resource.
 */
export interface ConfigurationTemplateArgs {
    /**
     * name of the application to associate with this configuration template
     */
    readonly application: pulumi.ComputedValue<string>;
    /**
     * Short description of the Template
     */
    readonly description?: pulumi.ComputedValue<string>;
    /**
     * The ID of the environment used with this configuration template
     * * `setting` – (Optional) Option settings to configure the new Environment. These
     * override specific values that are set as defaults. The format is detailed
     * below in [Option Settings](#option-settings)
     * * `solution_stack_name` – (Optional) A solution stack to base your Template
     * off of. Example stacks can be found in the [Amazon API documentation][1]
     */
    readonly environmentId?: pulumi.ComputedValue<string>;
    /**
     * A unique name for this Template.
     */
    readonly name?: pulumi.ComputedValue<string>;
    readonly setting?: pulumi.ComputedValue<{ name: pulumi.ComputedValue<string>, namespace: pulumi.ComputedValue<string>, resource?: pulumi.ComputedValue<string>, value: pulumi.ComputedValue<string> }>[];
    readonly solutionStackName?: pulumi.ComputedValue<string>;
}

