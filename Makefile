.PHONY: all

# Set desired Node version
NODE_VERSION=22

# Default target
all: install-nvm use-node install-pnpm

# Check if NVM is installed and install it if missing
install-nvm:
	@if [ -d "$$HOME/.nvm" ]; then \
		echo "NVM already installed."; \
	else \
		echo "Installing NVM..."; \
		curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash; \
	fi

# Load NVM and install & use the desired Node.js version
use-node:
	. $$HOME/.nvm/nvm.sh && \
	nvm install $(NODE_VERSION) && \
	nvm use $(NODE_VERSION)

# Install pnpm globally using npm
install-pnpm:
	. $$HOME/.nvm/nvm.sh && \
	nvm use $(NODE_VERSION) && \
	npm install -g pnpm
