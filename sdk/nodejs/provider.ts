// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

import {Region} from "./region";

/**
 * The provider type for the aws package. By default, resources use package-wide configuration
 * settings, however an explicit `Provider` instance may be created and passed during resource
 * construction to achieve fine-grained programmatic control over provider settings. See the
 * [documentation](https://pulumi.io/reference/programming-model.html#providers) for more information.
 */
export class Provider extends pulumi.ProviderResource {

    /**
     * Create a Provider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ProviderArgs, opts?: pulumi.ResourceOptions) {
        let inputs: pulumi.Inputs = {};
        {
            inputs["accessKey"] = args ? args.accessKey : undefined;
            inputs["allowedAccountIds"] = pulumi.output(args ? args.allowedAccountIds : undefined).apply(JSON.stringify);
            inputs["assumeRole"] = pulumi.output(args ? args.assumeRole : undefined).apply(JSON.stringify);
            inputs["endpoints"] = pulumi.output(args ? args.endpoints : undefined).apply(JSON.stringify);
            inputs["forbiddenAccountIds"] = pulumi.output(args ? args.forbiddenAccountIds : undefined).apply(JSON.stringify);
            inputs["insecure"] = pulumi.output(args ? args.insecure : undefined).apply(JSON.stringify);
            inputs["maxRetries"] = pulumi.output(args ? args.maxRetries : undefined).apply(JSON.stringify);
            inputs["profile"] = args ? args.profile : undefined;
            inputs["region"] = (args ? args.region : undefined) || utilities.getEnv("AWS_REGION", "AWS_DEFAULT_REGION");
            inputs["s3ForcePathStyle"] = pulumi.output(args ? args.s3ForcePathStyle : undefined).apply(JSON.stringify);
            inputs["secretKey"] = args ? args.secretKey : undefined;
            inputs["sharedCredentialsFile"] = args ? args.sharedCredentialsFile : undefined;
            inputs["skipCredentialsValidation"] = pulumi.output(args ? args.skipCredentialsValidation : undefined).apply(JSON.stringify);
            inputs["skipGetEc2Platforms"] = pulumi.output(args ? args.skipGetEc2Platforms : undefined).apply(JSON.stringify);
            inputs["skipMetadataApiCheck"] = pulumi.output(args ? args.skipMetadataApiCheck : undefined).apply(JSON.stringify);
            inputs["skipRegionValidation"] = pulumi.output(args ? args.skipRegionValidation : undefined).apply(JSON.stringify);
            inputs["skipRequestingAccountId"] = pulumi.output(args ? args.skipRequestingAccountId : undefined).apply(JSON.stringify);
            inputs["token"] = args ? args.token : undefined;
        }
        super("aws", name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a Provider resource.
 */
export interface ProviderArgs {
    /**
     * The access key for API operations. You can retrieve this from the 'Security & Credentials' section of the AWS
     * console.
     */
    readonly accessKey?: pulumi.Input<string>;
    readonly allowedAccountIds?: pulumi.Input<pulumi.Input<string>[]>;
    readonly assumeRole?: pulumi.Input<{ externalId?: pulumi.Input<string>, policy?: pulumi.Input<string>, roleArn?: pulumi.Input<string>, sessionName?: pulumi.Input<string> }>;
    readonly endpoints?: pulumi.Input<pulumi.Input<{ acm?: pulumi.Input<string>, acmpca?: pulumi.Input<string>, apigateway?: pulumi.Input<string>, applicationautoscaling?: pulumi.Input<string>, appmesh?: pulumi.Input<string>, appsync?: pulumi.Input<string>, athena?: pulumi.Input<string>, autoscaling?: pulumi.Input<string>, backup?: pulumi.Input<string>, batch?: pulumi.Input<string>, budgets?: pulumi.Input<string>, cloud9?: pulumi.Input<string>, cloudformation?: pulumi.Input<string>, cloudfront?: pulumi.Input<string>, cloudhsm?: pulumi.Input<string>, cloudsearch?: pulumi.Input<string>, cloudtrail?: pulumi.Input<string>, cloudwatch?: pulumi.Input<string>, cloudwatchevents?: pulumi.Input<string>, cloudwatchlogs?: pulumi.Input<string>, codebuild?: pulumi.Input<string>, codecommit?: pulumi.Input<string>, codedeploy?: pulumi.Input<string>, codepipeline?: pulumi.Input<string>, cognitoidentity?: pulumi.Input<string>, cognitoidp?: pulumi.Input<string>, configservice?: pulumi.Input<string>, cur?: pulumi.Input<string>, datapipeline?: pulumi.Input<string>, datasync?: pulumi.Input<string>, dax?: pulumi.Input<string>, devicefarm?: pulumi.Input<string>, directconnect?: pulumi.Input<string>, dlm?: pulumi.Input<string>, dms?: pulumi.Input<string>, docdb?: pulumi.Input<string>, ds?: pulumi.Input<string>, dynamodb?: pulumi.Input<string>, ec2?: pulumi.Input<string>, ecr?: pulumi.Input<string>, ecs?: pulumi.Input<string>, efs?: pulumi.Input<string>, eks?: pulumi.Input<string>, elasticache?: pulumi.Input<string>, elasticbeanstalk?: pulumi.Input<string>, elastictranscoder?: pulumi.Input<string>, elb?: pulumi.Input<string>, emr?: pulumi.Input<string>, es?: pulumi.Input<string>, firehose?: pulumi.Input<string>, fms?: pulumi.Input<string>, fsx?: pulumi.Input<string>, gamelift?: pulumi.Input<string>, glacier?: pulumi.Input<string>, globalaccelerator?: pulumi.Input<string>, glue?: pulumi.Input<string>, guardduty?: pulumi.Input<string>, iam?: pulumi.Input<string>, inspector?: pulumi.Input<string>, iot?: pulumi.Input<string>, kafka?: pulumi.Input<string>, kinesis?: pulumi.Input<string>, kinesisAnalytics?: pulumi.Input<string>, kinesisanalytics?: pulumi.Input<string>, kms?: pulumi.Input<string>, lambda?: pulumi.Input<string>, lexmodels?: pulumi.Input<string>, licensemanager?: pulumi.Input<string>, lightsail?: pulumi.Input<string>, macie?: pulumi.Input<string>, mediaconnect?: pulumi.Input<string>, mediaconvert?: pulumi.Input<string>, medialive?: pulumi.Input<string>, mediapackage?: pulumi.Input<string>, mediastore?: pulumi.Input<string>, mediastoredata?: pulumi.Input<string>, mq?: pulumi.Input<string>, neptune?: pulumi.Input<string>, opsworks?: pulumi.Input<string>, organizations?: pulumi.Input<string>, pinpoint?: pulumi.Input<string>, pricing?: pulumi.Input<string>, quicksight?: pulumi.Input<string>, r53?: pulumi.Input<string>, ram?: pulumi.Input<string>, rds?: pulumi.Input<string>, redshift?: pulumi.Input<string>, resourcegroups?: pulumi.Input<string>, route53?: pulumi.Input<string>, route53resolver?: pulumi.Input<string>, s3?: pulumi.Input<string>, s3control?: pulumi.Input<string>, sagemaker?: pulumi.Input<string>, sdb?: pulumi.Input<string>, secretsmanager?: pulumi.Input<string>, securityhub?: pulumi.Input<string>, serverlessrepo?: pulumi.Input<string>, servicecatalog?: pulumi.Input<string>, servicediscovery?: pulumi.Input<string>, ses?: pulumi.Input<string>, shield?: pulumi.Input<string>, sns?: pulumi.Input<string>, sqs?: pulumi.Input<string>, ssm?: pulumi.Input<string>, stepfunctions?: pulumi.Input<string>, storagegateway?: pulumi.Input<string>, sts?: pulumi.Input<string>, swf?: pulumi.Input<string>, transfer?: pulumi.Input<string>, waf?: pulumi.Input<string>, wafregional?: pulumi.Input<string>, worklink?: pulumi.Input<string>, workspaces?: pulumi.Input<string> }>[]>;
    readonly forbiddenAccountIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Explicitly allow the provider to perform "insecure" SSL requests. If omitted,default value is `false`
     */
    readonly insecure?: pulumi.Input<boolean>;
    /**
     * The maximum number of times an AWS API request is being executed. If the API request still fails, an error is
     * thrown.
     */
    readonly maxRetries?: pulumi.Input<number>;
    /**
     * The profile for API operations. If not set, the default profile created with `aws configure` will be used.
     */
    readonly profile?: pulumi.Input<string>;
    /**
     * The region where AWS operations will take place. Examples are us-east-1, us-west-2, etc.
     */
    readonly region?: pulumi.Input<Region>;
    /**
     * Set this to true to force the request to use path-style addressing, i.e., http://s3.amazonaws.com/BUCKET/KEY. By
     * default, the S3 client will use virtual hosted bucket addressing when possible (http://BUCKET.s3.amazonaws.com/KEY).
     * Specific to the Amazon S3 service.
     */
    readonly s3ForcePathStyle?: pulumi.Input<boolean>;
    /**
     * The secret key for API operations. You can retrieve this from the 'Security & Credentials' section of the AWS
     * console.
     */
    readonly secretKey?: pulumi.Input<string>;
    /**
     * The path to the shared credentials file. If not set this defaults to ~/.aws/credentials.
     */
    readonly sharedCredentialsFile?: pulumi.Input<string>;
    /**
     * Skip the credentials validation via STS API. Used for AWS API implementations that do not have STS
     * available/implemented.
     */
    readonly skipCredentialsValidation?: pulumi.Input<boolean>;
    /**
     * Skip getting the supported EC2 platforms. Used by users that don't have ec2:DescribeAccountAttributes permissions.
     */
    readonly skipGetEc2Platforms?: pulumi.Input<boolean>;
    readonly skipMetadataApiCheck?: pulumi.Input<boolean>;
    /**
     * Skip static validation of region name. Used by users of alternative AWS-like APIs or users w/ access to regions that
     * are not public (yet).
     */
    readonly skipRegionValidation?: pulumi.Input<boolean>;
    /**
     * Skip requesting the account ID. Used for AWS API implementations that do not have IAM/STS API and/or metadata API.
     */
    readonly skipRequestingAccountId?: pulumi.Input<boolean>;
    /**
     * session token. A session token is only required if you are using temporary security credentials.
     */
    readonly token?: pulumi.Input<string>;
}
