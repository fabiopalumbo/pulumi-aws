// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Pinpoint
{
    /// <summary>
    /// Provides a Pinpoint ADM (Amazon Device Messaging) Channel resource.
    /// 
    /// &gt; **Note:** All arguments including the Client ID and Client Secret will be stored in the raw state as plain-text.
    /// 
    /// 
    /// ## Example Usage
    /// 
    /// 
    /// 
    /// ```csharp
    /// using Pulumi;
    /// using Aws = Pulumi.Aws;
    /// 
    /// class MyStack : Stack
    /// {
    ///     public MyStack()
    ///     {
    ///         var app = new Aws.Pinpoint.App("app", new Aws.Pinpoint.AppArgs
    ///         {
    ///         });
    ///         var channel = new Aws.Pinpoint.AdmChannel("channel", new Aws.Pinpoint.AdmChannelArgs
    ///         {
    ///             ApplicationId = app.ApplicationId,
    ///             ClientId = "",
    ///             ClientSecret = "",
    ///             Enabled = true,
    ///         });
    ///     }
    /// 
    /// }
    /// ```
    /// </summary>
    public partial class AdmChannel : Pulumi.CustomResource
    {
        /// <summary>
        /// The application ID.
        /// </summary>
        [Output("applicationId")]
        public Output<string> ApplicationId { get; private set; } = null!;

        /// <summary>
        /// Client ID (part of OAuth Credentials) obtained via Amazon Developer Account.
        /// </summary>
        [Output("clientId")]
        public Output<string> ClientId { get; private set; } = null!;

        /// <summary>
        /// Client Secret (part of OAuth Credentials) obtained via Amazon Developer Account.
        /// </summary>
        [Output("clientSecret")]
        public Output<string> ClientSecret { get; private set; } = null!;

        /// <summary>
        /// Specifies whether to enable the channel. Defaults to `true`.
        /// </summary>
        [Output("enabled")]
        public Output<bool?> Enabled { get; private set; } = null!;


        /// <summary>
        /// Create a AdmChannel resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public AdmChannel(string name, AdmChannelArgs args, CustomResourceOptions? options = null)
            : base("aws:pinpoint/admChannel:AdmChannel", name, args ?? new AdmChannelArgs(), MakeResourceOptions(options, ""))
        {
        }

        private AdmChannel(string name, Input<string> id, AdmChannelState? state = null, CustomResourceOptions? options = null)
            : base("aws:pinpoint/admChannel:AdmChannel", name, state, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing AdmChannel resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static AdmChannel Get(string name, Input<string> id, AdmChannelState? state = null, CustomResourceOptions? options = null)
        {
            return new AdmChannel(name, id, state, options);
        }
    }

    public sealed class AdmChannelArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The application ID.
        /// </summary>
        [Input("applicationId", required: true)]
        public Input<string> ApplicationId { get; set; } = null!;

        /// <summary>
        /// Client ID (part of OAuth Credentials) obtained via Amazon Developer Account.
        /// </summary>
        [Input("clientId", required: true)]
        public Input<string> ClientId { get; set; } = null!;

        /// <summary>
        /// Client Secret (part of OAuth Credentials) obtained via Amazon Developer Account.
        /// </summary>
        [Input("clientSecret", required: true)]
        public Input<string> ClientSecret { get; set; } = null!;

        /// <summary>
        /// Specifies whether to enable the channel. Defaults to `true`.
        /// </summary>
        [Input("enabled")]
        public Input<bool>? Enabled { get; set; }

        public AdmChannelArgs()
        {
        }
    }

    public sealed class AdmChannelState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The application ID.
        /// </summary>
        [Input("applicationId")]
        public Input<string>? ApplicationId { get; set; }

        /// <summary>
        /// Client ID (part of OAuth Credentials) obtained via Amazon Developer Account.
        /// </summary>
        [Input("clientId")]
        public Input<string>? ClientId { get; set; }

        /// <summary>
        /// Client Secret (part of OAuth Credentials) obtained via Amazon Developer Account.
        /// </summary>
        [Input("clientSecret")]
        public Input<string>? ClientSecret { get; set; }

        /// <summary>
        /// Specifies whether to enable the channel. Defaults to `true`.
        /// </summary>
        [Input("enabled")]
        public Input<bool>? Enabled { get; set; }

        public AdmChannelState()
        {
        }
    }
}
