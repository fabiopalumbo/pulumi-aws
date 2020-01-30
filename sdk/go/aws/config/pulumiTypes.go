// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// nolint: lll
package config

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

type AssumeRole struct {
	ExternalId *string `pulumi:"externalId"`
	Policy *string `pulumi:"policy"`
	RoleArn *string `pulumi:"roleArn"`
	SessionName *string `pulumi:"sessionName"`
}

type AssumeRoleInput interface {
	pulumi.Input

	ToAssumeRoleOutput() AssumeRoleOutput
	ToAssumeRoleOutputWithContext(context.Context) AssumeRoleOutput
}

type AssumeRoleArgs struct {
	ExternalId pulumi.StringPtrInput `pulumi:"externalId"`
	Policy pulumi.StringPtrInput `pulumi:"policy"`
	RoleArn pulumi.StringPtrInput `pulumi:"roleArn"`
	SessionName pulumi.StringPtrInput `pulumi:"sessionName"`
}

func (AssumeRoleArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*AssumeRole)(nil)).Elem()
}

func (i AssumeRoleArgs) ToAssumeRoleOutput() AssumeRoleOutput {
	return i.ToAssumeRoleOutputWithContext(context.Background())
}

func (i AssumeRoleArgs) ToAssumeRoleOutputWithContext(ctx context.Context) AssumeRoleOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AssumeRoleOutput)
}

type AssumeRoleOutput struct { *pulumi.OutputState }

func (AssumeRoleOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*AssumeRole)(nil)).Elem()
}

func (o AssumeRoleOutput) ToAssumeRoleOutput() AssumeRoleOutput {
	return o
}

func (o AssumeRoleOutput) ToAssumeRoleOutputWithContext(ctx context.Context) AssumeRoleOutput {
	return o
}

func (o AssumeRoleOutput) ExternalId() pulumi.StringPtrOutput {
	return o.ApplyT(func (v AssumeRole) *string { return v.ExternalId }).(pulumi.StringPtrOutput)
}

func (o AssumeRoleOutput) Policy() pulumi.StringPtrOutput {
	return o.ApplyT(func (v AssumeRole) *string { return v.Policy }).(pulumi.StringPtrOutput)
}

func (o AssumeRoleOutput) RoleArn() pulumi.StringPtrOutput {
	return o.ApplyT(func (v AssumeRole) *string { return v.RoleArn }).(pulumi.StringPtrOutput)
}

func (o AssumeRoleOutput) SessionName() pulumi.StringPtrOutput {
	return o.ApplyT(func (v AssumeRole) *string { return v.SessionName }).(pulumi.StringPtrOutput)
}

