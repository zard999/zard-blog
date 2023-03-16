# node镜像
FROM node:16

# 在容器中创建一个目录
RUN mkdir -p /usr/src/app

# 设置工作目录
WORKDIR /usr/src/app

# RUN/COPY ，将package.json复制到工作目录
# !! 注意：这里的package.json需要单独添加
# Docker在构建镜像时，是一层一层构建的，仅当这一层有变化时，重新构建对应的层
# 如果package.json和源代码一起添加到镜像中，那么每次修改源代码时，都需要npm i重新安装依赖，没有必要
# 所以，正确的做法是，先将package.json单独添加到镜像中，然后npm i安装依赖，最后将源代码添加到镜像中
COPY package.json /usr/src/app/package.json

# 安装npm依赖（使用淘宝镜像）
# 如果使用的境外服务器，无需使用淘宝的镜像源，即改为`RUN npm i`
# RUN npm i yarn -g
RUN npm i
# RUN yarn --production
# RUN npm i --production --registry=https://registry.npm.taobao.org

# 拷贝所有源代码到工作目录
COPY . /usr/src/app

# 暴露容器端口
EXPOSE 1337

CMD npm run dev
