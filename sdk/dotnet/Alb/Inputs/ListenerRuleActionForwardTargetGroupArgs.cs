// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Alb.Inputs
{

    public sealed class ListenerRuleActionForwardTargetGroupArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The Amazon Resource Name (ARN) of the target group.
        /// </summary>
        [Input("arn", required: true)]
        public Input<string> Arn { get; set; } = null!;

        /// <summary>
        /// The weight. The range is 0 to 999.
        /// </summary>
        [Input("weight")]
        public Input<int>? Weight { get; set; }

        public ListenerRuleActionForwardTargetGroupArgs()
        {
        }
    }
}
