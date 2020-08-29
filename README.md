# hexo-file-link-processor

A Hexo plugin for processing link in post.

## How to use

```bash
    npm install hexo-filter-file-link --save
```

Then add follow in your `_config.yaml`.

```yaml
filelink_prosessor:
  type: image # or file , both
  slice: n # it means sile(n), trim the first n words
  pre_append: # This string will pre-append on link
```

Have a try.
