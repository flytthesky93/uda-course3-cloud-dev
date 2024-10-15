# uda-course3-cloud-dev HoangNM

## 1.Development Server:

Before you start the local server, you must run `npm install` to download dependency of project and make sure you have .env file in same folder with server.js
Starting the server with `npm run dev` runs a local instance of the server with no errors:

> Run server local:

![run-server](https://github.com/flytthesky93/uda-course3-cloud-dev/blob/main/report_resource/local_run/RunningServerLocal.png)

> Run api login local:

    curl --location 'http://localhost:8080/login' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "email": "minhhoangoffical@gmail.com",
        "password": "hoangnm40"
    }'

Get token from this api to insert to header of another api for authen
![run-login](https://github.com/flytthesky93/uda-course3-cloud-dev/blob/main/report_resource/local_run/run-api-login-local.png)

> Run api filter image:

This api need replace `Bearer <token>` below with token get from login api response to use

    curl --location 'http://localhost:8080/filteredimage?image_url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fb%2Fbd%2FGolden_tabby_and_white_kitten_n01.jpg' \
    --header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pbmhob2FuZ29mZmljYWxAZ21haWwuY29tIiwidG9rZW5UeXBlIjoiQUNDRVNTX1RPS0VOIiwiaWF0IjoxNzI5MDAyOTUzLCJleHAiOjE3MjkwMDMyNTN9.ItEzGaGwB5xnsGq4dXYPSDD-E0CceUZIH_3LDD5b-L1D_jQBHAKsboX1b6WD1Bhh0WmD0vxDd2oQs92V3eoAs9jIuMWuZGgDwolJkUj_ngPJLud3qRi_kOpTlco8xrzKh7rTDpsEUCgasN_0FlynlYTif73EW_iDmoIMwvwbMmabrEQekH2LHumnbQGwc4pRfvHUyQSM0VVpNnGEeobFHOI_u5and_fFs0M8u_6DnFHwy0L2voZB3a7p-eJx5fu1XK-4ghPn7ijhCDq25YfOEpABP5oBaXe90PtDQZ8X0Eh6HlbOWzcMQ6b9wa51bHwavhmBSjDvUYcxGH86s9EhXA'

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

## 3. Cloud Env

`EB_URL=udacity-course-3-dev.us-east-1.elasticbeanstalk.com`

Login Api:

    curl --location 'http://udacity-course-3-dev.us-east-1.elasticbeanstalk.com/login' \
    --header 'Content-Type: application/json' \
    --data-raw '{
    "email": "minhhoangoffical@gmail.com",
    "password": "hoangnm40"
    }'

Filter Image Api:
This api need replace `Bearer <token>` below with token get from login api response to use

    curl --location 'http://udacity-course-3-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fb%2Fbd%2FGolden_tabby_and_white_kitten_n01.jpg' \
    --header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pbmhob2FuZ29mZmljYWxAZ21haWwuY29tIiwidG9rZW5UeXBlIjoiQUNDRVNTX1RPS0VOIiwiaWF0IjoxNzI5MDAyOTUzLCJleHAiOjE3MjkwMDMyNTN9.ItEzGaGwB5xnsGq4dXYPSDD-E0CceUZIH_3LDD5b-L1D_jQBHAKsboX1b6WD1Bhh0WmD0vxDd2oQs92V3eoAs9jIuMWuZGgDwolJkUj_ngPJLud3qRi_kOpTlco8xrzKh7rTDpsEUCgasN_0FlynlYTif73EW_iDmoIMwvwbMmabrEQekH2LHumnbQGwc4pRfvHUyQSM0VVpNnGEeobFHOI_u5and_fFs0M8u_6DnFHwy0L2voZB3a7p-eJx5fu1XK-4ghPn7ijhCDq25YfOEpABP5oBaXe90PtDQZ8X0Eh6HlbOWzcMQ6b9wa51bHwavhmBSjDvUYcxGH86s9EhXA'

The postman file was stored in [here](https://github.com/flytthesky93/uda-course3-cloud-dev/tree/main/report_resource/postman)
