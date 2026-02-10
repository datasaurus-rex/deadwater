Pre-commit hook setup

This repo includes a small pre-commit hook to block accidental secrets.

Enable it once with:

  git config core.hooksPath .githooks

If you ever need to disable it:

  git config --unset core.hooksPath
