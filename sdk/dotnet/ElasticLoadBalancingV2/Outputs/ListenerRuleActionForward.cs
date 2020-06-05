// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.ElasticLoadBalancingV2.Outputs
{

    [OutputType]
    public sealed class ListenerRuleActionForward
    {
        /// <summary>
        /// The target group stickiness for the rule.
        /// </summary>
        public readonly Outputs.ListenerRuleActionForwardStickiness? Stickiness;
        /// <summary>
        /// One or more target groups block.
        /// </summary>
        public readonly ImmutableArray<Outputs.ListenerRuleActionForwardTargetGroup> TargetGroups;

        [OutputConstructor]
        private ListenerRuleActionForward(
            Outputs.ListenerRuleActionForwardStickiness? stickiness,

            ImmutableArray<Outputs.ListenerRuleActionForwardTargetGroup> targetGroups)
        {
            Stickiness = stickiness;
            TargetGroups = targetGroups;
        }
    }
}
