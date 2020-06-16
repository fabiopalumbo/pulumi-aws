// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Lambda.Inputs
{

    public sealed class FunctionFileSystemConfigArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The ARN of the EFS Access Profile that provides access to the file system.
        /// </summary>
        [Input("arn", required: true)]
        public Input<string> Arn { get; set; } = null!;

        /// <summary>
        /// The path where the function can access the file system, starting with `/mnt/`.
        /// </summary>
        [Input("localMountPath", required: true)]
        public Input<string> LocalMountPath { get; set; } = null!;

        public FunctionFileSystemConfigArgs()
        {
        }
    }
}
