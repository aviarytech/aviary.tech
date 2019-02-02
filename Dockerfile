# Build
FROM blairguk/node-sass-alpine:8.11.0 as builder

WORKDIR /app
ADD package.json /app/package.json
RUN npm set progress=false && npm install
ADD . /app
RUN npm run build

# Deploy
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
