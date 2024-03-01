#!/bin/sh

# Assuming $USER_ID and $GROUP_ID are passed as environment variables
if [ ! -z "$USER_ID" ] && [ ! -z "$GROUP_ID" ]; then
  echo "Setting UID:GID to $USER_ID:$GROUP_ID"
  
  # Create a group with the specified GID if it doesn't already exist
  if ! getent group appgroup >/dev/null; then
    addgroup --gid $GROUP_ID appgroup
  fi
  
  # Create a user with the specified UID if it doesn't already exist
  if ! id -u appuser >/dev/null 2>&1; then
    adduser --disabled-password --gecos '' --uid $USER_ID --gid $GROUP_ID appuser
  fi
  
  # Change ownership of the /usr/src/app directory
  chown -R appuser:appgroup /usr/src/app
fi

# Execute the CMD from the Dockerfile
exec "$@"
