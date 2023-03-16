### docker部署

1. docker build -t astro-blog:v1 .

> m1 打包运行：docker buildx build -t astro-blog:v1 --platform linux/amd64 .
> 可能需要在加前缀 **DOCKER_BUILDKIT=0**

2. docker run -d -p 9002:80 --name astro-blog astro-blog:v1
