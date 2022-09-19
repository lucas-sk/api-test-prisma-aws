FROM node:alpine
WORKDIR /usr/app
COPY package.json yarn.lock ./ prisma ./
RUN yarn && yarn build
RUN yarn prisma generate
COPY . .
EXPOSE 3000
CMD ["yarn", "start"]
