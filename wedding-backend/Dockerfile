# Use the official Bun image
FROM oven/bun:1

# Set working directory
WORKDIR /app

ENV DATABASE_URL=""

# Copy package files first (for better caching)
COPY package.json bun.lockb ./
COPY tsconfig.json ./

# Install dependencies
RUN bun install


# Copy the rest of the application
COPY . .

# Expose the port your app runs on
EXPOSE 8000

# Start the application
CMD ["bun", "run", "start"]