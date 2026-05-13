FROM mcr.microsoft.com/devcontainers/javascript-node:1-22-bookworm

# Core global tooling
RUN npm install -g npm \
    @azure/static-web-apps-cli

# Useful system tools
RUN apt-get update && apt-get install -y \
    git \
    curl \
    bash-completion \
    && apt-get clean -y

WORKDIR /workspace