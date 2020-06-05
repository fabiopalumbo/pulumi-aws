// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Cfg
{
    /// <summary>
    /// Provides an AWS Config Configuration Recorder. Please note that this resource **does not start** the created recorder automatically.
    /// 
    /// &gt; **Note:** _Starting_ the Configuration Recorder requires a `delivery channel` (while delivery channel creation requires Configuration Recorder). This is why `aws.cfg.RecorderStatus` is a separate resource.
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
    ///         var role = new Aws.Iam.Role("role", new Aws.Iam.RoleArgs
    ///         {
    ///             AssumeRolePolicy = @"{
    ///   ""Version"": ""2012-10-17"",
    ///   ""Statement"": [
    ///     {
    ///       ""Action"": ""sts:AssumeRole"",
    ///       ""Principal"": {
    ///         ""Service"": ""config.amazonaws.com""
    ///       },
    ///       ""Effect"": ""Allow"",
    ///       ""Sid"": """"
    ///     }
    ///   ]
    /// }
    /// 
    /// ",
    ///         });
    ///         var foo = new Aws.Cfg.Recorder("foo", new Aws.Cfg.RecorderArgs
    ///         {
    ///             RoleArn = role.Arn,
    ///         });
    ///     }
    /// 
    /// }
    /// ```
    /// </summary>
    public partial class Recorder : Pulumi.CustomResource
    {
        /// <summary>
        /// The name of the recorder. Defaults to `default`. Changing it recreates the resource.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Recording group - see below.
        /// </summary>
        [Output("recordingGroup")]
        public Output<Outputs.RecorderRecordingGroup> RecordingGroup { get; private set; } = null!;

        /// <summary>
        /// Amazon Resource Name (ARN) of the IAM role.
        /// used to make read or write requests to the delivery channel and to describe the AWS resources associated with the account.
        /// See [AWS Docs](http://docs.aws.amazon.com/config/latest/developerguide/iamrole-permissions.html) for more details.
        /// </summary>
        [Output("roleArn")]
        public Output<string> RoleArn { get; private set; } = null!;


        /// <summary>
        /// Create a Recorder resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Recorder(string name, RecorderArgs args, CustomResourceOptions? options = null)
            : base("aws:cfg/recorder:Recorder", name, args ?? new RecorderArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Recorder(string name, Input<string> id, RecorderState? state = null, CustomResourceOptions? options = null)
            : base("aws:cfg/recorder:Recorder", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing Recorder resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Recorder Get(string name, Input<string> id, RecorderState? state = null, CustomResourceOptions? options = null)
        {
            return new Recorder(name, id, state, options);
        }
    }

    public sealed class RecorderArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the recorder. Defaults to `default`. Changing it recreates the resource.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Recording group - see below.
        /// </summary>
        [Input("recordingGroup")]
        public Input<Inputs.RecorderRecordingGroupArgs>? RecordingGroup { get; set; }

        /// <summary>
        /// Amazon Resource Name (ARN) of the IAM role.
        /// used to make read or write requests to the delivery channel and to describe the AWS resources associated with the account.
        /// See [AWS Docs](http://docs.aws.amazon.com/config/latest/developerguide/iamrole-permissions.html) for more details.
        /// </summary>
        [Input("roleArn", required: true)]
        public Input<string> RoleArn { get; set; } = null!;

        public RecorderArgs()
        {
        }
    }

    public sealed class RecorderState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the recorder. Defaults to `default`. Changing it recreates the resource.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Recording group - see below.
        /// </summary>
        [Input("recordingGroup")]
        public Input<Inputs.RecorderRecordingGroupGetArgs>? RecordingGroup { get; set; }

        /// <summary>
        /// Amazon Resource Name (ARN) of the IAM role.
        /// used to make read or write requests to the delivery channel and to describe the AWS resources associated with the account.
        /// See [AWS Docs](http://docs.aws.amazon.com/config/latest/developerguide/iamrole-permissions.html) for more details.
        /// </summary>
        [Input("roleArn")]
        public Input<string>? RoleArn { get; set; }

        public RecorderState()
        {
        }
    }
}
