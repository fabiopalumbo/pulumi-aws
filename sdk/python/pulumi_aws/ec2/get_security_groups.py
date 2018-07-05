# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class GetSecurityGroupsResult(object):
    """
    A collection of values returned by getSecurityGroups.
    """
    def __init__(__self__, ids=None, tags=None, vpc_ids=None, id=None):
        if ids and not isinstance(ids, list):
            raise TypeError('Expected argument ids to be a list')
        __self__.ids = ids
        """
        IDs of the matches security groups.
        """
        if tags and not isinstance(tags, dict):
            raise TypeError('Expected argument tags to be a dict')
        __self__.tags = tags
        if vpc_ids and not isinstance(vpc_ids, list):
            raise TypeError('Expected argument vpc_ids to be a list')
        __self__.vpc_ids = vpc_ids
        """
        The VPC IDs of the matched security groups. The data source's tag or filter *will span VPCs*
        unless the `vpc-id` filter is also used.
        """
        if id and not isinstance(id, basestring):
            raise TypeError('Expected argument id to be a basestring')
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

def get_security_groups(filters=None, tags=None):
    """
    Use this data source to get IDs and VPC membership of Security Groups that are created
    outside of Terraform.
    """
    __args__ = dict()

    __args__['filters'] = filters
    __args__['tags'] = tags
    __ret__ = pulumi.runtime.invoke('aws:ec2/getSecurityGroups:getSecurityGroups', __args__)

    return GetSecurityGroupsResult(
        ids=__ret__.get('ids'),
        tags=__ret__.get('tags'),
        vpc_ids=__ret__.get('vpcIds'),
        id=__ret__.get('id'))