type Endpoints struct {
	Accessanalyzer *string `pulumi:"accessanalyzer"`
	Acm *string `pulumi:"acm"`
	Acmpca *string `pulumi:"acmpca"`
	Amplify *string `pulumi:"amplify"`
	Apigateway *string `pulumi:"apigateway"`
	Applicationautoscaling *string `pulumi:"applicationautoscaling"`
	Applicationinsights *string `pulumi:"applicationinsights"`
	Appmesh *string `pulumi:"appmesh"`
	Appstream *string `pulumi:"appstream"`
	Appsync *string `pulumi:"appsync"`
	Athena *string `pulumi:"athena"`
	Autoscaling *string `pulumi:"autoscaling"`
	Autoscalingplans *string `pulumi:"autoscalingplans"`
	Backup *string `pulumi:"backup"`
	Batch *string `pulumi:"batch"`
	Budgets *string `pulumi:"budgets"`
	Cloud9 *string `pulumi:"cloud9"`
	Cloudformation *string `pulumi:"cloudformation"`
	Cloudfront *string `pulumi:"cloudfront"`
	Cloudhsm *string `pulumi:"cloudhsm"`
	Cloudsearch *string `pulumi:"cloudsearch"`
	Cloudtrail *string `pulumi:"cloudtrail"`
	Cloudwatch *string `pulumi:"cloudwatch"`
	Cloudwatchevents *string `pulumi:"cloudwatchevents"`
	Cloudwatchlogs *string `pulumi:"cloudwatchlogs"`
	Codebuild *string `pulumi:"codebuild"`
	Codecommit *string `pulumi:"codecommit"`
	Codedeploy *string `pulumi:"codedeploy"`
	Codepipeline *string `pulumi:"codepipeline"`
	Cognitoidentity *string `pulumi:"cognitoidentity"`
	Cognitoidp *string `pulumi:"cognitoidp"`
	Configservice *string `pulumi:"configservice"`
	Cur *string `pulumi:"cur"`
	Dataexchange *string `pulumi:"dataexchange"`
	Datapipeline *string `pulumi:"datapipeline"`
	Datasync *string `pulumi:"datasync"`
	Dax *string `pulumi:"dax"`
	Devicefarm *string `pulumi:"devicefarm"`
	Directconnect *string `pulumi:"directconnect"`
	Dlm *string `pulumi:"dlm"`
	Dms *string `pulumi:"dms"`
	Docdb *string `pulumi:"docdb"`
	Ds *string `pulumi:"ds"`
	Dynamodb *string `pulumi:"dynamodb"`
	Ec2 *string `pulumi:"ec2"`
	Ecr *string `pulumi:"ecr"`
	Ecs *string `pulumi:"ecs"`
	Efs *string `pulumi:"efs"`
	Eks *string `pulumi:"eks"`
	Elasticache *string `pulumi:"elasticache"`
	Elasticbeanstalk *string `pulumi:"elasticbeanstalk"`
	Elastictranscoder *string `pulumi:"elastictranscoder"`
	Elb *string `pulumi:"elb"`
	Emr *string `pulumi:"emr"`
	Es *string `pulumi:"es"`
	Firehose *string `pulumi:"firehose"`
	Fms *string `pulumi:"fms"`
	Forecast *string `pulumi:"forecast"`
	Fsx *string `pulumi:"fsx"`
	Gamelift *string `pulumi:"gamelift"`
	Glacier *string `pulumi:"glacier"`
	Globalaccelerator *string `pulumi:"globalaccelerator"`
	Glue *string `pulumi:"glue"`
	Greengrass *string `pulumi:"greengrass"`
	Guardduty *string `pulumi:"guardduty"`
	Iam *string `pulumi:"iam"`
	Imagebuilder *string `pulumi:"imagebuilder"`
	Inspector *string `pulumi:"inspector"`
	Iot *string `pulumi:"iot"`
	Iotanalytics *string `pulumi:"iotanalytics"`
	Iotevents *string `pulumi:"iotevents"`
	Kafka *string `pulumi:"kafka"`
	Kinesis *string `pulumi:"kinesis"`
	KinesisAnalytics *string `pulumi:"kinesisAnalytics"`
	Kinesisanalytics *string `pulumi:"kinesisanalytics"`
	Kinesisvideo *string `pulumi:"kinesisvideo"`
	Kms *string `pulumi:"kms"`
	Lakeformation *string `pulumi:"lakeformation"`
	Lambda *string `pulumi:"lambda"`
	Lexmodels *string `pulumi:"lexmodels"`
	Licensemanager *string `pulumi:"licensemanager"`
	Lightsail *string `pulumi:"lightsail"`
	Macie *string `pulumi:"macie"`
	Managedblockchain *string `pulumi:"managedblockchain"`
	Marketplacecatalog *string `pulumi:"marketplacecatalog"`
	Mediaconnect *string `pulumi:"mediaconnect"`
	Mediaconvert *string `pulumi:"mediaconvert"`
	Medialive *string `pulumi:"medialive"`
	Mediapackage *string `pulumi:"mediapackage"`
	Mediastore *string `pulumi:"mediastore"`
	Mediastoredata *string `pulumi:"mediastoredata"`
	Mq *string `pulumi:"mq"`
	Neptune *string `pulumi:"neptune"`
	Opsworks *string `pulumi:"opsworks"`
	Organizations *string `pulumi:"organizations"`
	Personalize *string `pulumi:"personalize"`
	Pinpoint *string `pulumi:"pinpoint"`
	Pricing *string `pulumi:"pricing"`
	Qldb *string `pulumi:"qldb"`
	Quicksight *string `pulumi:"quicksight"`
	R53 *string `pulumi:"r53"`
	Ram *string `pulumi:"ram"`
	Rds *string `pulumi:"rds"`
	Redshift *string `pulumi:"redshift"`
	Resourcegroups *string `pulumi:"resourcegroups"`
	Route53 *string `pulumi:"route53"`
	Route53resolver *string `pulumi:"route53resolver"`
	S3 *string `pulumi:"s3"`
	S3control *string `pulumi:"s3control"`
	Sagemaker *string `pulumi:"sagemaker"`
	Sdb *string `pulumi:"sdb"`
	Secretsmanager *string `pulumi:"secretsmanager"`
	Securityhub *string `pulumi:"securityhub"`
	Serverlessrepo *string `pulumi:"serverlessrepo"`
	Servicecatalog *string `pulumi:"servicecatalog"`
	Servicediscovery *string `pulumi:"servicediscovery"`
	Servicequotas *string `pulumi:"servicequotas"`
	Ses *string `pulumi:"ses"`
	Shield *string `pulumi:"shield"`
	Sns *string `pulumi:"sns"`
	Sqs *string `pulumi:"sqs"`
	Ssm *string `pulumi:"ssm"`
	Stepfunctions *string `pulumi:"stepfunctions"`
	Storagegateway *string `pulumi:"storagegateway"`
	Sts *string `pulumi:"sts"`
	Swf *string `pulumi:"swf"`
	Transfer *string `pulumi:"transfer"`
	Waf *string `pulumi:"waf"`
	Wafregional *string `pulumi:"wafregional"`
	Wafv2 *string `pulumi:"wafv2"`
	Worklink *string `pulumi:"worklink"`
	Workspaces *string `pulumi:"workspaces"`
	Xray *string `pulumi:"xray"`
}

