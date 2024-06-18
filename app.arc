@app
arc-typescript-fingerprint-bug

@http
get /

@aws
# profile default
region us-east-2
runtime typescript # sets TS as the the default runtime for your entire project

@plugins
architect/plugin-typescript

@typescript
esbuild-config esbuild-config.js

@static
fingerprint true
