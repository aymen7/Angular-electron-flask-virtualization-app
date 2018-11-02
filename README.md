# Angular-electron-flask-virtualization-app

## Description

This desktop linux system based virtualization app was created using:

1. Angular for the front-end development.
2. Electron to make the application a native desktop application
3. Python's Flask microFramework to create the REST API which make the communication between Angular and qemu possible (using libvirt).

## Install

1. clone this repo.
2. to install run  `npm install`.
3. `python flask_REST_API/rest-api/app.py` to start the REST_API locally.
4. to build and run the app use `npm run electron-build`.

## pre-install

Make sure that you have **libvirt**, **flask**, and **flask_restful** all installed.