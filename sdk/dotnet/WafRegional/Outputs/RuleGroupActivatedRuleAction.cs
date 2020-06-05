// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.WafRegional.Outputs
{

    [OutputType]
    public sealed class RuleGroupActivatedRuleAction
    {
        /// <summary>
        /// The rule type, either `REGULAR`, `RATE_BASED`, or `GROUP`. Defaults to `REGULAR`.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private RuleGroupActivatedRuleAction(string type)
        {
            Type = type;
        }
    }
}
