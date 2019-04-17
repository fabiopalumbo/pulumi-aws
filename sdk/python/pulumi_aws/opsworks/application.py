# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class Application(pulumi.CustomResource):
    app_sources: pulumi.Output[list]
    """
    SCM configuration of the app as described below.
    """
    auto_bundle_on_deploy: pulumi.Output[str]
    """
    Run bundle install when deploying for application of type `rails`.
    """
    aws_flow_ruby_settings: pulumi.Output[str]
    """
    Specify activity and workflow workers for your app using the aws-flow gem.
    """
    data_source_arn: pulumi.Output[str]
    """
    The data source's ARN.
    """
    data_source_database_name: pulumi.Output[str]
    """
    The database name.
    """
    data_source_type: pulumi.Output[str]
    """
    The data source's type one of `AutoSelectOpsworksMysqlInstance`, `OpsworksMysqlInstance`, or `RdsDbInstance`.
    """
    description: pulumi.Output[str]
    """
    A description of the app.
    """
    document_root: pulumi.Output[str]
    """
    Subfolder for the document root for application of type `rails`.
    """
    domains: pulumi.Output[list]
    """
    A list of virtual host alias.
    """
    enable_ssl: pulumi.Output[bool]
    """
    Whether to enable SSL for the app. This must be set in order to let `ssl_configuration.private_key`, `ssl_configuration.certificate` and `ssl_configuration.chain` take effect.
    """
    environments: pulumi.Output[list]
    """
    Object to define environment variables.  Object is described below.
    """
    name: pulumi.Output[str]
    """
    A human-readable name for the application.
    """
    rails_env: pulumi.Output[str]
    """
    The name of the Rails environment for application of type `rails`.
    """
    short_name: pulumi.Output[str]
    """
    A short, machine-readable name for the application. This can only be defined on resource creation and ignored on resource update.
    """
    ssl_configurations: pulumi.Output[list]
    """
    The SSL configuration of the app. Object is described below.
    """
    stack_id: pulumi.Output[str]
    """
    The id of the stack the application will belong to.
    """
    type: pulumi.Output[str]
    """
    The type of source to use. For example, "archive".
    """
    def __init__(__self__, resource_name, opts=None, app_sources=None, auto_bundle_on_deploy=None, aws_flow_ruby_settings=None, data_source_arn=None, data_source_database_name=None, data_source_type=None, description=None, document_root=None, domains=None, enable_ssl=None, environments=None, name=None, rails_env=None, short_name=None, ssl_configurations=None, stack_id=None, type=None, __name__=None, __opts__=None):
        """
        Provides an OpsWorks application resource.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[list] app_sources: SCM configuration of the app as described below.
        :param pulumi.Input[str] auto_bundle_on_deploy: Run bundle install when deploying for application of type `rails`.
        :param pulumi.Input[str] aws_flow_ruby_settings: Specify activity and workflow workers for your app using the aws-flow gem.
        :param pulumi.Input[str] data_source_arn: The data source's ARN.
        :param pulumi.Input[str] data_source_database_name: The database name.
        :param pulumi.Input[str] data_source_type: The data source's type one of `AutoSelectOpsworksMysqlInstance`, `OpsworksMysqlInstance`, or `RdsDbInstance`.
        :param pulumi.Input[str] description: A description of the app.
        :param pulumi.Input[str] document_root: Subfolder for the document root for application of type `rails`.
        :param pulumi.Input[list] domains: A list of virtual host alias.
        :param pulumi.Input[bool] enable_ssl: Whether to enable SSL for the app. This must be set in order to let `ssl_configuration.private_key`, `ssl_configuration.certificate` and `ssl_configuration.chain` take effect.
        :param pulumi.Input[list] environments: Object to define environment variables.  Object is described below.
        :param pulumi.Input[str] name: A human-readable name for the application.
        :param pulumi.Input[str] rails_env: The name of the Rails environment for application of type `rails`.
        :param pulumi.Input[str] short_name: A short, machine-readable name for the application. This can only be defined on resource creation and ignored on resource update.
        :param pulumi.Input[list] ssl_configurations: The SSL configuration of the app. Object is described below.
        :param pulumi.Input[str] stack_id: The id of the stack the application will belong to.
        :param pulumi.Input[str] type: The type of source to use. For example, "archive".
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

        __props__['app_sources'] = app_sources

        __props__['auto_bundle_on_deploy'] = auto_bundle_on_deploy

        __props__['aws_flow_ruby_settings'] = aws_flow_ruby_settings

        __props__['data_source_arn'] = data_source_arn

        __props__['data_source_database_name'] = data_source_database_name

        __props__['data_source_type'] = data_source_type

        __props__['description'] = description

        __props__['document_root'] = document_root

        __props__['domains'] = domains

        __props__['enable_ssl'] = enable_ssl

        __props__['environments'] = environments

        __props__['name'] = name

        __props__['rails_env'] = rails_env

        __props__['short_name'] = short_name

        __props__['ssl_configurations'] = ssl_configurations

        if stack_id is None:
            raise TypeError("Missing required property 'stack_id'")
        __props__['stack_id'] = stack_id

        if type is None:
            raise TypeError("Missing required property 'type'")
        __props__['type'] = type

        super(Application, __self__).__init__(
            'aws:opsworks/application:Application',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

