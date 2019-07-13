# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Role(pulumi.CustomResource):
    arn: pulumi.Output[str]
    """
    The Amazon Resource Name (ARN) specifying the role.
    """
    assume_role_policy: pulumi.Output[str]
    """
    The policy that grants an entity permission to assume the role.
    """
    create_date: pulumi.Output[str]
    """
    The creation date of the IAM role.
    """
    description: pulumi.Output[str]
    """
    The description of the role.
    """
    force_detach_policies: pulumi.Output[bool]
    """
    Specifies to force detaching any policies the role has before destroying it. Defaults to `false`.
    """
    max_session_duration: pulumi.Output[float]
    """
    The maximum session duration (in seconds) that you want to set for the specified role. If you do not specify a value for this setting, the default maximum of one hour is applied. This setting can have a value from 1 hour to 12 hours.
    """
    name: pulumi.Output[str]
    name_prefix: pulumi.Output[str]
    """
    Creates a unique name beginning with the specified prefix. Conflicts with `name`.
    """
    path: pulumi.Output[str]
    """
    The path to the role.
    See [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) for more information.
    """
    permissions_boundary: pulumi.Output[str]
    """
    The ARN of the policy that is used to set the permissions boundary for the role.
    """
    tags: pulumi.Output[dict]
    """
    Key-value mapping of tags for the IAM role
    """
    unique_id: pulumi.Output[str]
    """
    The stable and unique string identifying the role.
    """
    def __init__(__self__, resource_name, opts=None, assume_role_policy=None, description=None, force_detach_policies=None, max_session_duration=None, name=None, name_prefix=None, path=None, permissions_boundary=None, tags=None, __name__=None, __opts__=None):
        """
        Provides an IAM role.
        
        > *NOTE:* If policies are attached to the role via the [`aws_iam_policy_attachment` resource](https://www.terraform.io/docs/providers/aws/r/iam_policy_attachment.html) and you are modifying the role `name` or `path`, the `force_detach_policies` argument must be set to `true` and applied before attempting the operation otherwise you will encounter a `DeleteConflict` error. The [`aws_iam_role_policy_attachment` resource (recommended)](https://www.terraform.io/docs/providers/aws/r/iam_role_policy_attachment.html) does not have this requirement.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] assume_role_policy: The policy that grants an entity permission to assume the role.
        :param pulumi.Input[str] description: The description of the role.
        :param pulumi.Input[bool] force_detach_policies: Specifies to force detaching any policies the role has before destroying it. Defaults to `false`.
        :param pulumi.Input[float] max_session_duration: The maximum session duration (in seconds) that you want to set for the specified role. If you do not specify a value for this setting, the default maximum of one hour is applied. This setting can have a value from 1 hour to 12 hours.
        :param pulumi.Input[str] name_prefix: Creates a unique name beginning with the specified prefix. Conflicts with `name`.
        :param pulumi.Input[str] path: The path to the role.
               See [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) for more information.
        :param pulumi.Input[str] permissions_boundary: The ARN of the policy that is used to set the permissions boundary for the role.
        :param pulumi.Input[dict] tags: Key-value mapping of tags for the IAM role

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/iam_role.html.markdown.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if not resource_name:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(resource_name, str):
            raise TypeError('Expected resource name to be a string')
        if opts and not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if assume_role_policy is None:
            raise TypeError("Missing required property 'assume_role_policy'")
        __props__['assume_role_policy'] = assume_role_policy

        __props__['description'] = description

        __props__['force_detach_policies'] = force_detach_policies

        __props__['max_session_duration'] = max_session_duration

        __props__['name'] = name

        __props__['name_prefix'] = name_prefix

        __props__['path'] = path

        __props__['permissions_boundary'] = permissions_boundary

        __props__['tags'] = tags

        __props__['arn'] = None
        __props__['create_date'] = None
        __props__['unique_id'] = None

        super(Role, __self__).__init__(
            'aws:iam/role:Role',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

