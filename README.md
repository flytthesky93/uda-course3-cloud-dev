# uda-course3-cloud-dev HoangNM



## 1.Development Server:

Starting the server with `npm run start` runs a local instance of the server with no errors:

> Run server local:

![run-server](https://github.com/flytthesky93/uda-course3-cloud-dev/blob/main/report_resource/local_run/RunningServerLocal.png)

> Run api login local:

Get token from this api to insert to header of another api for authen
![run-login](https://github.com/flytthesky93/uda-course3-cloud-dev/blob/main/report_resource/local_run/run-api-login-local.png)

> Run api filter image:

This api need a `bearer token` get from login api to use
- Success
![run-filter-image](https://github.com/flytthesky93/uda-course3-cloud-dev/blob/main/report_resource/local_run/run-api-filter-image-local.png)

- Faild
![run-filter-image-error](https://github.com/flytthesky93/uda-course3-cloud-dev/blob/main/report_resource/local_run/run-api-filter-imge-with-error-local.png)

## 2.Elastic Beanstalk Deployment:

The project was deployed using the AWS Elastic Beanstalk CLI eb init, eb create, and eb deploy commands:

> eb init
![eb-init](https://github.com/flytthesky93/uda-course3-cloud-dev/blob/main/report_resource/deployment_screenshot/ebinit.png)

> eb create
![eb-create](https://github.com/flytthesky93/uda-course3-cloud-dev/blob/main/report_resource/deployment_screenshot/ebcreate.png)

> eb deploy
![eb-deploy](https://github.com/flytthesky93/uda-course3-cloud-dev/blob/main/report_resource/deployment_screenshot/ebdeploy.png)

> elastic beanstalk dashboard
![eb-dashboard](https://github.com/flytthesky93/uda-course3-cloud-dev/blob/main/report_resource/deployment_screenshot/ebdashboard.png)
![eb-dashboard](https://github.com/flytthesky93/uda-course3-cloud-dev/blob/main/report_resource/deployment_screenshot/ebdetaildashboard.png)

## 3. Postman

The postman file was stored in [here](https://github.com/flytthesky93/uda-course3-cloud-dev/tree/main/report_resource/postman)
