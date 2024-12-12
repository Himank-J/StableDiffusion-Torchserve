from diffusers import StableDiffusion3Pipeline
import torch 

import os
from dotenv import load_dotenv
load_dotenv()

token = os.getenv('HF_LOGIN')
pipe = StableDiffusion3Pipeline.from_pretrained(
    "stabilityai/stable-diffusion-3-medium-diffusers", 
    torch_dtype=torch.bfloat16,
    token = token
)
pipe.save_pretrained("./sd3-model-weights")