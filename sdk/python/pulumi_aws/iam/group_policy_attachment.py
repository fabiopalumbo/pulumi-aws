# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class GroupPolicyAttachment(pulumi.CustomResource):
    group: pulumi.Output[str]
    """
    The group the policy should be applied to
    """
    policy_arn: pulumi.Output[str]
    """
    The ARN of the policy you want to apply
    """
    def __init__(__self__, resource_name, opts=None, group=None, policy_arn=None, __name__=None, __opts__=None):
        """
        Attaches a Managed IAM Policy to an IAM group
        
        > **NOTE:** The usage of this resource conflicts with the `aws_iam_policy_attachment` resource and will permanently show a difference if both are defined.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] group: The group the policy should be applied to
        :param pulumi.Input[str] policy_arn: The ARN of the policy you want to apply
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

        if group is None:
            raise TypeError("Missing required property 'group'")
        __props__['group'] = group

        if policy_arn is None:
            raise TypeError("Missing required property 'policy_arn'")
        __props__['policy_arn'] = policy_arn

        super(GroupPolicyAttachment, __self__).__init__(
            'aws:iam/groupPolicyAttachment:GroupPolicyAttachment',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

