import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageEnhance

def create_vision_quest_assets():
    src_path = "public/posters/visionquest.jpg"
    if not os.path.exists(src_path):
        print("Source image not found:", src_path)
        return

    src_img = Image.open(src_path).convert("RGBA")
    
    # -------------------------------------------------------------
    # 1. CREATE 2:3 VERTICAL POSTER (600 x 900)
    # -------------------------------------------------------------
    pw, ph = 600, 900
    poster = Image.new("RGBA", (pw, ph), (8, 10, 18, 255))
    
    # Create dark cosmic gradient background
    grad = Image.new("RGBA", (pw, ph))
    draw_grad = ImageDraw.Draw(grad)
    for y in range(ph):
        ratio = y / ph
        r = int(10 + 20 * (1 - ratio))
        g = int(12 + 10 * (1 - ratio))
        b = int(24 + 40 * (1 - ratio))
        draw_grad.line([(0, y), (pw, y)], fill=(r, g, b, 255))
    
    poster = Image.alpha_composite(poster, grad)

    # Scale Vision character image to fit prominently in middle
    # src is 387 x 258
    aspect = src_img.width / src_img.height
    char_w = 600
    char_h = int(char_w / aspect)
    scaled_char = src_img.resize((char_w, char_h), Image.Resampling.LANCZOS)
    
    # Position character vertically centered-top
    char_y = 140
    poster.paste(scaled_char, (0, char_y), scaled_char)

    # Apply smooth vignette and bottom fade so character blends seamlessly
    overlay = Image.new("RGBA", (pw, ph), (0, 0, 0, 0))
    d_overlay = ImageDraw.Draw(overlay)
    
    # Top fade
    for y in range(char_y, char_y + 120):
        alpha = int(255 * (1 - (y - char_y) / 120))
        d_overlay.line([(0, y), (pw, y)], fill=(8, 10, 18, alpha))
        
    # Bottom fade
    fade_start = char_y + char_h - 140
    fade_end = char_y + char_h
    for y in range(fade_start, ph):
        dist = min(1.0, (y - fade_start) / (fade_end - fade_start))
        alpha = int(255 * dist)
        d_overlay.line([(0, y), (pw, y)], fill=(8, 10, 18, alpha))
        
    # Side edge vignettes
    for x in range(60):
        alpha = int(200 * (1 - x / 60))
        d_overlay.line([(x, 0), (x, ph)], fill=(8, 10, 18, alpha))
        d_overlay.line([(pw - 1 - x, 0), (pw - 1 - x, ph)], fill=(8, 10, 18, alpha))

    poster = Image.alpha_composite(poster, overlay)

    # Draw Typography & Marvel Studios Branding
    draw = ImageDraw.Draw(poster)
    
    # Marvel Studios Banner at top
    # Red rectangle with white MARVEL and STUDIOS
    banner_w, banner_h = 160, 32
    banner_x = (pw - banner_w) // 2
    banner_y = 50
    draw.rectangle([banner_x, banner_y, banner_x + 90, banner_y + banner_h], fill=(229, 9, 20, 255))
    draw.rectangle([banner_x + 90, banner_y, banner_x + banner_w, banner_y + banner_h], fill=(0, 0, 0, 255), outline=(255, 255, 255, 180), width=1)
    
    # Text in banner
    draw.text((banner_x + 12, banner_y + 6), "MARVEL", fill=(255, 255, 255, 255))
    draw.text((banner_x + 98, banner_y + 6), "STUDIOS", fill=(255, 255, 255, 255))

    # Title: VISION QUEST at bottom
    # Glowing white text with cyan border
    title_text = "VISION QUEST"
    title_y = 700
    
    # Outer glow
    for offset_x in [-2, -1, 0, 1, 2]:
        for offset_y in [-2, -1, 0, 1, 2]:
            draw.text((pw // 2 - 120 + offset_x, title_y + offset_y), title_text, fill=(56, 189, 248, 120))
            
    draw.text((pw // 2 - 120, title_y), title_text, fill=(255, 255, 255, 255))
    
    # Tagline / Subtitle
    sub_text = "A NEW ERA AWAKENS  •  DISNEY+"
    draw.text((pw // 2 - 110, title_y + 45), sub_text, fill=(148, 163, 184, 255))

    # Save as 600x900 RGB JPEG
    poster_rgb = poster.convert("RGB")
    poster_out = "public/posters/visionquest_final.jpg"
    poster_rgb.save(poster_out, quality=95)
    print("✓ Created 2:3 Poster:", poster_out)

    # -------------------------------------------------------------
    # 2. CREATE 16:9 LANDSCAPE BACKDROP (1920 x 1080)
    # -------------------------------------------------------------
    bw, bh = 1920, 1080
    backdrop = Image.new("RGBA", (bw, bh), (6, 9, 15, 255))
    
    # Dark cinematic space gradient
    bgrad = Image.new("RGBA", (bw, bh))
    d_bgrad = ImageDraw.Draw(bgrad)
    for x in range(bw):
        ratio = x / bw
        r = int(6 + 22 * ratio)
        g = int(9 + 15 * ratio)
        b = int(15 + 40 * ratio)
        d_bgrad.line([(x, 0), (x, bh)], fill=(r, g, b, 255))
    backdrop = Image.alpha_composite(backdrop, bgrad)

    # Scale character up and place on the right side
    char_h2 = 980
    char_w2 = int(char_h2 * aspect)
    scaled_char2 = src_img.resize((char_w2, char_h2), Image.Resampling.LANCZOS)
    
    char_x2 = bw - char_w2 - 60
    char_y2 = 50
    backdrop.paste(scaled_char2, (char_x2, char_y2), scaled_char2)

    # Vignette left fade
    boverlay = Image.new("RGBA", (bw, bh), (0, 0, 0, 0))
    d_boverlay = ImageDraw.Draw(boverlay)
    
    for x in range(char_x2 - 100, char_x2 + 400):
        ratio = max(0.0, min(1.0, (x - (char_x2 - 100)) / 500))
        alpha = int(255 * (1 - ratio))
        d_boverlay.line([(x, 0), (x, bh)], fill=(6, 9, 15, alpha))
        
    for y in range(bh - 250, bh):
        ratio = (y - (bh - 250)) / 250
        alpha = int(255 * ratio)
        d_boverlay.line([(0, y), (bw, y)], fill=(6, 9, 15, alpha))

    backdrop = Image.alpha_composite(backdrop, boverlay)
    
    backdrop_rgb = backdrop.convert("RGB")
    backdrop_out = "public/backdrops/visionquest_final.jpg"
    backdrop_rgb.save(backdrop_out, quality=95)
    print("✓ Created 16:9 Backdrop:", backdrop_out)

create_vision_quest_assets()
