from PIL import Image
import os

img = Image.new('RGB', (900, 1200), (32, 50, 90))

for y in range(1200):
    for x in range(900):
        r = int(24 + (x / 900) * 80 + (y / 1200) * 30)
        g = int(58 + (x / 900) * 40 + (y / 1200) * 70)
        b = int(110 + (x / 900) * 70 + (y / 1200) * 40)
        img.putpixel((x, y), (r, g, b))

for y in range(1200):
    for x in range(900):
        dx = x - 450
        dy = y - 300
        d = dx * dx * 0.02 + dy * dy * 0.02
        if d < 900:
            r = int(44 + (900 - d) / 5)
            g = int(110 + (900 - d) / 8)
            b = int(180 + (900 - d) / 6)
            img.putpixel((x, y), (r, g, b))

for x in range(150, 750, 120):
    for y in range(180, 980, 180):
        for i in range(max(0, x - 35), min(900, x + 35)):
            for j in range(max(0, y - 35), min(1200, y + 35)):
                if ((i - x) ** 2 + (j - y) ** 2) < 35 * 35:
                    img.putpixel((i, j), (255, 255, 255))

for y in range(200, 1000, 140):
    for x in range(160, 760, 20):
        if (x + y) % 40 < 20:
            img.putpixel((x, y), (255, 255, 255))

os.makedirs('public', exist_ok=True)
img.save('public/login-side.jpg')
print('saved', os.path.exists('public/login-side.jpg'))
