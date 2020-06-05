// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Waf.Inputs
{

    public sealed class RegexMatchSetRegexMatchTupleArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The part of a web request that you want to search, such as a specified header or a query string.
        /// </summary>
        [Input("fieldToMatch", required: true)]
        public Input<Inputs.RegexMatchSetRegexMatchTupleFieldToMatchArgs> FieldToMatch { get; set; } = null!;

        /// <summary>
        /// The ID of a `WAF Regex Pattern Set`.
        /// </summary>
        [Input("regexPatternSetId", required: true)]
        public Input<string> RegexPatternSetId { get; set; } = null!;

        /// <summary>
        /// Text transformations used to eliminate unusual formatting that attackers use in web requests in an effort to bypass AWS WAF.
        /// e.g. `CMD_LINE`, `HTML_ENTITY_DECODE` or `NONE`.
        /// See [docs](http://docs.aws.amazon.com/waf/latest/APIReference/API_ByteMatchTuple.html#WAF-Type-ByteMatchTuple-TextTransformation)
        /// for all supported values.
        /// </summary>
        [Input("textTransformation", required: true)]
        public Input<string> TextTransformation { get; set; } = null!;

        public RegexMatchSetRegexMatchTupleArgs()
        {
        }
    }
}
