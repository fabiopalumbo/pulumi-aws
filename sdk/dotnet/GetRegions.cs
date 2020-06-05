// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws
{
    public static class GetRegions
    {
        /// <summary>
        /// Provides information about AWS Regions. Can be used to filter regions i.e. by Opt-In status or only regions enabled for current account. To get details like endpoint and description of each region the data source can be combined with the `aws..getRegion` data source.
        /// 
        /// {{% examples %}}
        /// ## Example Usage
        /// {{% example %}}
        /// 
        /// Enabled AWS Regions:
        /// 
        /// ```csharp
        /// using Pulumi;
        /// using Aws = Pulumi.Aws;
        /// 
        /// class MyStack : Stack
        /// {
        ///     public MyStack()
        ///     {
        ///         var current = Output.Create(Aws.GetRegions.InvokeAsync());
        ///     }
        /// 
        /// }
        /// ```
        /// 
        /// All the regions regardless of the availability
        /// 
        /// ```csharp
        /// using Pulumi;
        /// using Aws = Pulumi.Aws;
        /// 
        /// class MyStack : Stack
        /// {
        ///     public MyStack()
        ///     {
        ///         var current = Output.Create(Aws.GetRegions.InvokeAsync(new Aws.GetRegionsArgs
        ///         {
        ///             AllRegions = true,
        ///         }));
        ///     }
        /// 
        /// }
        /// ```
        /// 
        /// To see regions that are filtered by `"not-opted-in"`, the `all_regions` argument needs to be set to `true` or no results will be returned.
        /// 
        /// ```csharp
        /// using Pulumi;
        /// using Aws = Pulumi.Aws;
        /// 
        /// class MyStack : Stack
        /// {
        ///     public MyStack()
        ///     {
        ///         var current = Output.Create(Aws.GetRegions.InvokeAsync(new Aws.GetRegionsArgs
        ///         {
        ///             AllRegions = true,
        ///             Filters = 
        ///             {
        ///                 new Aws.Inputs.GetRegionsFilterArgs
        ///                 {
        ///                     Name = "opt-in-status",
        ///                     Values = 
        ///                     {
        ///                         "not-opted-in",
        ///                     },
        ///                 },
        ///             },
        ///         }));
        ///     }
        /// 
        /// }
        /// ```
        /// 
        /// {{% /example %}}
        /// {{% /examples %}}
        /// </summary>
        public static Task<GetRegionsResult> InvokeAsync(GetRegionsArgs? args = null, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetRegionsResult>("aws:index/getRegions:getRegions", args ?? new GetRegionsArgs(), options.WithVersion());
    }


    public sealed class GetRegionsArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// If true the source will query all regions regardless of availability.
        /// </summary>
        [Input("allRegions")]
        public bool? AllRegions { get; set; }

        [Input("filters")]
        private List<Inputs.GetRegionsFilterArgs>? _filters;

        /// <summary>
        /// Configuration block(s) to use as filters. Detailed below.
        /// </summary>
        public List<Inputs.GetRegionsFilterArgs> Filters
        {
            get => _filters ?? (_filters = new List<Inputs.GetRegionsFilterArgs>());
            set => _filters = value;
        }

        public GetRegionsArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetRegionsResult
    {
        public readonly bool? AllRegions;
        public readonly ImmutableArray<Outputs.GetRegionsFilterResult> Filters;
        /// <summary>
        /// The provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Names of regions that meets the criteria.
        /// </summary>
        public readonly ImmutableArray<string> Names;

        [OutputConstructor]
        private GetRegionsResult(
            bool? allRegions,

            ImmutableArray<Outputs.GetRegionsFilterResult> filters,

            string id,

            ImmutableArray<string> names)
        {
            AllRegions = allRegions;
            Filters = filters;
            Id = id;
            Names = names;
        }
    }
}
