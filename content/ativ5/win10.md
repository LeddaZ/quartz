---
title: Installing Windows 10 on the Ativ 5
tags:
  - ativ5
  - samsung
  - win10
  - windows
date: 2024-08-02
---

Even though Windows 8(.1) has better performance, if you want a more updated and still supported OS Windows 10 is the only choice for this underpowered tablet.

## Requirements

- A Windows 10/11 PC (32 or 64 bit doesn't matter)
- Windows 10 32 bit ISO (you can get one from [here](https://massgrave.dev/genuine-installation-media))
- The [Ativ 5 Driver Pack](https://drive.google.com/file/d/1vRVUXmraguzBs057rAa2GqUWVTssPj5y/view?usp=sharing)
- [NTLite](https://www.ntlite.com/download/)
- A USB hub, keyboard and mouse (touch won't work in the setup)
- An 8GB or larger USB flash drive
- A way to put the ISO on the USB drive and boot from it (I recommend [Rufus](https://rufus.ie/) or [Ventoy](https://www.ventoy.net/))

## The Guide

> [!info]
> For every step with a 🖼️ icon on the side, you can hover on 🖼️ to see an image for that step; click on 🖼️ to open the image in full screen.

### Preparation

1. Extract the Windows ISO. You can use [7-Zip](https://7-zip.org/download.html) or mount the ISO and copy the contents to a new folder.
2. Extract the driver pack.
3. Install NTLite.

> [!warning]
> Both the USB drive and the tablet will be formatted.

### Creating the custom ISO

1. Open NTLite; if you're using it for the first time, choose the free license.
2. Click on `Add`->`Image directory`. [[add-image.png|🖼️]]
3. Open the folder where you extraced the Windows ISO; it should look like [[iso-structure.png|this]].
4. Choose the Windows edition that you want to install, then click on `Load`. [[choose-edition.png|🖼️]]
5. Click on `Drivers` in the left pane, then `Add`->`Directory containing drivers`->`Add` [[add-drivers.png|🖼️]] and open the extracted Driver Pack folder. [[driver-pack.png|🖼️]]
6. Once the drivers have been added, click on `Apply` in the left pane. Here you'll want to configure the options as seen here: Save the image, remove all other editions from install.wim, WIM image format, and Create ISO (you can choose any name you want for it). [[apply.png|🖼️]]
7. Click on `Process` and wait for the ISO to be created, then close NTLite.

### Booting the ISO

1. Make a bootable USB using Rufus or Ventoy (I won't go into details here).
2. Power off the tablet and connect the USB keyboard, mouse and flash drive with a USB hub; it's also recommended to connect the charger.
3. Power on the tablet; as soon as you see the blue LED, repeatedly press **F10** on the keyboard until you see the boot menu.
4. Boot from the USB drive and wait for the installer to load.

### Installing Windows 10

This will be a bit different, as we can't normally install Windows 10 on this tablet. This is because the setup will crash once you reach the account creation process, likely due to outdated GPU drivers. The only way is **manually installing Windows and skipping the OOBE** (Out Of Box Experience); Enderman uploaded a great guide on YouTube, which you can find [here](https://youtu.be/JxJ6a-PY1KA).

**Good luck!** If you see some artifacts or glitches in the UI, it's unfortunately not fixable; the GPU drivers are too old to properly support Windows 10.
