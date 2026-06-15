from PIL import Image, ImageDraw, ImageFont
import os

OUT_DIR = "public/images"
os.makedirs(OUT_DIR, exist_ok=True)


def hex_to_rgb(hex_color):
    hex_color = hex_color.lstrip("#")
    return tuple(int(hex_color[i : i + 2], 16) for i in (0, 2, 4))


IVORY = hex_to_rgb("#f9f8f2")
GREEN = hex_to_rgb("#4a7c23")
DARK = hex_to_rgb("#1c1c1b")
CHARCOAL = hex_to_rgb("#2a2a28")
SLATE = hex_to_rgb("#3d3d3a")


def get_font(size):
    candidates = [
        "/System/Library/Fonts/Helvetica.ttc",
        "/System/Library/Fonts/SFProDisplay-Regular.otf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ]
    for path in candidates:
        if os.path.exists(path):
            try:
                return ImageFont.truetype(path, size)
            except Exception:
                continue
    return ImageFont.load_default()


def linear_gradient(size, c1, c2, direction="vertical"):
    img = Image.new("RGB", size)
    draw = ImageDraw.Draw(img)
    w, h = size
    if direction == "diagonal":
        for y in range(h):
            for x in range(w):
                ratio = (x / w + y / h) / 2
                r = int(c1[0] * (1 - ratio) + c2[0] * ratio)
                g = int(c1[1] * (1 - ratio) + c2[1] * ratio)
                b = int(c1[2] * (1 - ratio) + c2[2] * ratio)
                draw.point((x, y), fill=(r, g, b))
    elif direction == "vertical":
        for y in range(h):
            ratio = y / h
            r = int(c1[0] * (1 - ratio) + c2[0] * ratio)
            g = int(c1[1] * (1 - ratio) + c2[1] * ratio)
            b = int(c1[2] * (1 - ratio) + c2[2] * ratio)
            draw.line([(0, y), (w, y)], fill=(r, g, b))
    else:
        for x in range(w):
            ratio = x / w
            r = int(c1[0] * (1 - ratio) + c2[0] * ratio)
            g = int(c1[1] * (1 - ratio) + c2[1] * ratio)
            b = int(c1[2] * (1 - ratio) + c2[2] * ratio)
            draw.line([(x, 0), (x, h)], fill=(r, g, b))
    return img


def add_noise(img, amount=0.02):
    import random

    pixels = img.load()
    w, h = img.size
    for _ in range(int(w * h * amount)):
        x, y = random.randint(0, w - 1), random.randint(0, h - 1)
        r, g, b = pixels[x, y]
        delta = random.randint(-12, 12)
        pixels[x, y] = (
            max(0, min(255, r + delta)),
            max(0, min(255, g + delta)),
            max(0, min(255, b + delta)),
        )


def draw_grid(draw, size, color, spacing=40):
    w, h = size
    for x in range(0, w, spacing):
        draw.line([(x, 0), (x, h)], fill=color, width=1)
    for y in range(0, h, spacing):
        draw.line([(0, y), (w, y)], fill=color, width=1)


def draw_bars(draw, x, y, width, height, count, color, gap=4):
    bar_w = (width - (count - 1) * gap) // count
    for i in range(count):
        draw.rectangle(
            [x + i * (bar_w + gap), y, x + i * (bar_w + gap) + bar_w, y + height],
            fill=color,
        )


def save(name, img):
    path = os.path.join(OUT_DIR, name)
    img.save(path, quality=90)
    print(f"Saved {path}")


def product_image(name, category, accent=GREEN):
    size = (800, 600)
    img = linear_gradient(size, CHARCOAL, DARK, "diagonal")
    draw = ImageDraw.Draw(img)

    draw_grid(draw, size, (50, 50, 48), spacing=60)

    shape_x = 150
    shape_y = 120
    shape_w = 500
    shape_h = 360

    draw.rectangle(
        [shape_x, shape_y, shape_x + shape_w, shape_y + shape_h],
        fill=SLATE,
        outline=(80, 80, 76),
        width=2,
    )

    panel_w = shape_w // 3 - 20
    for i in range(3):
        px = shape_x + 20 + i * (panel_w + 15)
        draw.rectangle(
            [px, shape_y + 40, px + panel_w, shape_y + shape_h - 40],
            fill=(60, 60, 58),
            outline=(90, 90, 86),
            width=1,
        )
        draw.ellipse([px + 10, shape_y + 55, px + 22, shape_y + 67], fill=accent)
        draw.ellipse([px + 30, shape_y + 55, px + 42, shape_y + 67], fill=(80, 80, 76))

    draw_bars(draw, shape_x + 40, shape_y + shape_h - 30, shape_w - 80, 8, 16, (40, 40, 38), gap=3)

    font_title = get_font(28)
    font_cat = get_font(16)
    draw.text((40, 40), category, fill=accent, font=font_cat)
    draw.text((40, 70), name, fill=IVORY, font=font_title)

    add_noise(img, amount=0.015)
    return img


def hero_image():
    size = (1600, 900)
    img = linear_gradient(size, (10, 14, 18), (30, 40, 35), "diagonal")
    draw = ImageDraw.Draw(img)

    for row in range(5):
        for col in range(8):
            x = 100 + col * 180 + row * 30
            y = 100 + row * 140 - col * 20
            draw.polygon(
                [
                    (x, y),
                    (x + 160, y + 20),
                    (x + 180, y + 100),
                    (x + 20, y + 120),
                ],
                fill=(20, 30, 28),
                outline=(50, 60, 55),
            )

    overlay = Image.new("RGBA", size, (0, 0, 0, 0))
    overlay_draw = ImageDraw.Draw(overlay)
    overlay_draw.rectangle([0, 0, size[0] // 2 + 200, size[1]], fill=(0, 0, 0, 160))
    img = Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")

    add_noise(img, amount=0.01)
    return img


def scene_image(name, primary, secondary, detail_color=GREEN):
    size = (800, 600)
    img = linear_gradient(size, primary, secondary, "vertical")
    draw = ImageDraw.Draw(img)
    draw_grid(draw, size, (255, 255, 255), spacing=80)

    if "data" in name.lower():
        for i in range(6):
            draw.rectangle(
                [80 + i * 120, 150, 180 + i * 120, 450],
                fill=(20, 22, 24),
                outline=(60, 62, 64),
            )
            for r in range(8):
                draw.rectangle(
                    [90 + i * 120, 170 + r * 32, 170 + i * 120, 190 + r * 32],
                    fill=(40, 42, 44),
                )
    elif "manufacturing" in name.lower():
        for i in range(3):
            draw.rectangle(
                [100 + i * 250, 200, 280 + i * 250, 400],
                fill=(60, 45, 30),
                outline=(100, 80, 60),
            )
            draw.ellipse(
                [140 + i * 250, 420, 240 + i * 250, 480],
                fill=(30, 30, 30),
            )
    elif "utility" in name.lower() or "wind" in name.lower():
        for i in range(3):
            x = 150 + i * 250
            draw.line([(x, 500), (x, 250)], fill=(80, 80, 80), width=8)
            draw.polygon(
                [(x, 250), (x - 80, 320), (x, 290), (x + 80, 320)],
                fill=(220, 220, 220),
            )
    elif "engineer" in name.lower():
        draw.rectangle([100, 100, 350, 500], fill=(35, 35, 35), outline=(70, 70, 70))
        draw.rectangle([380, 150, 700, 450], fill=(25, 25, 25), outline=(60, 60, 60))
        for i in range(5):
            draw.rectangle([400, 180 + i * 40, 680, 205 + i * 40], fill=(50, 50, 50))
    else:
        draw.rectangle([150, 150, 650, 450], fill=(40, 40, 40), outline=(80, 80, 80))
        draw_bars(draw, 200, 200, 400, 200, 10, detail_color, gap=8)

    font = get_font(36)
    draw.text((40, 40), name, fill=IVORY, font=font)
    add_noise(img, amount=0.012)
    return img


def compatible_image(name, accent=GREEN):
    size = (600, 450)
    img = linear_gradient(size, (50, 50, 50), (25, 25, 25), "diagonal")
    draw = ImageDraw.Draw(img)
    draw_grid(draw, size, (80, 80, 80), spacing=50)

    cx, cy = size[0] // 2, size[1] // 2
    draw.rectangle(
        [cx - 150, cy - 100, cx + 150, cy + 100],
        fill=(60, 60, 60),
        outline=(100, 100, 100),
        width=2,
    )
    draw.rectangle(
        [cx - 120, cy - 70, cx + 120, cy + 40],
        fill=(40, 40, 40),
        outline=(80, 80, 80),
    )
    draw.ellipse([cx - 20, cy - 20, cx + 20, cy + 20], fill=accent)

    font = get_font(20)
    draw.text((30, 30), name, fill=IVORY, font=font)
    add_noise(img, amount=0.01)
    return img


save("industrial-inverter.jpg", product_image("Industrial Grid Inverters", "POWER CONVERSION"))
save("lfp-battery.jpg", product_image("LFP Battery Systems", "ENERGY STORAGE"))
save("pv-infrastructure.jpg", product_image("PV Infrastructure", "SOLAR"))
save("containerized-bess.jpg", product_image("Containerized BESS", "ENERGY STORAGE"))
save("dc-fast-chargers.jpg", product_image("DC Fast Chargers", "MOBILITY"))
save("microgrid-controller.jpg", product_image("Microgrid Controllers", "CONTROL"))

save("compatible-battery.jpg", compatible_image("NE-B80 High-C Battery"))
save("compatible-gateway.jpg", compatible_image("Neo Connect Gateway Pro"))
save("compatible-switchgear.jpg", compatible_image("NE-SG Switchgear"))
save("compatible-transformer.jpg", compatible_image("Step-Up Transformer"))

save("hero.jpg", hero_image())
save("engineer.jpg", scene_image("Engineering Process", (25, 28, 30), (45, 48, 50)))
save("datacenter.jpg", scene_image("Data Centers", (15, 18, 22), (30, 35, 42)))
save("manufacturing.jpg", scene_image("Manufacturing", (35, 30, 25), (60, 52, 42)))
save("utility.jpg", scene_image("Utility Sector", (20, 35, 45), (40, 70, 90)))
save("facility.jpg", scene_image("Munich R&D Facility", (18, 18, 18), (45, 45, 45)))

print("All images generated.")
