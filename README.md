# GNOME-QuickShutDown
[![Available on GNOME Extensions](https://img.shields.io/badge/GNOME%20Extensions-Available-brightgreen?logo=gnome)](https://extensions.gnome.org/extension/10595/shutdown-button-with-timer/)

> 📦 **Officially published on [extensions.gnome.org](https://extensions.gnome.org/extension/10595/shutdown-button-with-timer/)!**
>
> For the easiest installation and updates, use the official GNOME Extensions website.

Adds a quick shutdown button to the GNOME top panel. One click opens the native GNOME Power Off dialog. Designed for power users who want fewer clicks.

![Extension in Panel](images/image.png)

> **Note:**  
> This extension triggers the native GNOME shutdown dialogue box safely. It does not bypass unsaved work warnings or active session safeguards.

---

## Description

Shutdown Button is a GNOME Shell extension that places a convenient power-off button directly in your top panel. By eliminating the need to navigate through the system menu, it provides a faster and more direct way to shut down or restart your computer.

---

## Features

- **Quick Access**: Instantly open the native GNOME Power Off dialog with a single click.
- **Panel Positioning**: Choose to place the button on the left or right side of the top panel.
- **Native Integration**: Uses the official GNOME `SystemActions` API for safe and reliable session management.
- **Lightweight**: Minimal code, ensuring no performance impact on your desktop environment.
- **Easy Configuration**: Simple graphical preferences dialog for customization.

---

## System Requirements

- **GNOME Shell Version**: 45, 46, 47, 48, 49, 50
- **Dependencies**: No additional packages required

---

## Installation

### **A. Install via GNOME Extensions Website**

>#### Prerequisites
>  - If you are new to using gnome-extensions, Search online for understanding how to use gnome extensions for your distro.
>  - For web installation, you may need browser connector support (varies by distribution). 
        
1. Visit [Shutdown Button on extensions.gnome.org](https://extensions.gnome.org/extension/[EXTENSION_ID]/shutdown-button/) 
2. Click the toggle to install.
3. Approve the installation in your browser and GNOME Shell.
4. The extension will appear in your top panel automatically.

### **B. Manual Installation from GitHub**

>#### Prerequisites
>  - If you are new to using gnome-extensions, Search online for understanding how to use gnome extensions for your distro.
>  - Make sure that the extension is supported (You can check the metadata.json).
>  - To know your gnome shell version you can type ```gnome-shell --version```.
>  - If the metadata.json lists support for 4x (e.g., 45), then all versions like 4x.y (e.g., 45.9) are also supported.

1. Download or clone this repository:
   ```sh
   git clone https://github.com/Ameen-Sha-Cheerangan/GNOME-QuickShutDown.git
   ```
2. Copy the extension folder to your local GNOME extensions directory:
   ```sh
   mkdir -p ~/.local/share/gnome-shell/extensions/ && cp -r GNOME-QuickShutDown/shutdown-button@ameen-sha/ ~/.local/share/gnome-shell/extensions/
   ```
3. Restart GNOME Shell:
   - On Xorg: Press `Alt+F2`, type `r`, and press Enter.
   - On Wayland: Log out and log back in.
4. Enable the extension:
   ```sh
   gnome-extensions enable shutdown-button@ameen-sha
   ```
5. Restart GNOME Shell:
   - On Xorg: Press `Alt+F2`, type `r`, and press Enter.
   - On Wayland: Log out and log back in.

---

## Usage & Configuration

### **1. Using the Shutdown Button**
- Simply click the newly added shutdown button in your top panel to instantly bring up the GNOME power-off dialog.

### **2. Customizing Appearance**
- Right-click the extension in the Extensions app and select the **gear icon** (Preferences).
- **Panel Position**: Select whether to display the button on the left or right side of the top panel.
- Changes apply instantly without requiring a restart.

---

## Troubleshooting

### **Extension Not Appearing**

- Verify GNOME Shell version compatibility: `gnome-shell --version`
- Ensure the extension is enabled: `gnome-extensions list --enabled`
- Check for errors: `journalctl -f -o cat /usr/bin/gnome-shell`

### **Preferences Not Opening**

- Try opening preferences via command line:
  ```bash
  gnome-extensions prefs shutdown-button@ameen-sha
  ```

---

## Contributing

Contributions are welcome! If you have suggestions, improvements, or bug fixes:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

Please [open an issue](https://github.com/Ameen-Sha-Cheerangan/GNOME-QuickShutDown/issues) for bug reports or feature requests.

---

## ⭐ Support

If you find this extension useful:
- Star the repository on [GitHub](https://github.com/Ameen-Sha-Cheerangan/GNOME-QuickShutDown)
- Rate it on [GNOME Extensions](https://extensions.gnome.org/extension/[EXTENSION_ID]/shutdown-button/)
- Share it with others who might benefit

### 🌐 International Users
You can support me instantly via **Ko-fi**.

<a href="https://ko-fi.com/ameen_sha" target="_blank">
  <img src="https://storage.ko-fi.com/cdn/brandasset/kofi_button_blue.png" alt="Buy Me a Coffee at ko-fi.com" height="36" />
</a>

### 🇮🇳 Users in India (UPI)
You can support directly via any UPI app (GPay, PhonePe, Paytm) using the QR code or ID below:

<div align="center">
  <img src="https://raw.githubusercontent.com/Ameen-Sha-Cheerangan/.github/main/assets/upi-qr.jpg" alt="UPI QR Code" width="220"/>
  <br/>
  <b>UPI ID:</b> <code>ameenshahcheerangan-1@okicici</code>
</div>

<br/>

> **📱 Viewing on mobile?** 
> * **Direct Link:** [Click here to open your UPI app](https://upi.pe/ameenshahcheerangan-1@okicici?pn=Ameen+Sha+C)
> * **Manual Scan:** Take a screenshot of the QR code above and upload it directly inside your UPI app (GPay, PhonePe, Paytm, etc.).

---

## License

This project is licensed under the [MIT License](LICENSE).

---
