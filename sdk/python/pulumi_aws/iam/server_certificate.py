# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class ServerCertificate(pulumi.CustomResource):
    arn: pulumi.Output[str]
    """
    The Amazon Resource Name (ARN) specifying the server certificate.
    """
    certificate_body: pulumi.Output[str]
    """
    The contents of the public key certificate in
    PEM-encoded format.
    """
    certificate_chain: pulumi.Output[str]
    """
    The contents of the certificate chain.
    This is typically a concatenation of the PEM-encoded public key certificates
    of the chain.
    """
    name: pulumi.Output[str]
    """
    The name of the Server Certificate. Do not include the
    path in this value. If omitted, this provider will assign a random, unique name.
    """
    name_prefix: pulumi.Output[str]
    """
    Creates a unique name beginning with the specified
    prefix. Conflicts with `name`.
    """
    path: pulumi.Output[str]
    """
    The IAM path for the server certificate.  If it is not
    included, it defaults to a slash (/). If this certificate is for use with
    AWS CloudFront, the path must be in format `/cloudfront/your_path_here`.
    See [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) for more details on IAM Paths.
    """
    private_key: pulumi.Output[str]
    """
    The contents of the private key in PEM-encoded format.
    """
    def __init__(__self__, resource_name, opts=None, arn=None, certificate_body=None, certificate_chain=None, name=None, name_prefix=None, path=None, private_key=None, __props__=None, __name__=None, __opts__=None):
        """
        Provides an IAM Server Certificate resource to upload Server Certificates.
        Certs uploaded to IAM can easily work with other AWS services such as:

        - AWS Elastic Beanstalk
        - Elastic Load Balancing
        - CloudFront
        - AWS OpsWorks

        For information about server certificates in IAM, see [Managing Server
        Certificates][2] in AWS Documentation.

        > **Note:** All arguments including the private key will be stored in the raw state as plain-text.

        ## Example Usage



        ```python
        import pulumi
        import pulumi_aws as aws

        test_cert = aws.iam.ServerCertificate("testCert",
            certificate_body=(lambda path: open(path).read())("self-ca-cert.pem"),
            private_key=(lambda path: open(path).read())("test-key.pem"))
        ```


        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] arn: The Amazon Resource Name (ARN) specifying the server certificate.
        :param pulumi.Input[str] certificate_body: The contents of the public key certificate in
               PEM-encoded format.
        :param pulumi.Input[str] certificate_chain: The contents of the certificate chain.
               This is typically a concatenation of the PEM-encoded public key certificates
               of the chain.
        :param pulumi.Input[str] name: The name of the Server Certificate. Do not include the
               path in this value. If omitted, this provider will assign a random, unique name.
        :param pulumi.Input[str] name_prefix: Creates a unique name beginning with the specified
               prefix. Conflicts with `name`.
        :param pulumi.Input[str] path: The IAM path for the server certificate.  If it is not
               included, it defaults to a slash (/). If this certificate is for use with
               AWS CloudFront, the path must be in format `/cloudfront/your_path_here`.
               See [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) for more details on IAM Paths.
        :param pulumi.Input[str] private_key: The contents of the private key in PEM-encoded format.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if opts is None:
            opts = pulumi.ResourceOptions()
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.version is None:
            opts.version = utilities.get_version()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = dict()

            __props__['arn'] = arn
            if certificate_body is None:
                raise TypeError("Missing required property 'certificate_body'")
            __props__['certificate_body'] = certificate_body
            __props__['certificate_chain'] = certificate_chain
            __props__['name'] = name
            __props__['name_prefix'] = name_prefix
            __props__['path'] = path
            if private_key is None:
                raise TypeError("Missing required property 'private_key'")
            __props__['private_key'] = private_key
        super(ServerCertificate, __self__).__init__(
            'aws:iam/serverCertificate:ServerCertificate',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, arn=None, certificate_body=None, certificate_chain=None, name=None, name_prefix=None, path=None, private_key=None):
        """
        Get an existing ServerCertificate resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] arn: The Amazon Resource Name (ARN) specifying the server certificate.
        :param pulumi.Input[str] certificate_body: The contents of the public key certificate in
               PEM-encoded format.
        :param pulumi.Input[str] certificate_chain: The contents of the certificate chain.
               This is typically a concatenation of the PEM-encoded public key certificates
               of the chain.
        :param pulumi.Input[str] name: The name of the Server Certificate. Do not include the
               path in this value. If omitted, this provider will assign a random, unique name.
        :param pulumi.Input[str] name_prefix: Creates a unique name beginning with the specified
               prefix. Conflicts with `name`.
        :param pulumi.Input[str] path: The IAM path for the server certificate.  If it is not
               included, it defaults to a slash (/). If this certificate is for use with
               AWS CloudFront, the path must be in format `/cloudfront/your_path_here`.
               See [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) for more details on IAM Paths.
        :param pulumi.Input[str] private_key: The contents of the private key in PEM-encoded format.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["arn"] = arn
        __props__["certificate_body"] = certificate_body
        __props__["certificate_chain"] = certificate_chain
        __props__["name"] = name
        __props__["name_prefix"] = name_prefix
        __props__["path"] = path
        __props__["private_key"] = private_key
        return ServerCertificate(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

