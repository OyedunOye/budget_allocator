# Stage 1: Build
FROM node:20-alpine AS build

WORKDIR /usr/app

# Install dependencies first so this layer is cached unless package files change
COPY package.json package-lock.json* ./
RUN npm ci

# Copy the rest of the source and build static assets
COPY . .
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine AS serve

COPY --from=build /usr/app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