type EndpointsInput interface {
	pulumi.Input

	ToEndpointsOutput() EndpointsOutput
	ToEndpointsOutputWithContext(context.Context) EndpointsOutput
}

type EndpointsArgs struct {
	Accessanalyzer pulumi.StringPtrInput `pulumi:"accessanalyzer"`
	Acm pulumi.StringPtrInput `pulumi:"acm"`
	Acmpca pulumi.StringPtrInput `pulumi:"acmpca"`
	Amplify pulumi.StringPtrInput `pulumi:"amplify"`
	Apigateway pulumi.StringPtrInput `pulumi:"apigateway"`
	Applicationautoscaling pulumi.StringPtrInput `pulumi:"applicationautoscaling"`
	Applicationinsights pulumi.StringPtrInput `pulumi:"applicationinsights"`
	Appmesh pulumi.StringPtrInput `pulumi:"appmesh"`
	Appstream pulumi.StringPtrInput `pulumi:"appstream"`
	Appsync pulumi.StringPtrInput `pulumi:"appsync"`
	Athena pulumi.StringPtrInput `pulumi:"athena"`
	Autoscaling pulumi.StringPtrInput `pulumi:"autoscaling"`
	Autoscalingplans pulumi.StringPtrInput `pulumi:"autoscalingplans"`
	Backup pulumi.StringPtrInput `pulumi:"backup"`
	Batch pulumi.StringPtrInput `pulumi:"batch"`
	Budgets pulumi.StringPtrInput `pulumi:"budgets"`
	Cloud9 pulumi.StringPtrInput `pulumi:"cloud9"`
	Cloudformation pulumi.StringPtrInput `pulumi:"cloudformation"`
	Cloudfront pulumi.StringPtrInput `pulumi:"cloudfront"`
	Cloudhsm pulumi.StringPtrInput `pulumi:"cloudhsm"`
	Cloudsearch pulumi.StringPtrInput `pulumi:"cloudsearch"`
	Cloudtrail pulumi.StringPtrInput `pulumi:"cloudtrail"`
	Cloudwatch pulumi.StringPtrInput `pulumi:"cloudwatch"`
	Cloudwatchevents pulumi.StringPtrInput `pulumi:"cloudwatchevents"`
	Cloudwatchlogs pulumi.StringPtrInput `pulumi:"cloudwatchlogs"`
	Codebuild pulumi.StringPtrInput `pulumi:"codebuild"`
	Codecommit pulumi.StringPtrInput `pulumi:"codecommit"`
	Codedeploy pulumi.StringPtrInput `pulumi:"codedeploy"`
	Codepipeline pulumi.StringPtrInput `pulumi:"codepipeline"`
	Cognitoidentity pulumi.StringPtrInput `pulumi:"cognitoidentity"`
	Cognitoidp pulumi.StringPtrInput `pulumi:"cognitoidp"`
	Configservice pulumi.StringPtrInput `pulumi:"configservice"`
	Cur pulumi.StringPtrInput `pulumi:"cur"`
	Dataexchange pulumi.StringPtrInput `pulumi:"dataexchange"`
	Datapipeline pulumi.StringPtrInput `pulumi:"datapipeline"`
	Datasync pulumi.StringPtrInput `pulumi:"datasync"`
	Dax pulumi.StringPtrInput `pulumi:"dax"`
	Devicefarm pulumi.StringPtrInput `pulumi:"devicefarm"`
	Directconnect pulumi.StringPtrInput `pulumi:"directconnect"`
	Dlm pulumi.StringPtrInput `pulumi:"dlm"`
	Dms pulumi.StringPtrInput `pulumi:"dms"`
	Docdb pulumi.StringPtrInput `pulumi:"docdb"`
	Ds pulumi.StringPtrInput `pulumi:"ds"`
	Dynamodb pulumi.StringPtrInput `pulumi:"dynamodb"`
	Ec2 pulumi.StringPtrInput `pulumi:"ec2"`
	Ecr pulumi.StringPtrInput `pulumi:"ecr"`
	Ecs pulumi.StringPtrInput `pulumi:"ecs"`
	Efs pulumi.StringPtrInput `pulumi:"efs"`
	Eks pulumi.StringPtrInput `pulumi:"eks"`
	Elasticache pulumi.StringPtrInput `pulumi:"elasticache"`
	Elasticbeanstalk pulumi.StringPtrInput `pulumi:"elasticbeanstalk"`
	Elastictranscoder pulumi.StringPtrInput `pulumi:"elastictranscoder"`
	Elb pulumi.StringPtrInput `pulumi:"elb"`
	Emr pulumi.StringPtrInput `pulumi:"emr"`
	Es pulumi.StringPtrInput `pulumi:"es"`
	Firehose pulumi.StringPtrInput `pulumi:"firehose"`
	Fms pulumi.StringPtrInput `pulumi:"fms"`
	Forecast pulumi.StringPtrInput `pulumi:"forecast"`
	Fsx pulumi.StringPtrInput `pulumi:"fsx"`
	Gamelift pulumi.StringPtrInput `pulumi:"gamelift"`
	Glacier pulumi.StringPtrInput `pulumi:"glacier"`
	Globalaccelerator pulumi.StringPtrInput `pulumi:"globalaccelerator"`
	Glue pulumi.StringPtrInput `pulumi:"glue"`
	Greengrass pulumi.StringPtrInput `pulumi:"greengrass"`
	Guardduty pulumi.StringPtrInput `pulumi:"guardduty"`
	Iam pulumi.StringPtrInput `pulumi:"iam"`
	Imagebuilder pulumi.StringPtrInput `pulumi:"imagebuilder"`
	Inspector pulumi.StringPtrInput `pulumi:"inspector"`
	Iot pulumi.StringPtrInput `pulumi:"iot"`
	Iotanalytics pulumi.StringPtrInput `pulumi:"iotanalytics"`
	Iotevents pulumi.StringPtrInput `pulumi:"iotevents"`
	Kafka pulumi.StringPtrInput `pulumi:"kafka"`
	Kinesis pulumi.StringPtrInput `pulumi:"kinesis"`
	KinesisAnalytics pulumi.StringPtrInput `pulumi:"kinesisAnalytics"`
	Kinesisanalytics pulumi.StringPtrInput `pulumi:"kinesisanalytics"`
	Kinesisvideo pulumi.StringPtrInput `pulumi:"kinesisvideo"`
	Kms pulumi.StringPtrInput `pulumi:"kms"`
	Lakeformation pulumi.StringPtrInput `pulumi:"lakeformation"`
	Lambda pulumi.StringPtrInput `pulumi:"lambda"`
	Lexmodels pulumi.StringPtrInput `pulumi:"lexmodels"`
	Licensemanager pulumi.StringPtrInput `pulumi:"licensemanager"`
	Lightsail pulumi.StringPtrInput `pulumi:"lightsail"`
	Macie pulumi.StringPtrInput `pulumi:"macie"`
	Managedblockchain pulumi.StringPtrInput `pulumi:"managedblockchain"`
	Marketplacecatalog pulumi.StringPtrInput `pulumi:"marketplacecatalog"`
	Mediaconnect pulumi.StringPtrInput `pulumi:"mediaconnect"`
	Mediaconvert pulumi.StringPtrInput `pulumi:"mediaconvert"`
	Medialive pulumi.StringPtrInput `pulumi:"medialive"`
	Mediapackage pulumi.StringPtrInput `pulumi:"mediapackage"`
	Mediastore pulumi.StringPtrInput `pulumi:"mediastore"`
	Mediastoredata pulumi.StringPtrInput `pulumi:"mediastoredata"`
	Mq pulumi.StringPtrInput `pulumi:"mq"`
	Neptune pulumi.StringPtrInput `pulumi:"neptune"`
	Opsworks pulumi.StringPtrInput `pulumi:"opsworks"`
	Organizations pulumi.StringPtrInput `pulumi:"organizations"`
	Personalize pulumi.StringPtrInput `pulumi:"personalize"`
	Pinpoint pulumi.StringPtrInput `pulumi:"pinpoint"`
	Pricing pulumi.StringPtrInput `pulumi:"pricing"`
	Qldb pulumi.StringPtrInput `pulumi:"qldb"`
	Quicksight pulumi.StringPtrInput `pulumi:"quicksight"`
	R53 pulumi.StringPtrInput `pulumi:"r53"`
	Ram pulumi.StringPtrInput `pulumi:"ram"`
	Rds pulumi.StringPtrInput `pulumi:"rds"`
	Redshift pulumi.StringPtrInput `pulumi:"redshift"`
	Resourcegroups pulumi.StringPtrInput `pulumi:"resourcegroups"`
	Route53 pulumi.StringPtrInput `pulumi:"route53"`
	Route53resolver pulumi.StringPtrInput `pulumi:"route53resolver"`
	S3 pulumi.StringPtrInput `pulumi:"s3"`
	S3control pulumi.StringPtrInput `pulumi:"s3control"`
	Sagemaker pulumi.StringPtrInput `pulumi:"sagemaker"`
	Sdb pulumi.StringPtrInput `pulumi:"sdb"`
	Secretsmanager pulumi.StringPtrInput `pulumi:"secretsmanager"`
	Securityhub pulumi.StringPtrInput `pulumi:"securityhub"`
	Serverlessrepo pulumi.StringPtrInput `pulumi:"serverlessrepo"`
	Servicecatalog pulumi.StringPtrInput `pulumi:"servicecatalog"`
	Servicediscovery pulumi.StringPtrInput `pulumi:"servicediscovery"`
	Servicequotas pulumi.StringPtrInput `pulumi:"servicequotas"`
	Ses pulumi.StringPtrInput `pulumi:"ses"`
	Shield pulumi.StringPtrInput `pulumi:"shield"`
	Sns pulumi.StringPtrInput `pulumi:"sns"`
	Sqs pulumi.StringPtrInput `pulumi:"sqs"`
	Ssm pulumi.StringPtrInput `pulumi:"ssm"`
	Stepfunctions pulumi.StringPtrInput `pulumi:"stepfunctions"`
	Storagegateway pulumi.StringPtrInput `pulumi:"storagegateway"`
	Sts pulumi.StringPtrInput `pulumi:"sts"`
	Swf pulumi.StringPtrInput `pulumi:"swf"`
	Transfer pulumi.StringPtrInput `pulumi:"transfer"`
	Waf pulumi.StringPtrInput `pulumi:"waf"`
	Wafregional pulumi.StringPtrInput `pulumi:"wafregional"`
	Wafv2 pulumi.StringPtrInput `pulumi:"wafv2"`
	Worklink pulumi.StringPtrInput `pulumi:"worklink"`
	Workspaces pulumi.StringPtrInput `pulumi:"workspaces"`
	Xray pulumi.StringPtrInput `pulumi:"xray"`
}

