// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "pulumi";

/**
 * Provides an SSM Maintenance Window resource
 */
export class MaintenanceWindow extends pulumi.Resource {
    /**
     * Whether targets must be registered with the Maintenance Window before tasks can be defined for those targets.
     */
    public readonly allowUnassociatedTargets?: pulumi.Computed<boolean>;
    /**
     * The number of hours before the end of the Maintenance Window that Systems Manager stops scheduling new tasks for execution.
     */
    public readonly cutoff: pulumi.Computed<number>;
    /**
     * The duration of the Maintenance Window in hours.
     */
    public readonly duration: pulumi.Computed<number>;
    public readonly enabled?: pulumi.Computed<boolean>;
    /**
     * The name of the maintenance window.
     */
    public readonly name: pulumi.Computed<string>;
    /**
     * The schedule of the Maintenance Window in the form of a [cron](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-maintenance-cron.html) or rate expression.
     */
    public readonly schedule: pulumi.Computed<string>;

    /**
     * Create a MaintenanceWindow resource with the given unique name, arguments, and optional additional
     * resource dependencies.
     *
     * @param urnName A _unique_ name for this MaintenanceWindow instance
     * @param args A collection of arguments for creating this MaintenanceWindow instance
     * @param dependsOn A optional array of additional resources this instance depends on
     */
    constructor(urnName: string, args: MaintenanceWindowArgs, dependsOn?: pulumi.Resource[]) {
        if (args.cutoff === undefined) {
            throw new Error("Missing required property 'cutoff'");
        }
        if (args.duration === undefined) {
            throw new Error("Missing required property 'duration'");
        }
        if (args.schedule === undefined) {
            throw new Error("Missing required property 'schedule'");
        }
        super("aws:ssm/maintenanceWindow:MaintenanceWindow", urnName, {
            "allowUnassociatedTargets": args.allowUnassociatedTargets,
            "cutoff": args.cutoff,
            "duration": args.duration,
            "enabled": args.enabled,
            "name": args.name,
            "schedule": args.schedule,
        }, dependsOn);
    }
}

/**
 * The set of arguments for constructing a MaintenanceWindow resource.
 */
export interface MaintenanceWindowArgs {
    /**
     * Whether targets must be registered with the Maintenance Window before tasks can be defined for those targets.
     */
    readonly allowUnassociatedTargets?: pulumi.ComputedValue<boolean>;
    /**
     * The number of hours before the end of the Maintenance Window that Systems Manager stops scheduling new tasks for execution.
     */
    readonly cutoff: pulumi.ComputedValue<number>;
    /**
     * The duration of the Maintenance Window in hours.
     */
    readonly duration: pulumi.ComputedValue<number>;
    readonly enabled?: pulumi.ComputedValue<boolean>;
    /**
     * The name of the maintenance window.
     */
    readonly name?: pulumi.ComputedValue<string>;
    /**
     * The schedule of the Maintenance Window in the form of a [cron](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-maintenance-cron.html) or rate expression.
     */
    readonly schedule: pulumi.ComputedValue<string>;
}

