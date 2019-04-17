# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class AccessKey(pulumi.CustomResource):
    encrypted_secret: pulumi.Output[str]
    """
    The encrypted secret, base64 encoded.
    > **NOTE:** The encrypted secret may be decrypted using the command line,
    for example: `terraform output encrypted_secret | base64 --decode | keybase pgp decrypt`.
    """
    key_fingerprint: pulumi.Output[str]
    """
    The fingerprint of the PGP key used to encrypt
    the secret
    """
    pgp_key: pulumi.Output[str]
    """
    Either a base-64 encoded PGP public key, or a
    keybase username in the form `keybase:some_person_that_exists`.
    """
    secret: pulumi.Output[str]
    """
    The secret access key. Note that this will be written
    to the state file. Please supply a `pgp_key` instead, which will prevent the
    secret from being stored in plain text
    """
    ses_smtp_password: pulumi.Output[str]
    """
    The secret access key converted into an SES SMTP
    password by applying [AWS's documented conversion
    algorithm](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/smtp-credentials.html#smtp-credentials-convert).
    """
    status: pulumi.Output[str]
    """
    The access key status to apply. Defaults to `Active`.
    Valid values are `Active` and `Inactive`.
    """
    user: pulumi.Output[str]
    """
    The IAM user to associate with this access key.
    """
    def __init__(__self__, resource_name, opts=None, pgp_key=None, status=None, user=None, __name__=None, __opts__=None):
        """
        Provides an IAM access key. This is a set of credentials that allow API requests to be made as an IAM user.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] pgp_key: Either a base-64 encoded PGP public key, or a
               keybase username in the form `keybase:some_person_that_exists`.
        :param pulumi.Input[str] status: The access key status to apply. Defaults to `Active`.
               Valid values are `Active` and `Inactive`.
        :param pulumi.Input[str] user: The IAM user to associate with this access key.
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

        __props__['pgp_key'] = pgp_key

        __props__['status'] = status

        if user is None:
            raise TypeError("Missing required property 'user'")
        __props__['user'] = user

        __props__['encrypted_secret'] = None
        __props__['key_fingerprint'] = None
        __props__['secret'] = None
        __props__['ses_smtp_password'] = None

        super(AccessKey, __self__).__init__(
            'aws:iam/accessKey:AccessKey',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