func (EndpointsArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*Endpoints)(nil)).Elem()
}

func (i EndpointsArgs) ToEndpointsOutput() EndpointsOutput {
	return i.ToEndpointsOutputWithContext(context.Background())
}

func (i EndpointsArgs) ToEndpointsOutputWithContext(ctx context.Context) EndpointsOutput {
	return pulumi.ToOutputWithContext(ctx, i).(EndpointsOutput)
}

type EndpointsArrayInput interface {
	pulumi.Input

	ToEndpointsArrayOutput() EndpointsArrayOutput
	ToEndpointsArrayOutputWithContext(context.Context) EndpointsArrayOutput
}

type EndpointsArray []EndpointsInput

func (EndpointsArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]Endpoints)(nil)).Elem()
}

func (i EndpointsArray) ToEndpointsArrayOutput() EndpointsArrayOutput {
	return i.ToEndpointsArrayOutputWithContext(context.Background())
}

func (i EndpointsArray) ToEndpointsArrayOutputWithContext(ctx context.Context) EndpointsArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(EndpointsArrayOutput)
}

type EndpointsOutput struct { *pulumi.OutputState }

func (EndpointsOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*Endpoints)(nil)).Elem()
}

func (o EndpointsOutput) ToEndpointsOutput() EndpointsOutput {
	return o
}

