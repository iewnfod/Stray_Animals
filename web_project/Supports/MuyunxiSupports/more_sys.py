import sys
import os

def get_current_file_path():
    return sys.argv[0]

def get_current_dir_path():
    return os.path.abspath('.')
