# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class Domain(pulumi.CustomResource):
    def __init__(__self__, __name__, __opts__=None, access_policies=None, advanced_options=None, cluster_config=None, domain_name=None, ebs_options=None, elasticsearch_version=None, encrypt_at_rest=None, log_publishing_options=None, snapshot_options=None, tags=None, vpc_options=None):
        """Create a Domain resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if access_policies and not isinstance(access_policies, basestring):
            raise TypeError('Expected property access_policies to be a basestring')
        __self__.access_policies = access_policies
        """
        IAM policy document specifying the access policies for the domain
        """
        __props__['accessPolicies'] = access_policies

        if advanced_options and not isinstance(advanced_options, dict):
            raise TypeError('Expected property advanced_options to be a dict')
        __self__.advanced_options = advanced_options
        """
        Key-value string pairs to specify advanced configuration options.
        Note that the values for these configuration options must be strings (wrapped in quotes) or they
        may be wrong and cause a perpetual diff, causing Terraform to want to recreate your Elasticsearch
        domain on every apply.
        """
        __props__['advancedOptions'] = advanced_options

        if cluster_config and not isinstance(cluster_config, dict):
            raise TypeError('Expected property cluster_config to be a dict')
        __self__.cluster_config = cluster_config
        """
        Cluster configuration of the domain, see below.
        """
        __props__['clusterConfig'] = cluster_config

        if domain_name and not isinstance(domain_name, basestring):
            raise TypeError('Expected property domain_name to be a basestring')
        __self__.domain_name = domain_name
        """
        Name of the domain.
        """
        __props__['domainName'] = domain_name

        if ebs_options and not isinstance(ebs_options, dict):
            raise TypeError('Expected property ebs_options to be a dict')
        __self__.ebs_options = ebs_options
        """
        EBS related options, may be required based on chosen [instance size](https://aws.amazon.com/elasticsearch-service/pricing/). See below.
        """
        __props__['ebsOptions'] = ebs_options

        if elasticsearch_version and not isinstance(elasticsearch_version, basestring):
            raise TypeError('Expected property elasticsearch_version to be a basestring')
        __self__.elasticsearch_version = elasticsearch_version
        """
        The version of ElasticSearch to deploy. Defaults to `1.5`
        """
        __props__['elasticsearchVersion'] = elasticsearch_version

        if encrypt_at_rest and not isinstance(encrypt_at_rest, dict):
            raise TypeError('Expected property encrypt_at_rest to be a dict')
        __self__.encrypt_at_rest = encrypt_at_rest
        """
        Encrypt at rest options. Only available for [certain instance types](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/aes-supported-instance-types.html). See below.
        """
        __props__['encryptAtRest'] = encrypt_at_rest

        if log_publishing_options and not isinstance(log_publishing_options, list):
            raise TypeError('Expected property log_publishing_options to be a list')
        __self__.log_publishing_options = log_publishing_options
        """
        Options for publishing slow logs to CloudWatch Logs.
        """
        __props__['logPublishingOptions'] = log_publishing_options

        if snapshot_options and not isinstance(snapshot_options, dict):
            raise TypeError('Expected property snapshot_options to be a dict')
        __self__.snapshot_options = snapshot_options
        """
        Snapshot related options, see below.
        """
        __props__['snapshotOptions'] = snapshot_options

        if tags and not isinstance(tags, dict):
            raise TypeError('Expected property tags to be a dict')
        __self__.tags = tags
        """
        A mapping of tags to assign to the resource
        """
        __props__['tags'] = tags

        if vpc_options and not isinstance(vpc_options, dict):
            raise TypeError('Expected property vpc_options to be a dict')
        __self__.vpc_options = vpc_options
        """
        VPC related options, see below. Adding or removing this configuration forces a new resource ([documentation](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html#es-vpc-limitations)).
        """
        __props__['vpcOptions'] = vpc_options

        __self__.arn = pulumi.runtime.UNKNOWN
        """
        Amazon Resource Name (ARN) of the domain.
        """
        __self__.domain_id = pulumi.runtime.UNKNOWN
        """
        Unique identifier for the domain.
        """
        __self__.endpoint = pulumi.runtime.UNKNOWN
        """
        Domain-specific endpoint used to submit index, search, and data upload requests.
        """
        __self__.kibana_endpoint = pulumi.runtime.UNKNOWN
        """
        Domain-specific endpoint for kibana without https scheme.
        * `vpc_options.0.availability_zones` - If the domain was created inside a VPC, the names of the availability zones the configured `subnet_ids` were created inside.
        * `vpc_options.0.vpc_id` - If the domain was created inside a VPC, the ID of the VPC.
        """

        super(Domain, __self__).__init__(
            'aws:elasticsearch/domain:Domain',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'accessPolicies' in outs:
            self.access_policies = outs['accessPolicies']
        if 'advancedOptions' in outs:
            self.advanced_options = outs['advancedOptions']
        if 'arn' in outs:
            self.arn = outs['arn']
        if 'clusterConfig' in outs:
            self.cluster_config = outs['clusterConfig']
        if 'domainId' in outs:
            self.domain_id = outs['domainId']
        if 'domainName' in outs:
            self.domain_name = outs['domainName']
        if 'ebsOptions' in outs:
            self.ebs_options = outs['ebsOptions']
        if 'elasticsearchVersion' in outs:
            self.elasticsearch_version = outs['elasticsearchVersion']
        if 'encryptAtRest' in outs:
            self.encrypt_at_rest = outs['encryptAtRest']
        if 'endpoint' in outs:
            self.endpoint = outs['endpoint']
        if 'kibanaEndpoint' in outs:
            self.kibana_endpoint = outs['kibanaEndpoint']
        if 'logPublishingOptions' in outs:
            self.log_publishing_options = outs['logPublishingOptions']
        if 'snapshotOptions' in outs:
            self.snapshot_options = outs['snapshotOptions']
        if 'tags' in outs:
            self.tags = outs['tags']
        if 'vpcOptions' in outs:
            self.vpc_options = outs['vpcOptions']