func (o EndpointsOutput) ToEndpointsOutputWithContext(ctx context.Context) EndpointsOutput {
	return o
}

func (o EndpointsOutput) Accessanalyzer() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Accessanalyzer }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Acm() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Acm }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Acmpca() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Acmpca }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Amplify() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Amplify }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Apigateway() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Apigateway }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Applicationautoscaling() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Applicationautoscaling }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Applicationinsights() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Applicationinsights }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Appmesh() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Appmesh }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Appstream() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Appstream }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Appsync() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Appsync }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Athena() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Athena }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Autoscaling() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Autoscaling }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Autoscalingplans() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Autoscalingplans }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Backup() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Backup }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Batch() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Batch }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Budgets() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Budgets }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Cloud9() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Cloud9 }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Cloudformation() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Cloudformation }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Cloudfront() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Cloudfront }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Cloudhsm() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Cloudhsm }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Cloudsearch() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Cloudsearch }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Cloudtrail() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Cloudtrail }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Cloudwatch() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Cloudwatch }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Cloudwatchevents() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Cloudwatchevents }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Cloudwatchlogs() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Cloudwatchlogs }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Codebuild() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Codebuild }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Codecommit() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Codecommit }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Codedeploy() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Codedeploy }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Codepipeline() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Codepipeline }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Cognitoidentity() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Cognitoidentity }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Cognitoidp() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Cognitoidp }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Configservice() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Configservice }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Cur() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Cur }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Dataexchange() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Dataexchange }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Datapipeline() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Datapipeline }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Datasync() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Datasync }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Dax() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Dax }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Devicefarm() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Devicefarm }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Directconnect() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Directconnect }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Dlm() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Dlm }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Dms() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Dms }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Docdb() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Docdb }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Ds() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Ds }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Dynamodb() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Dynamodb }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Ec2() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Ec2 }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Ecr() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Ecr }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Ecs() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Ecs }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Efs() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Efs }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Eks() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Eks }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Elasticache() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Elasticache }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Elasticbeanstalk() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Elasticbeanstalk }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Elastictranscoder() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Elastictranscoder }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Elb() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Elb }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Emr() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Emr }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Es() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Es }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Firehose() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Firehose }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Fms() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Fms }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Forecast() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Forecast }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Fsx() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Fsx }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Gamelift() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Gamelift }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Glacier() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Glacier }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Globalaccelerator() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Globalaccelerator }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Glue() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Glue }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Greengrass() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Greengrass }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Guardduty() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Guardduty }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Iam() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Iam }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Imagebuilder() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Imagebuilder }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Inspector() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Inspector }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Iot() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Iot }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Iotanalytics() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Iotanalytics }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Iotevents() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Iotevents }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Kafka() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Kafka }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Kinesis() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Kinesis }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) KinesisAnalytics() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.KinesisAnalytics }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Kinesisanalytics() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Kinesisanalytics }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Kinesisvideo() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Kinesisvideo }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Kms() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Kms }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Lakeformation() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Lakeformation }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Lambda() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Lambda }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Lexmodels() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Lexmodels }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Licensemanager() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Licensemanager }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Lightsail() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Lightsail }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Macie() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Macie }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Managedblockchain() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Managedblockchain }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Marketplacecatalog() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Marketplacecatalog }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Mediaconnect() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Mediaconnect }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Mediaconvert() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Mediaconvert }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Medialive() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Medialive }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Mediapackage() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Mediapackage }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Mediastore() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Mediastore }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Mediastoredata() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Mediastoredata }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Mq() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Mq }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Neptune() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Neptune }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Opsworks() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Opsworks }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Organizations() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Organizations }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Personalize() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Personalize }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Pinpoint() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Pinpoint }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Pricing() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Pricing }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Qldb() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Qldb }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Quicksight() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Quicksight }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) R53() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.R53 }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Ram() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Ram }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Rds() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Rds }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Redshift() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Redshift }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Resourcegroups() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Resourcegroups }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Route53() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Route53 }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Route53resolver() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Route53resolver }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) S3() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.S3 }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) S3control() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.S3control }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Sagemaker() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Sagemaker }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Sdb() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Sdb }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Secretsmanager() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Secretsmanager }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Securityhub() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Securityhub }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Serverlessrepo() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Serverlessrepo }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Servicecatalog() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Servicecatalog }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Servicediscovery() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Servicediscovery }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Servicequotas() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Servicequotas }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Ses() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Ses }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Shield() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Shield }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Sns() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Sns }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Sqs() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Sqs }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Ssm() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Ssm }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Stepfunctions() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Stepfunctions }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Storagegateway() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Storagegateway }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Sts() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Sts }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Swf() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Swf }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Transfer() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Transfer }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Waf() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Waf }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Wafregional() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Wafregional }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Wafv2() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Wafv2 }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Worklink() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Worklink }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Workspaces() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Workspaces }).(pulumi.StringPtrOutput)
}

func (o EndpointsOutput) Xray() pulumi.StringPtrOutput {
	return o.ApplyT(func (v Endpoints) *string { return v.Xray }).(pulumi.StringPtrOutput)
}

type EndpointsArrayOutput struct { *pulumi.OutputState}

func (EndpointsArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]Endpoints)(nil)).Elem()
}

func (o EndpointsArrayOutput) ToEndpointsArrayOutput() EndpointsArrayOutput {
	return o
}

func (o EndpointsArrayOutput) ToEndpointsArrayOutputWithContext(ctx context.Context) EndpointsArrayOutput {
	return o
}

func (o EndpointsArrayOutput) Index(i pulumi.IntInput) EndpointsOutput {
	return pulumi.All(o, i).ApplyT(func (vs []interface{}) Endpoints {
		return vs[0].([]Endpoints)[vs[1].(int)]
	}).(EndpointsOutput)
}

func init() {
	pulumi.RegisterOutputType(AssumeRoleOutput{})
	pulumi.RegisterOutputType(EndpointsOutput{})
	pulumi.RegisterOutputType(EndpointsArrayOutput{})
}