#!/usr/bin/env just --justfile

alias s := start
alias l := lint
alias f := format

# Start the freaking project
start:
  echo "hello world"

# Check for eslint errors
lint:
  deno lint .

# Formatting source codes
format:
  deno fmt .

# Running unit tests
test:
	deno test
