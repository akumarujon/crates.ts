#!/usr/bin/env just --justfile

hello:
  echo "hello world"

lint:
  deno lint .

fmt:
  deno fmt .
