FROM node:lts as dependencies
WORKDIR /hov
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /hov
COPY . .
COPY --from=dependencies /hov/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /hov
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /hov/next.config.js ./
COPY --from=builder /hov/public ./public
COPY --from=builder /hov/.next ./.next
COPY --from=builder /hov/node_modules ./node_modules
COPY --from=builder /hov/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]