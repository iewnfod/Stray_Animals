import sounddevice as sd
import numpy as np

def play_sound(file_path):
    with open(file_path, 'rb') as f:
        content = f.read()
    arr = np.array(content)
    return arr

