---
title: Installing Windows 10 on the Ativ 5
tags:
  - ativ5
  - samsung
  - win10
  - windows
date: 2024-07-23
---

> [!warning]
> This guide is still a work in progress!

From my experience Windows 8(.1) has better performance, but if you want a more updated and still supported OS Windows 10 is the best choice for this underpowered tablet.

## Requirements

- A Windows 10/11 PC (32 or 64 bit doesn't matter)
- Windows 10 32 bit ISO (you can get one from [here](https://massgrave.dev/genuine-installation-media))
- The Ativ 5 driver pack (link will be added later)
- [NTLite](https://www.ntlite.com/download/)
- A USB hub, keyboard and mouse (touch won't work in the setup)
- An 8GB or larger USB flash drive
- A way to put the ISO on the USB drive and boot from it (I recommend [Rufus](https://rufus.ie/) or [Ventoy](https://www.ventoy.net/))

## The Guide

### Preparation

1. Extract the Windows ISO. You can use [7-Zip](https://7-zip.org/download.html) or mount the ISO and copy the contents to a new folder.
2. Extract the driver pack.
3. Install NTLite.
4. If you have data that you want to keep on the USB drive, back it up as the drive will be formatted.

### Creating the custom ISO

1. Open NTLite; if you're using it for the first time, choose the free licence.
2. Click on `Add`->`Image directory`. ([[add-image.png|example]])
3. Open the folder where you extraced the Windows ISO.
