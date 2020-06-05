// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Kms
{
    /// <summary>
    /// Manages a KMS Customer Master Key that uses external key material. To instead manage a KMS Customer Master Key where AWS automatically generates and potentially rotates key material, see the `aws.kms.Key` resource.
    /// 
    /// &gt; **Note:** All arguments including the key material will be stored in the raw state as plain-text.
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
    ///         var example = new Aws.Kms.ExternalKey("example", new Aws.Kms.ExternalKeyArgs
    ///         {
    ///             Description = "KMS EXTERNAL for AMI encryption",
    ///         });
    ///     }
    /// 
    /// }
    /// ```
    /// </summary>
    public partial class ExternalKey : Pulumi.CustomResource
    {
        /// <summary>
        /// The Amazon Resource Name (ARN) of the key.
        /// </summary>
        [Output("arn")]
        public Output<string> Arn { get; private set; } = null!;

        /// <summary>
        /// Duration in days after which the key is deleted after destruction of the resource. Must be between `7` and `30` days. Defaults to `30`.
        /// </summary>
        [Output("deletionWindowInDays")]
        public Output<int?> DeletionWindowInDays { get; private set; } = null!;

        /// <summary>
        /// Description of the key.
        /// </summary>
        [Output("description")]
        public Output<string?> Description { get; private set; } = null!;

        /// <summary>
        /// Specifies whether the key is enabled. Keys pending import can only be `false`. Imported keys default to `true` unless expired.
        /// </summary>
        [Output("enabled")]
        public Output<bool> Enabled { get; private set; } = null!;

        /// <summary>
        /// Whether the key material expires. Empty when pending key material import, otherwise `KEY_MATERIAL_EXPIRES` or `KEY_MATERIAL_DOES_NOT_EXPIRE`.
        /// </summary>
        [Output("expirationModel")]
        public Output<string> ExpirationModel { get; private set; } = null!;

        /// <summary>
        /// Base64 encoded 256-bit symmetric encryption key material to import. The CMK is permanently associated with this key material. The same key material can be reimported, but you cannot import different key material.
        /// </summary>
        [Output("keyMaterialBase64")]
        public Output<string?> KeyMaterialBase64 { get; private set; } = null!;

        /// <summary>
        /// The state of the CMK.
        /// </summary>
        [Output("keyState")]
        public Output<string> KeyState { get; private set; } = null!;

        /// <summary>
        /// The cryptographic operations for which you can use the CMK.
        /// </summary>
        [Output("keyUsage")]
        public Output<string> KeyUsage { get; private set; } = null!;

        /// <summary>
        /// A key policy JSON document. If you do not provide a key policy, AWS KMS attaches a default key policy to the CMK.
        /// </summary>
        [Output("policy")]
        public Output<string> Policy { get; private set; } = null!;

        /// <summary>
        /// A key-value map of tags to assign to the key.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, object>?> Tags { get; private set; } = null!;

        /// <summary>
        /// Time at which the imported key material expires. When the key material expires, AWS KMS deletes the key material and the CMK becomes unusable. If not specified, key material does not expire. Valid values: [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) (`YYYY-MM-DDTHH:MM:SSZ`)
        /// </summary>
        [Output("validTo")]
        public Output<string?> ValidTo { get; private set; } = null!;


        /// <summary>
        /// Create a ExternalKey resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ExternalKey(string name, ExternalKeyArgs? args = null, CustomResourceOptions? options = null)
            : base("aws:kms/externalKey:ExternalKey", name, args ?? new ExternalKeyArgs(), MakeResourceOptions(options, ""))
        {
        }

        private ExternalKey(string name, Input<string> id, ExternalKeyState? state = null, CustomResourceOptions? options = null)
            : base("aws:kms/externalKey:ExternalKey", name, state, MakeResourceOptions(options, id))
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
        /// Get an existing ExternalKey resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="state">Any extra arguments used during the lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ExternalKey Get(string name, Input<string> id, ExternalKeyState? state = null, CustomResourceOptions? options = null)
        {
            return new ExternalKey(name, id, state, options);
        }
    }

    public sealed class ExternalKeyArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Duration in days after which the key is deleted after destruction of the resource. Must be between `7` and `30` days. Defaults to `30`.
        /// </summary>
        [Input("deletionWindowInDays")]
        public Input<int>? DeletionWindowInDays { get; set; }

        /// <summary>
        /// Description of the key.
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        /// <summary>
        /// Specifies whether the key is enabled. Keys pending import can only be `false`. Imported keys default to `true` unless expired.
        /// </summary>
        [Input("enabled")]
        public Input<bool>? Enabled { get; set; }

        /// <summary>
        /// Base64 encoded 256-bit symmetric encryption key material to import. The CMK is permanently associated with this key material. The same key material can be reimported, but you cannot import different key material.
        /// </summary>
        [Input("keyMaterialBase64")]
        public Input<string>? KeyMaterialBase64 { get; set; }

        /// <summary>
        /// A key policy JSON document. If you do not provide a key policy, AWS KMS attaches a default key policy to the CMK.
        /// </summary>
        [Input("policy")]
        public Input<string>? Policy { get; set; }

        [Input("tags")]
        private InputMap<object>? _tags;

        /// <summary>
        /// A key-value map of tags to assign to the key.
        /// </summary>
        public InputMap<object> Tags
        {
            get => _tags ?? (_tags = new InputMap<object>());
            set => _tags = value;
        }

        /// <summary>
        /// Time at which the imported key material expires. When the key material expires, AWS KMS deletes the key material and the CMK becomes unusable. If not specified, key material does not expire. Valid values: [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) (`YYYY-MM-DDTHH:MM:SSZ`)
        /// </summary>
        [Input("validTo")]
        public Input<string>? ValidTo { get; set; }

        public ExternalKeyArgs()
        {
        }
    }

    public sealed class ExternalKeyState : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The Amazon Resource Name (ARN) of the key.
        /// </summary>
        [Input("arn")]
        public Input<string>? Arn { get; set; }

        /// <summary>
        /// Duration in days after which the key is deleted after destruction of the resource. Must be between `7` and `30` days. Defaults to `30`.
        /// </summary>
        [Input("deletionWindowInDays")]
        public Input<int>? DeletionWindowInDays { get; set; }

        /// <summary>
        /// Description of the key.
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        /// <summary>
        /// Specifies whether the key is enabled. Keys pending import can only be `false`. Imported keys default to `true` unless expired.
        /// </summary>
        [Input("enabled")]
        public Input<bool>? Enabled { get; set; }

        /// <summary>
        /// Whether the key material expires. Empty when pending key material import, otherwise `KEY_MATERIAL_EXPIRES` or `KEY_MATERIAL_DOES_NOT_EXPIRE`.
        /// </summary>
        [Input("expirationModel")]
        public Input<string>? ExpirationModel { get; set; }

        /// <summary>
        /// Base64 encoded 256-bit symmetric encryption key material to import. The CMK is permanently associated with this key material. The same key material can be reimported, but you cannot import different key material.
        /// </summary>
        [Input("keyMaterialBase64")]
        public Input<string>? KeyMaterialBase64 { get; set; }

        /// <summary>
        /// The state of the CMK.
        /// </summary>
        [Input("keyState")]
        public Input<string>? KeyState { get; set; }

        /// <summary>
        /// The cryptographic operations for which you can use the CMK.
        /// </summary>
        [Input("keyUsage")]
        public Input<string>? KeyUsage { get; set; }

        /// <summary>
        /// A key policy JSON document. If you do not provide a key policy, AWS KMS attaches a default key policy to the CMK.
        /// </summary>
        [Input("policy")]
        public Input<string>? Policy { get; set; }

        [Input("tags")]
        private InputMap<object>? _tags;

        /// <summary>
        /// A key-value map of tags to assign to the key.
        /// </summary>
        public InputMap<object> Tags
        {
            get => _tags ?? (_tags = new InputMap<object>());
            set => _tags = value;
        }

        /// <summary>
        /// Time at which the imported key material expires. When the key material expires, AWS KMS deletes the key material and the CMK becomes unusable. If not specified, key material does not expire. Valid values: [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) (`YYYY-MM-DDTHH:MM:SSZ`)
        /// </summary>
        [Input("validTo")]
        public Input<string>? ValidTo { get; set; }

        public ExternalKeyState()
        {
        }
    }
}
