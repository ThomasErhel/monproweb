// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "eu-west-1",
    "aws_appsync_graphqlEndpoint": "https://26gxxnquwbehhlfpvs6faw2h4m.appsync-api.eu-west-1.amazonaws.com/graphql",
    "aws_appsync_region": "eu-west-1",
    "aws_appsync_authenticationType": "AMAZON_COGNITO_USER_POOLS",
    "aws_cognito_identity_pool_id": "eu-west-1:915fe0fd-55f9-4b80-9bad-49a3115da0dd",
    "aws_cognito_region": "eu-west-1",
    "aws_user_pools_id": "eu-west-1_NnIva7Sue",
    "aws_user_pools_web_client_id": "5u1r4equ0vpc6f0ic4l9q83mbp",
    "oauth": {
        "domain": "monproweb-prod.auth.eu-west-1.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "http://localhost:3000/",
        "redirectSignOut": "http://localhost:3000/",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_bots": "enable",
    "aws_bots_config": [
        {
            "name": "BenderTordeurRodriguez_prod",
            "alias": "$LATEST",
            "region": "eu-west-1"
        }
    ],
    "aws_mobile_analytics_app_id": "a7740b56a68c49cba4487b14d27716bd",
    "aws_mobile_analytics_app_region": "eu-west-1"
};


export default awsmobile;