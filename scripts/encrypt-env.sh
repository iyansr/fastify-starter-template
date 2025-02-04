#!/bin/bash

# Path to the directory containing the files to encrypt
directory="."

# Password for encryption
password="$1"

# Check if the password argument is provided
if [[ -z "$password" ]]; then
  echo "Please provide a password."
  exit 1
fi

# Array of .env files to encrypt
env_files=(".env")

# Iterate over each .env file in the array
for file in "${env_files[@]}"; do
  file_path="$directory/$file"

  if [[ -f "$file_path" ]]; then

    echo "⏳ Encrypting $file_path"

    # Encrypt the file using OpenSSL
    openssl enc -aes-256-cbc -salt -in "$file_path" -out "$file_path.enc" -pass pass:"$password"
    # Optionally, you can remove the original file after encryption
    # Uncomment the line below if you want to remove the original file
    # rm "$file_path"
    
    echo "✅ Encrypted $file_path"
  fi
done