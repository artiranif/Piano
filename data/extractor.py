import os
import re

# Get the current working directory
directory = os.getcwd()

# Define the regular expression pattern to match the old file names
pattern = r'\d+__\w+__piano-ff-(\d+\.wav)'

# Loop through all files in the directory
for filename in os.listdir(directory):
    # Check if the file matches the pattern
    match = re.match(pattern, filename)
    if match:
        # Extract the new name from the match and remove leading zeros
        new_name = match.group(1).lstrip('0')
        
        # Build the full paths for the old and new names
        old_path = os.path.join(directory, filename)
        new_path = os.path.join(directory, new_name)
        
        # Rename the file
        os.rename(old_path, new_path)
        print(f'Renamed: {filename} -> {new_name}')
