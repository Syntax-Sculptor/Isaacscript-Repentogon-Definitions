#!/bin/bash

set -e # Exit on any errors

# Get the directory of this script:
# https://stackoverflow.com/questions/59895/getting-the-source-directory-of-a-bash-script-from-within
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

# Get the name of the repository:
# https://stackoverflow.com/questions/23162299/how-to-get-the-last-part-of-dirname-in-bash/23162553
REPO_NAME="$(basename "$DIR")"

SECONDS=0

cd "$DIR"

OUT_DIR="$DIR/../../dist/packages/$REPO_NAME"

rm -rf "$OUT_DIR"
npx tstl

# Copy the declarations into place. (The TypeScript compiler does not do this automatically for some
# reason.)
cp -R "$DIR/src/types" "$OUT_DIR/"

# TypeScript messes up the path inside of the triple slash directive, so we must manually repair it.
# /// <reference types="packages/isaac-typescript-definitions/src/types" />
# -->
# /// <reference path="types/index.d.ts" />
sed --in-place 's/types="packages\/isaac-typescript-definitions\/src\/types"/path="types\/index.d.ts"/' "$OUT_DIR/index.d.ts"

# Copy the rest of the files needed for NPM.
cp "$DIR/LICENSE" "$OUT_DIR/"
cp "$DIR/package.json" "$OUT_DIR/"
cp "$DIR/README.md" "$OUT_DIR/"

echo "Successfully built in $SECONDS seconds."
