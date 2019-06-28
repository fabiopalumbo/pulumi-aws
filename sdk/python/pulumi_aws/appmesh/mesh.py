# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Mesh(pulumi.CustomResource):
    arn: pulumi.Output[str]
    """
    The ARN of the service mesh.
    """
    created_date: pulumi.Output[str]
    """
    The creation date of the service mesh.
    """
    last_updated_date: pulumi.Output[str]
    """
    The last update date of the service mesh.
    """
    name: pulumi.Output[str]
    """
    The name to use for the service mesh.
    """
    spec: pulumi.Output[dict]
    """
    The service mesh specification to apply.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    def __init__(__self__, resource_name, opts=None, name=None, spec=None, tags=None, __name__=None, __opts__=None):
        """
        Provides an AWS App Mesh service mesh resource.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] name: The name to use for the service mesh.
        :param pulumi.Input[dict] spec: The service mesh specification to apply.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
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

        __props__['name'] = name

        __props__['spec'] = spec

        __props__['tags'] = tags

        __props__['arn'] = None
        __props__['created_date'] = None
        __props__['last_updated_date'] = None

        super(Mesh, __self__).__init__(
            'aws:appmesh/mesh:Mesh',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

