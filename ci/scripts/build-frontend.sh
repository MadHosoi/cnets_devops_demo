#!/usr/bin/env bash

set -e -u -x

mv dependency-cache/node_modules cnets-chat-git
cd cnets-chat-git && npm run build